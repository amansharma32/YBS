'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, Suspense } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// --- Data for our 3D models ---
// Using the file names from the error message to ensure consistency.
const techIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

// --- Reusable Components ---

// Simple title header
const TitleHeader = ({ title, sub }) => (
  <div className="text-center mb-10">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-lg text-gray-500">{sub}</p>
  </div>
);

// A single 3D model component with lighting and controls
const ModelViewer = ({ modelPath, scale, rotation, onLoaded }) => {
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    // This effect ensures any custom logic (like changing materials) runs after the model loads.
    // Example: Applying a white material to a specific part of the Three.js model.
    if (modelPath.includes('three.js')) {
      scene.traverse((child) => {
        if (child.isMesh && child.name === 'Object_5') {
          child.material = new THREE.MeshStandardMaterial({ color: 'white' });
        }
      });
    }
  }, [scene, modelPath]);

  return (
    <group scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </group>
  );
};

// --- Main TechStack Component ---

const TechStack = () => {
  // Animate cards on scroll
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#skills',
          start: 'top 80%', // Start animation when the top of the section is 80% from the top of the viewport
        },
      }
    );
  }, []);

  // Preload all models for a smoother experience
  useEffect(() => {
    techIcons.forEach((tech) => {
      useGLTF.preload(tech.modelPath);
    });
  }, []);

  return (
    <section id="skills" className="flex justify-center items-center py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techIcons.map((tech) => (
            <div
              key={tech.name}
              className="tech-card card-border group overflow-hidden rounded-xl shadow-lg  "
            >
              <div className="h-60 w-full cursor-grab active:cursor-grabbing">
                <Canvas>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                  <Environment preset="city" />
                  
                  <Suspense fallback={null}>
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
                      <ModelViewer {...tech} />
                    </Float>
                  </Suspense>

                  <OrbitControls enableZoom={false} />
                </Canvas>
              </div>
              <div className="text-center p-4  ">
                <p className="font-medium text-white">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;