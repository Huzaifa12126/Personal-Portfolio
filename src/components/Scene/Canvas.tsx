"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { GitHubRepo } from '@/lib/github';
import { Loader, ScrollControls } from '@react-three/drei';

interface SceneCanvasProps {
  projects: GitHubRepo[];
}

export const SceneCanvas: React.FC<SceneCanvasProps> = ({ projects }) => {
  return (
    <div className="absolute inset-0 z-0 bg-background">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 0], fov: 75 }}
      >
        <Suspense fallback={null}>
          <ScrollControls pages={5} damping={0.2}>
            <Experience projects={projects} />
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};