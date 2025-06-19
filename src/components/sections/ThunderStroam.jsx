import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

// GSAP will be loaded via script tags.
// For production builds, consider installing via npm and importing:
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * A reusable layout component that provides a fixed, scroll-animated thunderstorm background.
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to be rendered on top of the background.
 */
export default function ThunderStormLayout({ children }) {
    const canvasRef = useRef(null);
    const contentRef = useRef(null); // Ref for the main scrollable content

    useEffect(() => {
        if (!canvasRef.current) return;

        // --- Store references for cleanup ---
        let renderer, animationFrameId;
        const scene = new THREE.Scene();
        const cleanupGsap = []; // Array to store GSAP triggers for cleanup

        // This function contains all the logic that depends on GSAP
        const initAnimation = () => {
            const gsap = window.gsap;
            const ScrollTrigger = window.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            // --- SCROLL ANIMATION ---
            // The main timeline now triggers based on the content wrapper
            const mainTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: contentRef.current, // Use the ref to the content wrapper
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            });

            mainTimeline
                .to(camera.position, { x: 0, y: 0, z: 25 }, 'start')
                .to(camera.rotation, { x: 0, y: 0, z: 0 }, 'start')
                .to(camera.position, { x: -20, y: 10, z: 15 }, 'middle')
                .to(camera.rotation, { x: -0.2, y: -0.5, z: 0 }, 'middle')
                .to(camera.position, { x: 0, y: -15, z: 20 }, 'end')
                .to(camera.rotation, { x: 0.4, y: 0.1, z: 0 }, 'end');

            cleanupGsap.push(mainTimeline.scrollTrigger);

            // --- DYNAMIC LIGHTNING TRIGGERS ---
            // Find all elements with the class '.lightning-trigger' within the content
            const lightningTriggerElements = gsap.utils.toArray('.lightning-trigger');
            lightningTriggerElements.forEach(el => {
                const trigger = ScrollTrigger.create({
                    trigger: el,
                    start: "top center",
                    onEnter: () => { for (let i = 0; i < 8; i++) setTimeout(createLightning, Math.random() * 700); },
                    onEnterBack: () => { for (let i = 0; i < 4; i++) setTimeout(createLightning, Math.random() * 700); }
                });
                cleanupGsap.push(trigger); // Add to cleanup array
            });
        };

        // --- CORE SETUP ---
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 50;

        renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // --- POST-PROCESSING ---
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 0.1, 0.1);
        composer.addPass(bloomPass);

        // --- LIGHTING ---
        scene.add(new THREE.AmbientLight(0x4040ff, 0.2));
        const flashLight = new THREE.PointLight(0xeeeeff, 0, 500, 2);
        flashLight.position.set(0, 0, 30);
        scene.add(flashLight);

        // --- OBJECT CREATION (Nodes) ---
        const nodesGeometry = new THREE.BufferGeometry();
        const nodesCount = 500;
        const posArray = new Float32Array(nodesCount * 3);
        for (let i = 0; i < nodesCount * 3; i++) {
            const r = Math.random() * 80;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            posArray[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
            posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            posArray[i * 3 + 2] = r * Math.cos(phi);
        }
        nodesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const nodesMaterial = new THREE.PointsMaterial({ size: 0.15, color: 0xa8b2ff, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending });
        const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
        scene.add(nodes);

        const nodePositions = nodes.geometry.attributes.position.array;

        // --- OBJECT CREATION (Clouds) ---
        const cloudParticles = [];
        const cloudLoader = new THREE.TextureLoader();
        cloudLoader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABaklEQVR42u3SMQoCMRCE0f//aZo2Q4gqIAjBiNk2d6L/v86HwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzD8J5fL5TJ5n89nsfP5XN7O5/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/M8z/P8/B8wDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMPwF/cDAAD//wMAANs4fgF5AAAAAElFTkSuQmCC', (texture) => {
            const cloudGeo = new THREE.PlaneGeometry(100, 100);
            const cloudMaterial = new THREE.MeshLambertMaterial({ map: texture, transparent: true, opacity: 0.04, blending: THREE.AdditiveBlending, depthWrite: false, color: 0x303070 });
            for (let p = 0; p < 5; p++) {
                const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                cloud.position.set((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, -p * 50);
                cloud.rotation.set(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2);
                scene.add(cloud);
                cloudParticles.push(cloud);
            }
        });
        
        // --- LIGHTNING CREATION ---
        let lightningBolts = [];
        const createLightning = () => {
            // Function remains largely the same
            if (!nodePositions || nodePositions.length === 0) return;
            const startIndex = Math.floor(Math.random() * nodesCount) * 3;
            const endIndex = Math.floor(Math.random() * nodesCount) * 3;
            const startPoint = new THREE.Vector3(nodePositions[startIndex], nodePositions[startIndex + 1], nodePositions[startIndex + 2]);
            const endPoint = new THREE.Vector3(nodePositions[endIndex], nodePositions[endIndex + 1], nodePositions[endIndex + 2]);

            if (startPoint.distanceTo(endPoint) > 60) return;

            const points = [startPoint];
            let currentPoint = startPoint.clone();
            const direction = endPoint.clone().sub(startPoint).normalize();
            const distance = startPoint.distanceTo(endPoint);
            let segmentLength = 5;

            while (currentPoint.distanceTo(startPoint) < distance) {
                currentPoint.add(direction.clone().multiplyScalar(segmentLength));
                currentPoint.add(new THREE.Vector3((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4));
                points.push(currentPoint.clone());
            }
            points.push(endPoint);

            const bolt = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, linewidth: 2 }));
            scene.add(bolt);
            lightningBolts.push(bolt);

            if (window.gsap) {
                window.gsap.to(bolt.material, { opacity: 0, duration: 0.8, delay: 0.2, onComplete: () => {
                    scene.remove(bolt);
                    bolt.geometry.dispose();
                    bolt.material.dispose();
                    lightningBolts = lightningBolts.filter(b => b !== bolt);
                }});
                window.gsap.to(flashLight, { intensity: 1, duration: 0.1, yoyo: true, repeat: 1 });
            }
        };

        // --- RENDER LOOP ---
        const clock = new THREE.Clock();
        const animate = () => {
            nodes.rotation.y = clock.getElapsedTime() * 0.02;
            cloudParticles.forEach(p => { p.rotation.z += 0.001; });
            if (Math.random() > 0.995) createLightning();
            composer.render();
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // --- RESIZE HANDLER ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };
        window.addEventListener('resize', handleResize);

        // --- DYNAMICALLY LOAD GSAP AND INITIALIZE ANIMATIONS ---
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

        // --- CLEANUP ---
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            cleanupGsap.forEach(st => st.kill()); // Kill all created ScrollTriggers
            
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
            document.body.removeChild(gsapScript);
            // It's harder to reliably remove the second script, but this is often sufficient
        };
    }, []);

    return (
        <div>
            {/* The canvas is fixed to the background */}
            <canvas ref={canvasRef} className="fixed top-0 left-0   outline-none" />

            {/* The content is rendered here. It's positioned relatively to scroll over the canvas. */}
            <div ref={contentRef} className="relative z-0">
                {children}
            </div>
        </div>
    );
}