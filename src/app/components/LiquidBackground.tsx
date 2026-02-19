import LiquidEther from "../../import-components/LiquidEther";

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <LiquidEther
        mouseForce={18}
        cursorSize={110}
        isViscous={false}
        viscous={30}
        colors={[
    "#5227FF","#FF9FFC","#B19EEF"
        ]}
        autoDemo
        autoSpeed={0.4}
        autoIntensity={1.8}
        isBounce={false}
        resolution={0.5}
      />
    </div>
  );
}
