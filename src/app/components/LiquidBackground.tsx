import LiquidEther from "../../import-components/LiquidEther";

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <LiquidEther
        mouseForce={30}          // ✅ less mouse dominance
        cursorSize={120}

        isViscous                // ✅ enable thicker liquid
        viscous={45}             // ✅ richer fluid body

        colors={[
          "#5227FF",
          "#FF9FFC",
          "#B19EEF"
        ]}

        autoDemo                 // ✅ continuous animation
        autoSpeed={1.5}          // ✅ faster constant flow
        autoIntensity={2.2}      // ✅ more liquid energy

        isBounce={false}
        resolution={0.4}
      />
    </div>
  );
}
