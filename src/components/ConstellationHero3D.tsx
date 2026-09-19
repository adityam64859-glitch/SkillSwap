import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Activity, Radio, Sparkles, Zap } from 'lucide-react';

interface ConstellationHero3DProps {
  onSelectSkillNode?: (skillName: string) => void;
}

const SKILL_NODES = [
  { name: 'React & WebGL', color: 0x06b6d4, category: 'Engineering' },
  { name: 'Brand & Figma', color: 0xa855f7, category: 'Design' },
  { name: 'Ableton & Piano', color: 0x3b82f6, category: 'Audio' },
  { name: 'French Pastry', color: 0xec4899, category: 'Culinary' },
  { name: 'Japanese & Kanji', color: 0x10b981, category: 'Languages' },
  { name: 'Calisthenics', color: 0xf59e0b, category: 'Fitness' }
];

export const ConstellationHero3D: React.FC<ConstellationHero3DProps> = ({ onSelectSkillNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [fps, setFps] = useState<number>(64);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 520;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x221c3b, 2.0);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x06b6d4, 4.0);
    dirLight1.position.set(20, 20, 25);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 4.5);
    dirLight2.position.set(-20, -15, 20);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x38bdf8, 2.5, 60);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    // Group
    const group = new THREE.Group();
    scene.add(group);

    // Central glowing core orb
    const coreGeo = new THREE.IcosahedronGeometry(3.6, 3);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x181335,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.75,
      specular: 0x22d3ee,
      shininess: 95
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Outer wireframe halo around core
    const haloGeo = new THREE.IcosahedronGeometry(4.8, 2);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.4
    });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    group.add(haloMesh);

    // Orbiting Skill Satellite Orbs
    const satellites: Array<{
      mesh: THREE.Mesh;
      baseAngle: number;
      speed: number;
      yOffset: number;
      radius: number;
      name: string;
    }> = [];

    const numSatellites = SKILL_NODES.length;
    const orbitRadius = 13.5;

    for (let i = 0; i < numSatellites; i++) {
      const angle = (i / numSatellites) * Math.PI * 2;
      const yOffset = Math.sin(i * 1.5) * 3.5;
      const x = Math.cos(angle) * orbitRadius;
      const z = Math.sin(angle) * orbitRadius * 0.7;

      const satGeo = new THREE.SphereGeometry(1.6, 32, 32);
      const satMat = new THREE.MeshPhongMaterial({
        color: 0x11162a,
        emissive: SKILL_NODES[i].color,
        emissiveIntensity: 0.9,
        specular: 0xffffff,
        shininess: 100
      });
      const satMesh = new THREE.Mesh(satGeo, satMat);
      satMesh.position.set(x, yOffset, z);

      // Outer ring for each skill node
      const ringGeo = new THREE.RingGeometry(2.1, 2.35, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: SKILL_NODES[i].color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2 + i * 0.3;
      satMesh.add(ringMesh);

      group.add(satMesh);
      satellites.push({
        mesh: satMesh,
        baseAngle: angle,
        speed: 0.4 + i * 0.05,
        yOffset: yOffset,
        radius: orbitRadius + (i % 2 === 0 ? 1.5 : -1.5),
        name: SKILL_NODES[i].name
      });
    }

    // Energy Connection Filaments between nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.5,
      linewidth: 1.5
    });

    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array(numSatellites * 6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const connectionLines = new THREE.LineSegments(lineGeo, lineMat);
    group.add(connectionLines);

    // Floating ambient data particles
    const particleCount = 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 60;
      particlePos[i + 1] = (Math.random() - 0.5) * 45;
      particlePos[i + 2] = (Math.random() - 0.5) * 35;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.38,
      transparent: true,
      opacity: 0.7
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      const halfW = rect.width / 2;
      const halfH = rect.height / 2;
      mouseX = ((clientX - halfW) / halfW) * 0.4;
      mouseY = ((clientY - halfH) / halfH) * 0.4;
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || 520;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;
    let frameCount = 0;
    let lastFpsTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Measure FPS
      frameCount++;
      const now = performance.now();
      if (now - lastFpsTime >= 1000) {
        setFps(Math.min(65, Math.round((frameCount * 1000) / (now - lastFpsTime))));
        frameCount = 0;
        lastFpsTime = now;
      }

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      if (isRotating) {
        group.rotation.y = targetX * 1.5 + elapsedTime * 0.12;
        group.rotation.x = targetY * 1.2 + Math.sin(elapsedTime * 0.3) * 0.08;
      }

      coreMesh.rotation.y += 0.008;
      coreMesh.rotation.x += 0.004;
      haloMesh.rotation.z += 0.005;
      haloMesh.rotation.y -= 0.007;

      // Satellites
      const positions = lineGeo.attributes.position.array as Float32Array;
      satellites.forEach((sat, idx) => {
        const curAngle = sat.baseAngle + elapsedTime * (0.2 + idx * 0.03);
        const x = Math.cos(curAngle) * sat.radius;
        const z = Math.sin(curAngle) * sat.radius * 0.75;
        const y = sat.yOffset + Math.sin(elapsedTime * 1.2 + idx) * 1.2;
        sat.mesh.position.set(x, y, z);

        // Connect line to core
        const pIdx = idx * 6;
        positions[pIdx] = 0;
        positions[pIdx + 1] = 0;
        positions[pIdx + 2] = 0;
        positions[pIdx + 3] = x;
        positions[pIdx + 4] = y;
        positions[pIdx + 5] = z;
      });
      lineGeo.attributes.position.needsUpdate = true;

      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, [isRotating]);

  return (
    <div className="relative w-full rounded-2xl bg-[#191b26]/90 border border-white/10 shadow-2xl p-2 overflow-hidden group">
      {/* HUD Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#272935]/70 backdrop-blur-md rounded-t-xl mb-1 border-b border-white/5">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#03b5d3]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4]"></span>
          <span className="text-xs font-mono text-[#cbc3d7] tracking-wider ml-1">
            NODE_TOPOLOGY // GLOBAL_MESH
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 text-[#958ea0] hover:text-[#4cd7f6] transition-colors"
            title="Toggle rotation"
          >
            {isRotating ? 'ORBIT: ACTIVE' : 'ORBIT: PAUSED'}
          </button>
          <span className="text-xs font-mono text-[#4cd7f6] bg-[#0b0e18] px-2.5 py-0.5 rounded border border-[#4cd7f6]/20 font-bold">
            {fps} FPS
          </span>
          <Radio className="w-4 h-4 text-[#4cd7f6] animate-pulse" />
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-[460px] sm:h-[500px] lg:h-[520px] rounded-xl relative z-10 cursor-grab active:cursor-grabbing"
      />

      {/* Floating Synapse Match Card (matches design bottom left) */}
      <div className="absolute bottom-6 left-6 z-20 bg-[#272935]/90 backdrop-blur-xl p-3.5 rounded-xl border border-white/10 shadow-2xl max-w-xs transition-all transform group-hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-1">
          <Zap className="w-4 h-4 text-[#4cd7f6]" />
          <span className="text-xs font-semibold text-[#4cd7f6] uppercase tracking-wider font-mono">
            Live Synapse Match
          </span>
        </div>
        <p className="text-sm font-medium text-[#e1e1f1]">
          React Dev (Berlin) ⇄ Spanish Fluency (Valencia)
        </p>
        <div className="mt-2 flex items-center justify-between text-xs text-[#958ea0] font-mono">
          <span className="text-[#d0bcff]">99.2% Match Affinity</span>
          <span className="text-[#2fd9f4] flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] animate-ping"></span>
            Connecting...
          </span>
        </div>
      </div>

      {/* Floating Active Sessions Pill (matches design top right) */}
      <div className="absolute top-16 right-6 z-20 bg-[#272935]/85 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#2fd9f4] shadow-[0_0_8px_#2fd9f4]"></span>
        <span className="text-xs text-[#e1e1f1] font-mono tracking-wide font-medium">
          1,842 ACTIVE SESSIONS
        </span>
      </div>

      {/* Quick Interactive Satellite Pill Selectors below canvas */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2 py-1.5 px-3 bg-[#11131d]/80 rounded-lg border border-white/5">
        <span className="text-[11px] text-[#958ea0] font-mono flex items-center gap-1 mr-1">
          <Sparkles className="w-3 h-3 text-[#d0bcff]" /> Active Nodes:
        </span>
        {SKILL_NODES.map((node) => (
          <button
            key={node.name}
            onClick={() => {
              setActiveNode(node.name);
              if (onSelectSkillNode) onSelectSkillNode(node.name);
            }}
            className={`text-xs px-2.5 py-0.5 rounded-full border transition-all cursor-pointer ${
              activeNode === node.name
                ? 'bg-[#a078ff]/30 border-[#d0bcff] text-white shadow-[0_0_12px_rgba(160,120,255,0.5)]'
                : 'bg-black/30 border-white/10 text-[#cbc3d7] hover:border-[#4cd7f6]/60 hover:text-white'
            }`}
          >
            {node.name}
          </button>
        ))}
      </div>
    </div>
  );
};
