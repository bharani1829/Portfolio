import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

export const MinimalAnimalCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const birdRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const angleRef = useRef(0);
  const speedRef = useRef(0);
  const particleIdRef = useRef(0);
  const isMovingRef = useRef(false);
  const moveTimerRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      isMovingRef.current = true;
      if (moveTimerRef.current) window.clearTimeout(moveTimerRef.current);
      moveTimerRef.current = window.setTimeout(() => {
        isMovingRef.current = false;
      }, 150);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Animation Loop
    let animId: number;
    let lastTime = performance.now();

    const updateLoop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // Smooth lerp toward mouse coordinates
      const lerpFactor = 0.18;
      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;

      currentPos.current.x += dx * lerpFactor;
      currentPos.current.y += dy * lerpFactor;

      const dist = Math.hypot(dx, dy);
      speedRef.current = dist;

      // Update orientation angle when moving
      if (dist > 1.5) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        // Smooth angle rotation
        let angleDiff = targetAngle - angleRef.current;
        while (angleDiff < -180) angleDiff += 360;
        while (angleDiff > 180) angleDiff -= 360;
        angleRef.current += angleDiff * 0.25;

        // Emit small trail particle occasionally
        if (Math.random() > 0.6) {
          particleIdRef.current += 1;
          setParticles((prev) => [
            ...prev.slice(-4),
            {
              id: particleIdRef.current,
              x: currentPos.current.x,
              y: currentPos.current.y,
              opacity: 0.6,
              scale: Math.random() * 0.6 + 0.4,
            },
          ]);
        }
      }

      if (birdRef.current) {
        const scale = isMovingRef.current ? 1.05 : 0.95;
        birdRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%) rotate(${angleRef.current}deg) scale(${scale})`;
      }

      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (moveTimerRef.current) window.clearTimeout(moveTimerRef.current);
    };
  }, [visible]);

  // Gradually fade out trail particles
  useEffect(() => {
    if (particles.length === 0) return;
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.08, scale: p.scale * 0.9 }))
          .filter((p) => p.opacity > 0.05)
      );
    }, 40);
    return () => clearInterval(interval);
  }, [particles]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {/* Subtle trail dots in wine red */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#7F011F]/30 blur-[0.5px]"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: '3.5px',
            height: '3.5px',
            opacity: p.opacity * 0.7,
            transform: `translate(-50%, -50%) scale(${p.scale})`,
            transition: 'opacity 0.1s linear',
          }}
        />
      ))}

      {/* Minimal Origami Hummingbird Follower (Wine Red & Sand) */}
      <div
        ref={birdRef}
        className="absolute top-0 left-0 w-7 h-7 will-change-transform flex items-center justify-center filter drop-shadow-[0_2px_8px_rgba(127,1,31,0.25)]"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-90"
        >
          <defs>
            <linearGradient id="birdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7F011F" />
              <stop offset="60%" stopColor="#A30528" />
              <stop offset="100%" stopColor="#630018" />
            </linearGradient>
            <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DF526D" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#7F011F" stopOpacity="0.75" />
            </linearGradient>
          </defs>

          {/* Left Wing with subtle flutter animation */}
          <g className="origin-center animate-[pulse_0.8s_ease-in-out_infinite]">
            <path
              d="M16 16 L22 6 L25 12 Z"
              fill="url(#wingGrad)"
              opacity="0.9"
            />
          </g>

          {/* Right Wing */}
          <g className="origin-center animate-[pulse_0.8s_ease-in-out_infinite]">
            <path
              d="M16 16 L22 26 L25 20 Z"
              fill="url(#wingGrad)"
              opacity="0.9"
            />
          </g>

          {/* Origami Bird Body / Beak */}
          <path
            d="M28 16 L14 13 L8 16 L14 19 Z"
            fill="url(#birdGrad)"
          />

          {/* Head accent */}
          <polygon
            points="28,16 23,14.5 23,17.5"
            fill="#F5EBD0"
          />

          {/* Tail feather */}
          <path
            d="M8 16 L3 13.5 L5 16 L3 18.5 Z"
            fill="url(#birdGrad)"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};
