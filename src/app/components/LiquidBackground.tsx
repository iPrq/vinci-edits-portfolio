import LiquidEther from "../../import-components/LiquidEther";

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <LiquidEther
        mouseForce={12}          // ✅ less mouse dominance
        cursorSize={120}

        isViscous                // ✅ enable thicker liquid
        viscous={45}             // ✅ richer fluid body

        colors={[
          "#5227FF",
          "#FF9FFC",
          "#B19EEF"
        ]}

        autoDemo                 // ✅ continuous animation
        autoSpeed={0.9}          // ✅ faster constant flow
        autoIntensity={3.2}      // ✅ more liquid energy

        isBounce={false}
        resolution={0.5}
      />
    </div>
  );
}
