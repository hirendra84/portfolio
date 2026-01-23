import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS } from '../../constants';
import { useTheme } from '../Layout/ThemeContext';

const SkillNode = ({ position, name, color, onClick }: any) => {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (ref.current) {
        ref.current.lookAt(state.camera.position);
    }
  });

  return (
    <group 
        ref={ref} 
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={onClick}
    >
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={hovered ? '#ffffff' : color} emissive={color} emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <Text
        position={[0, 0.5, 0]}
        fontSize={0.4}
        color={hovered ? '#ffffff' : color}
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/jetbrainsmono/v13/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0pnF8R-0.woff"
      >
        {name}
      </Text>
    </group>
  );
};

const SkillConnections = ({ nodes, color }: { nodes: any[], color: string }) => {
    // Create random connections for visual effect
    const lines = useMemo(() => {
        const linePoints = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (Math.random() > 0.7) { // Connect some nodes
                    linePoints.push([nodes[i].position, nodes[j].position]);
                }
            }
        }
        return linePoints;
    }, [nodes]);

    return (
        <group>
            {lines.map((pts, i) => (
                <Line 
                    key={i} 
                    points={pts as any} 
                    color={color} 
                    transparent 
                    opacity={0.1} 
                    lineWidth={1} 
                />
            ))}
        </group>
    )
}

const SkillCloud = ({ setSelectedSkill }: { setSelectedSkill: (s: any) => void }) => {
  const { theme } = useTheme();
  const baseColor = theme === 'dark' ? '#3b82f6' : '#2563eb';
  
  // Calculate positions in a sphere
  const nodes = useMemo(() => {
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    return SKILLS.map((skill, i) => {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / SKILLS.length);
      const radius = 4;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      return { 
          ...skill, 
          position: new THREE.Vector3(x, y, z),
          color: skill.category === 'AI' ? '#ef4444' : baseColor 
      };
    });
  }, [baseColor]);

  return (
    <group>
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
            <SkillConnections nodes={nodes} color={baseColor} />
            {nodes.map((node, i) => (
                <SkillNode 
                    key={i} 
                    position={node.position} 
                    name={node.name} 
                    color={node.color}
                    onClick={(e: any) => { e.stopPropagation(); setSelectedSkill(node); }}
                />
            ))}
        </Float>
    </group>
  );
};

const SkillGraph = ({ onSkillSelect }: { onSkillSelect: (skill: any) => void }) => {
  return (
    <div className="h-[400px] w-full cursor-pointer">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SkillCloud setSelectedSkill={onSkillSelect} />
      </Canvas>
    </div>
  );
};

export default SkillGraph;