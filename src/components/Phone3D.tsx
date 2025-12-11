import { forwardRef } from "react";

interface Phone3DProps {
  className?: string;
  style?: React.CSSProperties;
}

const Phone3D = forwardRef<HTMLDivElement, Phone3DProps>(
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
        {/* Phone body */}
        <div
          className="relative w-[220px] h-[450px] rounded-[40px] overflow-hidden"
          style={{
            background: "linear-gradient(145deg, hsl(0, 0%, 15%) 0%, hsl(0, 0%, 8%) 100%)",
            boxShadow: "0 40px 120px -30px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255,255,255,0.1)",
            border: "3px solid hsl(0, 0%, 20%)",
          }}
        >
          {/* Screen */}
          <div
            className="absolute top-3 left-3 right-3 bottom-3 rounded-[32px] overflow-hidden"
            style={{
              background: "linear-gradient(180deg, hsl(0, 0%, 3%) 0%, hsl(0, 0%, 6%) 100%)",
            }}
          >
            {/* Notch */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 rounded-b-2xl"
              style={{
                background: "hsl(0, 0%, 8%)",
              }}
            />
            
            {/* Screen content - NFC animation */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* NFC waves */}
              <div className="relative w-24 h-24">
                <div
                  className="absolute inset-0 rounded-full opacity-20"
                  style={{
                    background: "radial-gradient(circle, hsl(43, 74%, 49%) 0%, transparent 70%)",
                    animation: "pulse 2s infinite",
                  }}
                />
                <div
                  className="absolute inset-2 rounded-full opacity-30"
                  style={{
                    background: "radial-gradient(circle, hsl(43, 74%, 49%) 0%, transparent 70%)",
                    animation: "pulse 2s infinite 0.3s",
                  }}
                />
                <div
                  className="absolute inset-4 rounded-full opacity-40"
                  style={{
                    background: "radial-gradient(circle, hsl(43, 74%, 49%) 0%, transparent 70%)",
                    animation: "pulse 2s infinite 0.6s",
                  }}
                />
                {/* NFC icon center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-12 h-12 text-gold"
                    strokeWidth="1.5"
                  >
                    <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a8.25 8.25 0 0113.788 0M1.924 8.674a11.25 11.25 0 0120.152 0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              
              {/* Text */}
              <p className="mt-6 text-gold text-sm font-medium">Aproxime seu cartão</p>
              <p className="mt-1 text-muted-foreground text-xs">GolldCard detectado</p>
            </div>
          </div>
          
          {/* Side buttons */}
          <div
            className="absolute top-24 -right-1 w-1 h-12 rounded-l"
            style={{ background: "hsl(0, 0%, 25%)" }}
          />
          <div
            className="absolute top-20 -left-1 w-1 h-8 rounded-r"
            style={{ background: "hsl(0, 0%, 25%)" }}
          />
          <div
            className="absolute top-32 -left-1 w-1 h-16 rounded-r"
            style={{ background: "hsl(0, 0%, 25%)" }}
          />
        </div>
      </div>
    );
  }
);

Phone3D.displayName = "Phone3D";

export default Phone3D;
