'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'

export default function Heromodel() {
  const isTablet = useMediaQuery({ query: '(max-width : 1024px)' })
  const isMobile = useMediaQuery({ query: '(max-width : 768px)' })

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} className="w-full h-full">
        {/* Lights */}
        <ambientLight intensity={0.3} color="#ffffff" />
        <directionalLight position={[5, 5, 5]} intensity={4} />

        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        {/* Room Model */}
        <group
          scale={isMobile ? 0.7 : isTablet ? 0.85 : 1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Canvas>
    </div>
  )
}
