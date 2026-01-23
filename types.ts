import React, { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      pointLight: any;
      group: any;
      mesh: any;
      instancedMesh: any;
      dodecahedronGeometry: any;
      icosahedronGeometry: any;
      sphereGeometry: any;
      meshPhongMaterial: any;
      meshStandardMaterial: any;
      fog: any;
      primitive: any;
      // Fallback for any other Three.js elements
      [elemName: string]: any;
    }
  }
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  role: 'Solo' | 'Team Lead' | 'Contributor';
  isFeatured?: boolean;
  aiNote?: string;
  image?: string;
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  price: string;
  delivery: string;
  platform: 'Fiverr' | 'Upwork' | 'Direct';
  link: string;
}

export interface SkillNode {
  name: string;
  level: number; // 0-100
  category: 'Language' | 'Frontend' | 'Backend' | 'System' | 'AI';
  years: number;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}