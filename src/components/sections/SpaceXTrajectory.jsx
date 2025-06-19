// Filename: /components/SpaceXTrajectory.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// The following imports are the standard way to use GSAP and its plugins.
// The error "Could not resolve" typically points to a build or dependency issue
// rather than an error in the code logic itself.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// We must register the plugin with GSAP to activate it
gsap.registerPlugin(ScrollTrigger);

const SpaceXTrajectory = () => {
    const mountRef = useRef(null);
    const sceneContainerRef = useRef(null);

    useEffect(() => {
        // This check is crucial to ensure Three.js/GSAP code only runs on the client
        if (typeof window === 'undefined') {
            return;
        }

        // === THREE.JS SCENE SETUP ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        
        if (mountRef.current) {
            renderer.setSize(window.innerWidth, window.innerHeight);
            // Prevent adding multiple canvases on hot reloads
            if (mountRef.current.children.length === 0) {
               mountRef.current.appendChild(renderer.domElement);
            }
        }

        // === LIGHTING ===
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        // === OBJECTS ===
        // --- Stars ---
        const starGeometry = new THREE.BufferGeometry();
        const starVertices = [];
        for (let i = 0; i < 15000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            if (Math.sqrt(x*x + y*y + z*z) > 150) {
                 starVertices.push(x, y, z);
            }
        }
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);

        // --- Space Shuttle Model ---
        const spaceShuttle = new THREE.Group();
        const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
        const blackMaterial = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.3 });
        const engineMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6 });

        // Fuselage
        const fuselageGeom = new THREE.CylinderGeometry(0.2, 0.15, 2, 32);
        const fuselage = new THREE.Mesh(fuselageGeom, whiteMaterial);
        fuselage.rotation.z = Math.PI / 2;
        spaceShuttle.add(fuselage);
        
        // Cockpit
        const cockpitGeom = new THREE.BoxGeometry(0.4, 0.3, 0.5);
        const cockpit = new THREE.Mesh(cockpitGeom, whiteMaterial);
        cockpit.position.x = 1;
        spaceShuttle.add(cockpit);

        // Cockpit window
        const windowGeom = new THREE.BoxGeometry(0.05, 0.15, 0.3);
        const windowMesh = new THREE.Mesh(windowGeom, blackMaterial);
        windowMesh.position.x = 1.2;
        windowMesh.position.y = 0.05;
        spaceShuttle.add(windowMesh);

        // Main wings (Delta wings)
        const wingShape = new THREE.Shape();
        wingShape.moveTo(0, 0);
        wingShape.lineTo(-1.5, 1.5);
        wingShape.lineTo(-1.5, 1.2);
        wingShape.lineTo(0.2, 0);
        const wingExtrudeSettings = { depth: 0.05, bevelEnabled: false };
        const wingGeom = new THREE.ExtrudeGeometry(wingShape, wingExtrudeSettings);
        
        const leftWing = new THREE.Mesh(wingGeom, whiteMaterial);
        leftWing.rotation.x = -Math.PI/2;
        leftWing.position.set(-0.2, 0, 0.6);
        spaceShuttle.add(leftWing);

        const rightWing = leftWing.clone();
        rightWing.rotation.x = Math.PI/2;
        rightWing.position.set(-0.2, 0, -0.6);
        spaceShuttle.add(rightWing);
        
        // Wing Edges
        const edgeGeom = new THREE.BoxGeometry(1.8, 0.08, 0.08);
        const leftEdge = new THREE.Mesh(edgeGeom, blackMaterial);
        leftEdge.position.set(-0.85, 0, 1.35);
        leftEdge.rotation.y = Math.PI / 4;
        spaceShuttle.add(leftEdge);
        
        const rightEdge = leftEdge.clone();
        rightEdge.position.z = -1.35;
        spaceShuttle.add(rightEdge);


        // Tail Fin
        const tailShape = new THREE.Shape();
        tailShape.moveTo(0, 0);
        tailShape.lineTo(-0.6, 0.8);
        tailShape.lineTo(-0.6, 0.7);
        tailShape.lineTo(0, 0);
        const tailGeom = new THREE.ExtrudeGeometry(tailShape, wingExtrudeSettings);
        const tailFin = new THREE.Mesh(tailGeom, whiteMaterial);
        tailFin.position.set(-1, 0, 0);
        spaceShuttle.add(tailFin);

        // Tail Fin Edge
        const tailEdgeGeom = new THREE.BoxGeometry(0.7, 0.08, 0.04);
        const tailEdge = new THREE.Mesh(tailEdgeGeom, blackMaterial);
        tailEdge.position.set(-1.3, 0.4, 0);
        tailEdge.rotation.z = 0.95;
        spaceShuttle.add(tailEdge);
        
        // Engines
        const engine1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16), engineMaterial);
        engine1.position.set(-1.1, 0, 0);
        engine1.rotation.z = Math.PI / 2;
        
        const engine2 = engine1.clone();
        engine2.position.y = 0.12;
        
        const engine3 = engine1.clone();
        engine3.position.y = -0.12;
        
        spaceShuttle.add(engine1, engine2, engine3);
        
        spaceShuttle.scale.set(0.8, 0.8, 0.8);
        scene.add(spaceShuttle);


        // --- Trajectory Path ---
        const curve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-10, -5, 0), // Start bottom-left
            new THREE.Vector3(-5, 2, -5),  // Upward curve
            new THREE.Vector3(0, -3, -10),  // Downward dip
            new THREE.Vector3(5, 3, -15),   // Upward curve
            new THREE.Vector3(10, -2, -20), // Downward dip
            new THREE.Vector3(15, 5, -25)  // End top-right
        ]);

        const points = curve.getPoints(200);
        const tubeGeometry = new THREE.TubeGeometry(curve, 200, 0.03, 8, false);
        const tubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00FFFF, side: THREE.DoubleSide });
        const trajectoryPath = new THREE.Mesh(tubeGeometry, tubeMaterial);
        scene.add(trajectoryPath);


        // === INITIAL CAMERA POSITION ===
        camera.position.set(0, 0, 10);
        camera.lookAt(scene.position);

        // === GSAP SCROLL-BASED ANIMATION ===
        gsap.set(spaceShuttle.rotation, { x: Math.PI / 2, y: -Math.PI / 8 }); // Initial orientation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sceneContainerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            }
        });

        tl.to(camera.position, { x: 2, y: 2, z: -15, ease: "power1.inOut" }, 0)
          .to(camera.rotation, { x: Math.PI / 16, y: -Math.PI / 8, ease: "power1.inOut" }, 0)
          .to({}, { 
              onUpdate: function() {
                  const time = this.progress();
                  const point = curve.getPointAt(time);
                  const tangent = curve.getTangentAt(time);

                  spaceShuttle.position.copy(point);
                  spaceShuttle.lookAt(point.clone().add(tangent));
                  spaceShuttle.rotateX(Math.PI/2); // Correct for initial model orientation
              },
              ease: "none"
          }, 0);


        // === ANIMATION LOOP ===
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            stars.rotation.y += 0.0001;
            stars.rotation.x += 0.0001;
            renderer.render(scene, camera);
        };

        animate();

        // === RESPONSIVENESS ===
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // === CLEANUP ===
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            scene.traverse(object => {
                if(object.geometry) object.geometry.dispose();
                if(object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            })
            renderer.dispose();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };

    }, []);

    return (
        <div ref={sceneContainerRef} style={{ height: '300vh', position: 'relative', background: 'black' }}>
            <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 1 }} />
            <div style={{
                position: 'absolute',
                top: '50vh',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                color: 'white',
                textAlign: 'center',
                padding: '2rem',
                zIndex: 2
            }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Shuttle Trajectory</h1>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                    Scroll to navigate the shuttle along its flight path through space.
                </p>
            </div>
             <div style={{
                position: 'absolute',
                top: '250vh',
                width: '100%',
                color: 'white',
                textAlign: 'center',
                padding: '2rem',
                zIndex: 2
            }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Mission Complete</h2>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
                   The journey has concluded.
                </p>
            </div>
        </div>
    );
};

export default SpaceXTrajectory;
