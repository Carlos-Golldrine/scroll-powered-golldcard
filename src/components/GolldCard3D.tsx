import { forwardRef } from "react";

interface GolldCard3DProps {
  className?: string;
  style?: React.CSSProperties;
}

const GolldCard3D = forwardRef<HTMLDivElement, GolldCard3DProps>(
  ({ className = "", style }, ref) => {
    return (
      <div
        ref={ref}
        className={`relative w-[340px] h-[215px] rounded-2xl preserve-3d ${className}`}
        style={{
          transformStyle: "preserve-3d",
          ...style,
        }}
      >
        {/* Card Front */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "linear-gradient(145deg, hsl(43, 74%, 55%) 0%, hsl(43, 70%, 40%) 50%, hsl(43, 60%, 30%) 100%)",
            boxShadow: "0 25px 80px -20px rgba(0, 0, 0, 0.8), 0 0 60px rgba(212, 175, 55, 0.3)",
            transform: "translateZ(2px)",
          }}
        >
          {/* Shine effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)",
            }}
          />
          
          {/* Card content */}
          <div className="relative h-full p-6 flex flex-col justify-between">
            {/* Logo area */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-primary-foreground font-display tracking-wide">
                  GolldCard
                </h3>
                <p className="text-xs text-primary-foreground/70 mt-1">Premium Smart Card</p>
              </div>
              {/* NFC Icon */}
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-primary-foreground"
                  strokeWidth="1.5"
                >
                  <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a8.25 8.25 0 0113.788 0M1.924 8.674a11.25 11.25 0 0120.152 0" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            
            {/* Chip */}
            <div className="w-12 h-10 rounded-md" style={{
              background: "linear-gradient(135deg, #c9a227 0%, #f4d03f 50%, #c9a227 100%)",
              boxShadow: "inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)"
            }}>
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-[1px] p-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-primary-foreground/20 rounded-[1px]" />
                ))}
              </div>
            </div>
            
            {/* Bottom info */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-primary-foreground/60 uppercase tracking-widest">Conecte Pessoas</p>
                <p className="text-sm text-primary-foreground font-medium tracking-wider">& Negócios</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-primary-foreground/60 uppercase tracking-widest">Golldrine</p>
                <p className="text-xs text-primary-foreground/80">Computing</p>
              </div>
            </div>
          </div>
          
          {/* Border glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          />
        </div>
      </div>
    );
  }
);

GolldCard3D.displayName = "GolldCard3D";

export default GolldCard3D;
