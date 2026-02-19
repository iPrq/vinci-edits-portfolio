import { motion } from 'motion/react';

interface AnimatedBlobProps {
  size: number;
  color: string;
  delay: number;
  duration: number;
  initialX: string;
  initialY: string;
}

export function AnimatedBlob({ 
  size, 
  color, 
  delay, 
  duration,
  initialX,
  initialY 
}: AnimatedBlobProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: color,
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: [0, 100, -100, 50, 0],
        y: [0, -100, 100, -50, 0],
        scale: [1, 1.2, 0.8, 1.1, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}
