import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Ultra sharp scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.set(0, 5, 32);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      precision: 'highp'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0x0b0e18, 2.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x2fd9f4, 1.8, 100);
    cyanLight.position.set(20, 20, 15);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 2.2, 100);
    violetLight.position.set(-20, -10, 20);
    scene.add(violetLight);

    // 1. Digital Cyber Mesh Plane (Undulating 3D Grid)
    const gridSegmentsX = 40;
    const gridSegmentsY = 30;
    const planeGeo = new THREE.PlaneGeometry(120, 90, gridSegmentsX, gridSegmentsY);
    planeGeo.rotateX(-Math.PI / 2.3);
    planeGeo.translate(0, -14, -10);

    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x1d2847,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const gridMesh = new THREE.Mesh(planeGeo, planeMat);
    scene.add(gridMesh);

    // Save initial vertices for organic wave generation
    const posAttr = planeGeo.attributes.position;
    const originalY = new Float32Array(posAttr.count);
    for (let i = 0; i < posAttr.count; i++) {
      originalY[i] = posAttr.getY(i);
    }

    // 2. Ultra-sharp floating Star/Neural Particle Nodes
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x2fd9f4);
    const colorViolet = new THREE.Color(0xa078ff);
    const colorSlate = new THREE.Color(0x475569);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 90;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 60;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 45;

      const rand = Math.random();
      const chosenColor = rand > 0.6 ? colorCyan : rand > 0.3 ? colorViolet : colorSlate;
      particleColors[idx] = chosenColor.r;
      particleColors[idx + 1] = chosenColor.g;
      particleColors[idx + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Ambient Dynamic Constellation Energy Lines between near particles
    const maxLineConnections = 70;
    const linePositions = new Float32Array(maxLineConnections * 6);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x4cd7f6,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    const constellationLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(constellationLines);

    // Mouse Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let curMouseX = 0;
    let curMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Window Resize Handling
    const handleResize = () => {
      if (!container) return;
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2.5));
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      curMouseX += (targetMouseX - curMouseX) * 0.04;
      curMouseY += (targetMouseY - curMouseY) * 0.04;

      camera.position.x = curMouseX * 3;
      camera.position.y = 5 - curMouseY * 2;
      camera.lookAt(0, 0, 0);

      // Undulate terrain vertices
      const pos = planeGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const u = i % (gridSegmentsX + 1);
        const v = Math.floor(i / (gridSegmentsX + 1));
        const wave = Math.sin(u * 0.35 + elapsedTime * 0.8) * Math.cos(v * 0.35 + elapsedTime * 0.7) * 1.6;
        pos.setY(i, originalY[i] + wave);
      }
      pos.needsUpdate = true;

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05;

      // Update dynamic connection lines for first N particles
      const pArray = particleGeo.attributes.position.array as Float32Array;
      let lineIdx = 0;
      for (let i = 0; i < 35 && lineIdx < maxLineConnections * 6; i++) {
        const x1 = pArray[i * 3];
        const y1 = pArray[i * 3 + 1];
        const z1 = pArray[i * 3 + 2];
        for (let j = i + 1; j < 35 && lineIdx < maxLineConnections * 6; j++) {
          const x2 = pArray[j * 3];
          const y2 = pArray[j * 3 + 1];
          const z2 = pArray[j * 3 + 2];
          const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
          if (dist < 15) {
            linePositions[lineIdx++] = x1;
            linePositions[lineIdx++] = y1;
            linePositions[lineIdx++] = z1;
            linePositions[lineIdx++] = x2;
            linePositions[lineIdx++] = y2;
            linePositions[lineIdx++] = z2;
          }
        }
      }
      lineGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="canvas-3d-background"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
};
