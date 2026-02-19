import { ReactNode } from "react";
import GlassSurfaceRB from "../../components/GlassSurface";

type GlassSurfaceRBProps = React.ComponentProps<typeof GlassSurfaceRB>;

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
  opacity?: number;

  width?: number;
  height?: number;
  borderRadius?: number;
  displace?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  brightness?: number;
  mixBlendMode?: GlassSurfaceRBProps["mixBlendMode"];
}

export function GlassSurface({
  children,
  className = "",
  opacity = 0.06,
  borderRadius = 9999,
  width,
  height,
  ...props
}: GlassSurfaceProps) {
  return (
    <GlassSurfaceRB
      className={`
        backdrop-blur-xl
        border border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        bg-slate-900/60
        ${className}
      `}
      opacity={opacity}
      borderRadius={borderRadius}
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
      {...props}
    >
      {children}
    </GlassSurfaceRB>
  );
}



