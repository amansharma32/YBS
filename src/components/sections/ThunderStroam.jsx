import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

/**
 * A reusable layout component that provides a fixed, scroll-animated "Digital Nervous System" background.
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to be rendered on top of the background.
 */
export default function ThunderStormLayout({ children }) {
    const canvasRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let renderer, animationFrameId;
        const scene = new THREE.Scene();
        const cleanupGsap = [];

        const initAnimation = () => {
            const gsap = window.gsap;
            const ScrollTrigger = window.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            const mainTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            });

            mainTimeline
                .to(camera.position, { x: 0, y: 0, z: 35 }, 'start') // Adjusted Z for better view
                .to(camera.rotation, { x: 0, y: 0, z: 0 }, 'start')
                .to(camera.position, { x: 25, y: 15, z: 25 }, 'middle')
                .to(camera.rotation, { x: -0.1, y: 0.5, z: 0 }, 'middle')
                .to(camera.position, { x: -10, y: -15, z: 30 }, 'end')
                .to(camera.rotation, { x: 0.4, y: -0.2, z: 0 }, 'end');

            cleanupGsap.push(mainTimeline.scrollTrigger);

            const lightningTriggerElements = gsap.utils.toArray('.lightning-trigger');
            lightningTriggerElements.forEach(el => {
                const trigger = ScrollTrigger.create({
                    trigger: el,
                    start: "top center",
                    onEnter: () => { for (let i = 0; i < 5; i++) setTimeout(createLightning, Math.random() * 400); },
                    onEnterBack: () => { for (let i = 0; i < 2; i++) setTimeout(createLightning, Math.random() * 400); }
                });
                cleanupGsap.push(trigger);
            });
        };

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 60; // Start further back to see the whole structure

        renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.1, 0.1);
        composer.addPass(bloomPass);

        scene.add(new THREE.AmbientLight(0x4040ff, 0.2));
        const flashLight = new THREE.PointLight(0xeeeeff, 0, 500, 2);
        flashLight.position.set(0, 0, 30);
        scene.add(flashLight);

        // --- OBJECT CREATION (Nervous System / Star Shape) ---
        const nodesGeometry = new THREE.BufferGeometry();
        const nodesCount = 1000; // More points for a more defined shape
        const posArray = new Float32Array(nodesCount * 3);
        
        const coreSize = 100; // Number of points in the central core
        const numBranches = 20;
        const pointsPerBranch = Math.floor((nodesCount - coreSize) / numBranches);
        const branchLength = 60;
        let currentIndex = 0;

        // Create the central core (a small, dense sphere)
        for (let i = 0; i < coreSize; i++) {
            const r = Math.random() * 4;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            posArray[currentIndex * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
            posArray[currentIndex * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            posArray[currentIndex * 3 + 2] = r * Math.cos(phi);
            currentIndex++;
        }

        // Create the branches radiating outwards
        for (let i = 0; i < numBranches; i++) {
            const branchVector = new THREE.Vector3().setFromSphericalCoords(
                1, // radius of 1 to get a direction
                Math.acos(2 * Math.random() - 1),
                Math.random() * Math.PI * 2
            );

            for (let j = 0; j < pointsPerBranch; j++) {
                if (currentIndex >= nodesCount) break;
                const distance = (Math.random() * 0.75 + 0.25) * branchLength; // Random distance along branch
                const point = branchVector.clone().multiplyScalar(distance);
                
                // Add jitter to make it look more organic
                point.add(new THREE.Vector3(
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6,
                    (Math.random() - 0.5) * 6
                ));

                posArray[currentIndex * 3 + 0] = point.x;
                posArray[currentIndex * 3 + 1] = point.y;
                posArray[currentIndex * 3 + 2] = point.z;
                currentIndex++;
            }
        }
        
        nodesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const nodesMaterial = new THREE.PointsMaterial({ size: 0.1, color: 0xa8b2ff, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending });
        const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
        scene.add(nodes);

        const nodePositions = nodes.geometry.attributes.position.array;

        // --- LIGHTNING CREATION (Reflex Arc) ---
        let lightningBolts = [];
        const createLightning = () => {
            if (!nodePositions || nodePositions.length === 0) return;
            
            // **MODIFIED**: Pick a start from a branch and an end from the core.
            const branchPointsCount = nodesCount - coreSize;
            const startNodeIndex = coreSize + Math.floor(Math.random() * branchPointsCount);
            const endNodeIndex = Math.floor(Math.random() * coreSize);

            const startIndex = startNodeIndex * 3;
            const endIndex = endNodeIndex * 3;
            
            const startPoint = new THREE.Vector3(nodePositions[startIndex], nodePositions[startIndex + 1], nodePositions[startIndex + 2]);
            const endPoint = new THREE.Vector3(nodePositions[endIndex], nodePositions[endIndex + 1], nodePositions[endIndex + 2]);

            // Create a path between the two points
            const points = [startPoint];
            let currentPoint = startPoint.clone();
            const direction = endPoint.clone().sub(startPoint).normalize();
            const distance = startPoint.distanceTo(endPoint);
            let segmentLength = 5;

            while (currentPoint.distanceTo(startPoint) < distance) {
                currentPoint.add(direction.clone().multiplyScalar(segmentLength));
                // **MODIFIED**: Reduced random offset for a straighter, more signal-like path
                const randomOffset = new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
                currentPoint.add(randomOffset);
                points.push(currentPoint.clone());
            }
            points.push(endPoint);

            // **MODIFIED**: Thinner, whiter line for a cleaner look
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, linewidth: 1.5, opacity: 0.8 });
            const bolt = new THREE.Line(geometry, material);
            scene.add(bolt);
            lightningBolts.push(bolt);

            if (window.gsap) {
                window.gsap.to(material, { opacity: 0, duration: 0.5, delay: 0.1, onComplete: () => {
                    scene.remove(bolt);
                    bolt.geometry.dispose();
                    bolt.material.dispose();
                    lightningBolts = lightningBolts.filter(b => b !== bolt);
                }});
                window.gsap.to(flashLight, { intensity: 0.8, duration: 0.05, yoyo: true, repeat: 1 });
            }
        };

        const clock = new THREE.Clock();
        const animate = () => {
            nodes.rotation.y = clock.getElapsedTime() * 0.03;
            nodes.rotation.x = clock.getElapsedTime() * 0.01;
            if (Math.random() > 0.992) createLightning();
            composer.render();
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };
        window.addEventListener('resize', handleResize);

        const gsapScript = document.createElement('script');
        gsapScript.src = "https://unpkg.com/gsap@3.12.4/dist/gsap.min.js";
        gsapScript.async = true;
        document.body.appendChild(gsapScript);
        gsapScript.onload = () => {
            const scrollTriggerScript = document.createElement('script');
            scrollTriggerScript.src = "https://unpkg.com/gsap@3.12.4/dist/ScrollTrigger.min.js";
            scrollTriggerScript.async = true;
            document.body.appendChild(scrollTriggerScript);
            scrollTriggerScript.onload = initAnimation;
        };

        return () => {
            // Comprehensive cleanup
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            cleanupGsap.forEach(st => st.kill());
            scene.traverse(object => {
                if (object.geometry) object.geometry.dispose();
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(mat => mat.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
            if(renderer) renderer.dispose();
        };
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} className="fixed top-0 left-0   outline-none" />
            <div ref={contentRef} className="relative z-0">
                {children}
            </div>
        </div>
    );
}