import coin1 from "@/assets/coin-1.png";
import coin2 from "@/assets/coin-2.png";
import coin3 from "@/assets/coin-3.png";

const FloatingCoins = () => {
  const coins = [
    { src: coin1, className: "top-20 left-10 animate-float", size: "w-16 h-16" },
    { src: coin2, className: "top-32 right-16 animate-float-delayed", size: "w-12 h-12" },
    { src: coin3, className: "top-60 left-20 animate-float", size: "w-20 h-20" },
    { src: coin1, className: "top-80 right-8 animate-float-delayed", size: "w-14 h-14" },
    { src: coin2, className: "top-16 right-32 animate-float", size: "w-10 h-10" },
    { src: coin3, className: "bottom-40 left-8 animate-float-delayed", size: "w-18 h-18" },
    { src: coin1, className: "bottom-60 right-20 animate-float", size: "w-12 h-12" },
    { src: coin2, className: "bottom-20 left-24 animate-float-delayed", size: "w-16 h-16" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {coins.map((coin, index) => (
        <div
          key={index}
          className={`absolute ${coin.className} ${coin.size}`}
          style={{
            filter: "drop-shadow(var(--shadow-coin))",
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <img
            src={coin.src}
            alt="Gold coin"
            className="w-full h-full object-contain opacity-80"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingCoins;