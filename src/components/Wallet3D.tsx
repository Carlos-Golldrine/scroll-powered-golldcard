import { forwardRef } from "react";

interface Wallet3DProps {
  className?: string;
  style?: React.CSSProperties;
}

const Wallet3D = forwardRef<HTMLDivElement, Wallet3DProps>(
  ({ className = "", style }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative ${className}`}
        style={{
          transformStyle: "preserve-3d",
          ...style,
        }}
      >
        {/* Wallet body */}
        <div
          className="relative w-[400px] h-[280px] rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(0, 0%, 12%) 0%, hsl(0, 0%, 8%) 100%)",
            boxShadow: "0 30px 100px -30px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255,255,255,0.05)",
            transform: "perspective(1000px) rotateX(10deg)",
          }}
        >
          {/* Leather texture overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />
          
          {/* Wallet opening/slot */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[220px] rounded-2xl"
            style={{
              background: "linear-gradient(180deg, hsl(0, 0%, 5%) 0%, hsl(0, 0%, 3%) 100%)",
              boxShadow: "inset 0 5px 20px rgba(0,0,0,0.8)",
            }}
          />
          
          {/* Stitching detail */}
          <div
            className="absolute inset-4 rounded-2xl pointer-events-none"
            style={{
              border: "2px dashed rgba(212, 175, 55, 0.3)",
            }}
          />
          
          {/* Gold clasp */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-6 rounded-full"
            style={{
              background: "linear-gradient(135deg, hsl(43, 74%, 55%) 0%, hsl(43, 70%, 40%) 100%)",
              boxShadow: "0 2px 10px rgba(212, 175, 55, 0.4)",
            }}
          />
        </div>
      </div>
    );
  }
);

Wallet3D.displayName = "Wallet3D";

export default Wallet3D;
