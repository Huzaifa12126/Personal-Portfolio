"use client";

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';
import { GitHubRepo } from '@/lib/github';
import { Loader, ScrollControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

interface SceneCanvasProps {
  projects: GitHubRepo[];
}

const CameraRig = () => {
  const { camera, size } = useThree();
  
  useEffect(() => {
    // Increase FOV on mobile to "zoom out" and show more of the scene
    const isMobile = size.width < 768;
    // @ts-ignore - Three.js PerspectiveCamera has fov
    camera.fov = isMobile ? 100 : 75;
    // @ts-ignore
    camera.updateProjectionMatrix();
  }, [size.width, camera]);

  return null;
};

export const SceneCanvas: React.FC<SceneCanvasProps> = ({ projects }) => {
  return (
    <div className="absolute inset-0 z-0 bg-background">
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 0], fov: 75 }}
      >
        <CameraRig />
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