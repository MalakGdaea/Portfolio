// src/components/ThreeScene.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const RotatingCube = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;

        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[4, 4, 4]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};

const ThreeScene: React.FC = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <RotatingCube />
        </Canvas>
    );
};

export default ThreeScene;
