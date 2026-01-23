import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../Layout/ThemeContext';

const Particles = ({ count = 200, color }: { count?: number; color: string }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={lightRef} distance={40} intensity={8} color={color} />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color={color} emissive={color} wireframe />
      </instancedMesh>
    </>
  );
};

const TechGlobe = ({ color }: { color: string }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (mesh.current) {
        mesh.current.rotation.y += 0.002;
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2.5, 2]} />
      <meshStandardMaterial 
        color={color} 
        wireframe 
        transparent 
        opacity={0.3} 
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

const Scene = () => {
  const { theme } = useTheme();
  
  // Dynamic colors based on theme
  const accentColor = theme === 'dark' ? '#3b82f6' : '#2563eb';
  const secondaryColor = theme === 'dark' ? '#10b981' : '#059669';

  return (
    <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <TechGlobe color={accentColor} />
        </Float>

        <Particles count={100} color={secondaryColor} />
        <Particles count={50} color={accentColor} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
        />
        
        {/* Fog to blend edges */}
        <fog attach="fog" args={[theme === 'dark' ? '#0f172a' : '#f8fafc', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default Scene;