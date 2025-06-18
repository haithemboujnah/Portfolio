// Logo3D.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Text3D, OrbitControls } from '@react-three/drei';

export default function Logo3D() {
  return (
    <div style={{ width: 200, height: 200 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          position={[-1.2, -0.1, 0]}
        >
          {'HB'}
          <meshStandardMaterial color="#3a86ff" />
        </Text3D>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      </Canvas>
    </div>
  );
}
