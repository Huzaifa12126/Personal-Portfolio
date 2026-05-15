import React, { useMemo, useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Stars, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { GitHubRepo } from '@/lib/github';
import { ProjectCard } from './ProjectCard';
import { WebSlinger } from '../Web/WebSlinger';

interface ExperienceProps {
  projects: GitHubRepo[];
}

interface ProjectNode {
  id: number;
  name: string;
  position: THREE.Vector3;
  cardPosition: THREE.Vector3;
  repo: GitHubRepo;
}

interface BuildingData {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  emissive: string;
  isProject?: boolean;
}

export const Experience: React.FC<ExperienceProps> = ({ projects }) => {
  const { camera } = useThree();
  const scroll = useScroll();
  const [mounted, setMounted] = useState(false);
  const lastTRef = useRef(0);
  
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Create a path that goes EXACTLY through the project skyscrapers
  const { curve, projectNodes, buildings } = useMemo(() => {
    const nodes: ProjectNode[] = [];
    const buildingsArr: BuildingData[] = [];
    const curvePoints: THREE.Vector3[] = [new THREE.Vector3(0, 0, 0)];

    // Seeded random for purity and consistency
    const getSeededRandom = (seed: number) => {
      const val = (seed * 9301 + 49297) % 233280;
      return val / 233280;
    };

    projects.forEach((repo, index) => {
      const z = -(index + 1) * 40;
      const x = (index % 2 === 0 ? 1 : -1) * 15;
      const y = (index % 2 === 0 ? 5 : -5);

      const buildingPos = new THREE.Vector3(x, -25, z);
      const height = 60 + getSeededRandom(index * 77) * 40;
      const anchorPoint = new THREE.Vector3(x, -25 + height, z);

      // Add project building
      buildingsArr.push({
        position: [buildingPos.x, buildingPos.y + height/2, buildingPos.z],
        scale: [12, height, 12],
        color: "#1f1f22",
        emissive: "#ff525d",
        isProject: true
      });

      // Add anchor node for web
      nodes.push({
        id: repo.id,
        name: repo.name,
        position: anchorPoint,
        cardPosition: new THREE.Vector3(x, -25 + height / 3, z),
        repo: repo
      });

      // Add point for camera path
      curvePoints.push(new THREE.Vector3(x * 0.5, y, z + 15));
    });

    curvePoints.push(new THREE.Vector3(0, 0, -(projects.length + 1) * 40));

    // RANDOMIZED CITY GENERATION
    // Reduced count and increased distance from path for a cleaner look
    for (let i = 0; i < 40; i++) {
        const side = getSeededRandom(i * 123) > 0.5 ? 1 : -1;
        // Increase clear zone (min 35 units from center) to avoid the "straight line" look
        const randomX = side * (35 + getSeededRandom(i * 456) * 120);
        const randomZ = -getSeededRandom(i * 789) * 450;

        const width = 8 + getSeededRandom(i * 111) * 10;
        const depth = 8 + getSeededRandom(i * 222) * 10;
        const height = 15 + getSeededRandom(i * 333) * 60;

        buildingsArr.push({
          position: [randomX, -25 + height/2, randomZ],
          scale: [width, height, depth],
          color: "#0a0a0c",
          emissive: getSeededRandom(i * 444) > 0.9 ? "#ff525d" : "#00eefc"
        });
    }

    return { 
        curve: new THREE.CatmullRomCurve3(curvePoints), 
        projectNodes: nodes,
        buildings: buildingsArr
    };
  }, [projects]);

  useFrame(() => {
    if (!scroll) return;
    const t = scroll.offset;
    const clampedT = Math.max(0, Math.min(1, t));

    const direction = clampedT - lastTRef.current;
    lastTRef.current = clampedT;

    const position = curve.getPoint(clampedT);
    const lookAtSampleT =
      direction >= 0
        ? Math.min(clampedT + 0.01, 1)
        : Math.max(clampedT - 0.01, 0);
    const lookAtTarget = curve.getPoint(lookAtSampleT);

    camera.position.copy(position);
    camera.lookAt(lookAtTarget);
  });

  return (
    <>
      <color attach="background" args={['#050507']} />
      <fog attach="fog" args={['#050507', 20, 150]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[20, 50, 10]} intensity={3} color="#ff525d" />
      <pointLight position={[-20, 50, -20]} intensity={3} color="#00eefc" />

      <Stars radius={150} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
      
      {buildings.map((b, i) => (
        <mesh key={i} position={b.position}>
          <boxGeometry args={b.scale} />
          <meshStandardMaterial 
            color={b.color} 
            emissive={b.emissive}
            emissiveIntensity={b.isProject ? 0.8 : 0.2}
          />
        </mesh>
      ))}

      <WebSlinger projects={projectNodes} />

      {/* The Road */}
      <group position={[0, -24.9, -200]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 1000]} />
          <meshStandardMaterial color="#0a0a0c" roughness={0.8} />
        </mesh>
        {/* Neon Lane Markers */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]}>
          <planeGeometry args={[0.2, 1000]} />
          <meshStandardMaterial color="#ff525d" emissive="#ff525d" emissiveIntensity={2} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[9.8, 0.05, 0]}>
          <planeGeometry args={[0.1, 1000]} />
          <meshStandardMaterial color="#00eefc" emissive="#00eefc" emissiveIntensity={1} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-9.8, 0.05, 0]}>
          <planeGeometry args={[0.1, 1000]} />
          <meshStandardMaterial color="#00eefc" emissive="#00eefc" emissiveIntensity={1} />
        </mesh>
      </group>

      {projectNodes.map((node) => {
        return (
          <group
            key={node.id}
            position={[
              node.cardPosition.x,
              node.cardPosition.y,
              node.cardPosition.z
            ]}
          >
            <Html
              transform
              distanceFactor={10}
              position={[0, 0, 0]}
              portal={mounted ? { current: document.body } : undefined}
            >
              <ProjectCard repo={node.repo} />
            </Html>
            
            <mesh position={[0, 0, 0]}>
              <sphereGeometry args={[0.3, 16, 16]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
            </mesh>
          </group>
        );
      })}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -25, -150]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#050507" roughness={1} />
      </mesh>
    </>
  );
};