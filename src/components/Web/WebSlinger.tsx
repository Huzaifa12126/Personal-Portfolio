"use client";

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

interface WebSlingerProps {
  projects: { id: string | number; position: THREE.Vector3; name: string }[];
}

export const WebSlinger: React.FC<WebSlingerProps> = ({ projects }) => {
  const { camera } = useThree();
  const scroll = useScroll();
  const lineRef = useRef<THREE.Line>(null!);
  const activePoint = useRef<THREE.Vector3 | null>(null);

  useFrame(() => {
    const t = scroll.offset;
    const currentProg = t * projects.length;
    const projectIndex = Math.min(Math.floor(currentProg), projects.length - 1);
    const currentProject = projects[projectIndex];

    if (currentProject && Math.abs(scroll.delta) > 0.0001) {
      activePoint.current = currentProject.position;
    } else {
      activePoint.current = null;
    }

    if (activePoint.current && lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position.array as Float32Array;
      
      // Calculate wrist position relative to camera viewpoint
      const wrist = new THREE.Vector3(0.3, -0.4, -0.5).applyQuaternion(camera.quaternion).add(camera.position);
      
      positions[0] = wrist.x;
      positions[1] = wrist.y;
      positions[2] = wrist.z;
      positions[3] = activePoint.current.x;
      positions[4] = activePoint.current.y;
      positions[5] = activePoint.current.z;
      
      lineRef.current.geometry.attributes.position.needsUpdate = true;
      lineRef.current.visible = true;
    } else if (lineRef.current) {
      lineRef.current.visible = false;
    }
  });

  return (
    <line ref={lineRef as any} {...{ frustumCulled: false } as any}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array(6)}
          itemSize={3}
          args={[new Float32Array(6), 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#e0f7fa" transparent opacity={0.8} />
    </line>
  );
};