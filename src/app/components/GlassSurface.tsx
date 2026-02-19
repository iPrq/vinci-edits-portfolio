import { ReactNode } from "react";
import GlassSurfaceRB from "../../components/GlassSurface";

type GlassSurfaceRBProps = React.ComponentProps<typeof GlassSurfaceRB>;

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
  opacity?: number;

  // Optional advanced props (future-proof)
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
  opacity = 0.15,
  width,
  height,
  borderRadius,
  ...props
}: GlassSurfaceProps) {
  return (
    <GlassSurfaceRB
      className={className}
      opacity={opacity}
      width={width}
      height={height}
      borderRadius={borderRadius}
      {...props}
    >
      {children}
    </GlassSurfaceRB>
  );
}
