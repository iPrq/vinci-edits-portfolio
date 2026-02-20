import { ReactNode } from 'react';

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
  opacity?: number;
}

export function BlockGlassSurface({ 
  children, 
  className = '', 
  opacity = 0.15 
}: GlassSurfaceProps) {
  return (
    <div 
      className={`backdrop-blur-xl ${className}`}
      style={{
        background: `rgba(255, 255, 255, ${opacity})`,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}
    >
      {children}
    </div>
  );
}