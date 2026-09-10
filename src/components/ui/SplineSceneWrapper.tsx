import React, { Suspense, lazy, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneWrapperProps {
  scene: string;
  className?: string;
  onLoad?: (app: any) => void;
}

export const SplineSceneWrapper: React.FC<SplineSceneWrapperProps> = ({
  scene,
  className = '',
  onLoad,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (app: any) => {
    setLoaded(true);
    onLoad?.(app);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-[#7621B0]/30 border-t-[#7621B0] animate-spin" />
            <span className="text-[10px] text-[#9CA3AF] tracking-widest uppercase font-mono">
              Loading scene
            </span>
          </div>
        </div>
      )}
      <Suspense fallback={null}>
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }}
        />
      </Suspense>
    </div>
  );
};
