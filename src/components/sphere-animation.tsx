'use client';
import React, { useRef, useEffect } from 'react';

type SphereAnimationProps = {
  width?: number;
  height?: number;
  dotsAmount?: number;
  dotRadius?: number;
  sphereRadius?: number;
  dotColor?: string;
  turnSpeed?: number;
};

export function SphereAnimation({
  width: propWidth = 400,
  height: propHeight = 400,
  dotsAmount: propDotsAmount = 700,
  dotRadius: propDotRadius = 1,
  sphereRadius: propSphereRadius = 150,
  dotColor = '#fff',
  turnSpeed: propTurnSpeed = 0.001,
}: SphereAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = propWidth);
    let height = (canvas.height = propHeight);

    const DOTS_AMOUNT = propDotsAmount;
    const DOT_RADIUS = propDotRadius;
    const SPHERE_RADIUS = propSphereRadius;
    const PERSPECTIVE = width * 0.8;
    
    let turnAngle = 0;
    const turnSpeed = propTurnSpeed;
    let mouseX = 0, mouseY = 0;

    type Dot = {
      x: number;
      y: number;
      z: number;
      xProjected: number;
      yProjected: number;
      scaleProjected: number;
    };

    const dots: Dot[] = [];

    // Create dots
    for (let i = 0; i < DOTS_AMOUNT; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const x = SPHERE_RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = SPHERE_RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = SPHERE_RADIUS * Math.cos(phi);
      dots.push({ x, y, z, xProjected: 0, yProjected: 0, scaleProjected: 0 });
    }

    function project(dot: Dot) {
      const angleX = (mouseX * 0.0001) + turnAngle;
      const angleY = mouseY * 0.0001;
      
      const rotX_cos = Math.cos(angleX);
      const rotX_sin = Math.sin(angleX);
      const rotY_cos = Math.cos(angleY);
      const rotY_sin = Math.sin(angleY);

      const rotZ = -dot.x * rotX_sin + dot.z * rotX_cos;
      const finalZ = rotZ * rotY_cos + dot.y * rotY_sin;
      
      dot.xProjected = (dot.x * rotX_cos + dot.z * rotX_sin);
      dot.yProjected = (dot.y * rotY_cos - rotZ * rotY_sin);
      dot.scaleProjected = PERSPECTIVE / (PERSPECTIVE + finalZ);
    }

    function draw(dot: Dot) {
        ctx!.globalAlpha = Math.abs(1 - dot.z / width);
        ctx!.beginPath();
        ctx!.arc(
            dot.xProjected + width / 2, 
            dot.yProjected + height / 2, 
            DOT_RADIUS * dot.scaleProjected, 0, Math.PI * 2
        );
        ctx!.fillStyle = dotColor;
        ctx!.fill();
    }
    
    let animationFrameId: number;
    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      dots.forEach(project);
      dots.sort((dot1, dot2) => {
        return dot1.scaleProjected - dot2.scaleProjected;
      });

      dots.forEach(draw);
      
      turnAngle += turnSpeed;
      animationFrameId = window.requestAnimationFrame(loop);
    }
    
    const onMouseMove = (e: MouseEvent) => {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) - width/2;
        mouseY = (e.clientY - rect.top) - height/2;
    };
    
    const onMouseLeave = () => {
        mouseX = 0;
        mouseY = 0;
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    
    loop();

    return () => {
        window.cancelAnimationFrame(animationFrameId);
        if(canvas) {
            canvas.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('mouseleave', onMouseLeave);
        }
    };

  }, [propWidth, propHeight, propDotsAmount, propDotRadius, propSphereRadius, dotColor, propTurnSpeed]);

  return <canvas ref={canvasRef} />;
}
