import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 300;
const FRAME_DIR = '/frames/';
const FRAME_PREFIX = 'ezgif-frame-';
const FRAME_EXT = '.jpg';
const LERP_FACTOR = 0.1;

function getFramePath(index: number): string {
  const paddedNum = String(index).padStart(3, '0');
  return `${FRAME_DIR}${FRAME_PREFIX}${paddedNum}${FRAME_EXT}`;
}

export const Canvas3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameImagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const lastRenderedFrameRef = useRef<number>(-1);
  const animationFrameIdRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // ─── Setup canvas for high-DPI ────────────────────────────────────────────
    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      renderFrame(Math.round(currentFrameRef.current));
    };

    // ─── Cover-mode frame renderer ────────────────────────────────────────────
    const renderFrame = (frameIdx: number) => {
      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(frameIdx)));
      const img = frameImagesRef.current[clampedIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;

      let dw: number, dh: number, dx: number, dy: number;
      if (cr > ir) {
        dw = cw; dh = cw / ir; dx = 0; dy = (ch - dh) / 2;
      } else {
        dw = ch * ir; dh = ch; dx = (cw - dw) / 2; dy = 0;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    // ─── Scroll → target frame ────────────────────────────────────────────────
    const updateTarget = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const fraction = Math.min(1, Math.max(0, scrollY / maxScroll));
      targetFrameRef.current = fraction * (TOTAL_FRAMES - 1);
    };

    // ─── RAF Lerp render loop ─────────────────────────────────────────────────
    const renderLoop = () => {
      updateTarget();
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.05) {
        currentFrameRef.current += diff * LERP_FACTOR;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }
      const rounded = Math.round(currentFrameRef.current);
      if (rounded !== lastRenderedFrameRef.current) {
        renderFrame(rounded);
        lastRenderedFrameRef.current = rounded;
      }
      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    // ─── Preload all 300 frames in background ─────────────────────────────────
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let firstFrameReady = false;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      // Stagger loading so first frames arrive soonest
      img.src = getFramePath(i);
      img.onload = () => {
        if (i === 1 && !firstFrameReady) {
          firstFrameReady = true;
          resizeCanvas();
          renderLoop();
        }
      };
      images[i - 1] = img;
    }
    frameImagesRef.current = images;

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', updateTarget, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', updateTarget);
    };
  }, []);

  return (
    /* Fixed Sticky Background Motion Canvas + Ambient Vignette */
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, rgba(7,7,9,0.80) 0%, rgba(7,7,9,0.20) 50%, rgba(7,7,9,0.80) 100%),
            linear-gradient(to bottom, rgba(7,7,9,0.55) 0%, transparent 18%, transparent 78%, rgba(7,7,9,0.95) 100%)
          `,
        }}
      />
    </div>
  );
};
