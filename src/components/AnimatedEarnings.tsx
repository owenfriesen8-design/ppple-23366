import { useEffect, useState } from "react";

const AnimatedEarnings = () => {
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = 100 / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
      }
      setEarnings(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-8">
      <div className="bg-gradient-card rounded-3xl p-10 backdrop-blur-sm relative overflow-hidden border border-border/50 shadow-glow">
        <div className="text-7xl font-bold text-success relative">
          <div className="absolute inset-0 text-success blur-xl opacity-40 animate-pulse">
            $750
          </div>
          <div className="relative z-10 drop-shadow-[0_0_20px_rgba(14,122,254,0.5)]">
            $750
          </div>
        </div>
        <p className="text-foreground text-lg font-semibold mt-4">Reward</p>
        <p className="text-muted-foreground text-sm mt-2">Available to claim now</p>
      </div>
    </div>
  );
};

export default AnimatedEarnings;