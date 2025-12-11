import { forwardRef } from "react";

interface Tree3DProps {
  className?: string;
  style?: React.CSSProperties;
}

const Tree3D = forwardRef<HTMLDivElement, Tree3DProps>(
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
        {/* Tree container */}
        <div className="relative w-[300px] h-[400px]">
          {/* Tree trunk */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-32 rounded-t-lg"
            style={{
              background: "linear-gradient(90deg, hsl(30, 50%, 20%) 0%, hsl(30, 50%, 30%) 50%, hsl(30, 50%, 20%) 100%)",
            }}
          />
          
          {/* Tree foliage layers */}
          <div
            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "120px solid transparent",
              borderRight: "120px solid transparent",
              borderBottom: "160px solid hsl(140, 40%, 25%)",
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
            }}
          />
          <div
            className="absolute bottom-40 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "100px solid transparent",
              borderRight: "100px solid transparent",
              borderBottom: "130px solid hsl(140, 45%, 30%)",
            }}
          />
          <div
            className="absolute bottom-56 left-1/2 -translate-x-1/2 w-0 h-0"
            style={{
              borderLeft: "70px solid transparent",
              borderRight: "70px solid transparent",
              borderBottom: "100px solid hsl(140, 50%, 35%)",
            }}
          />
          
          {/* Gold leaf accents */}
          <div
            className="absolute bottom-36 left-[30%] w-3 h-3 rounded-full"
            style={{
              background: "hsl(43, 74%, 49%)",
              boxShadow: "0 0 10px hsl(43, 74%, 49%)",
            }}
          />
          <div
            className="absolute bottom-48 right-[28%] w-2 h-2 rounded-full"
            style={{
              background: "hsl(43, 74%, 55%)",
              boxShadow: "0 0 8px hsl(43, 74%, 55%)",
            }}
          />
          <div
            className="absolute bottom-60 left-[40%] w-2.5 h-2.5 rounded-full"
            style={{
              background: "hsl(43, 74%, 49%)",
              boxShadow: "0 0 10px hsl(43, 74%, 49%)",
            }}
          />
          <div
            className="absolute bottom-72 right-[35%] w-2 h-2 rounded-full"
            style={{
              background: "hsl(43, 80%, 60%)",
              boxShadow: "0 0 8px hsl(43, 80%, 60%)",
            }}
          />
          
          {/* Sustainability text */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
            <p className="text-xs text-gold uppercase tracking-[0.3em]">Sustentabilidade</p>
            <p className="text-[10px] text-muted-foreground mt-1">Um toque, menos papel</p>
          </div>
        </div>
      </div>
    );
  }
);

Tree3D.displayName = "Tree3D";

export default Tree3D;
