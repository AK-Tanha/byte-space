const GRID_STEP = 120;

export const brandGridStyle: React.CSSProperties = {
  backgroundImage: `repeating-linear-gradient(to right, rgba(120,160,255,0.28) 0 1px, transparent 1px ${GRID_STEP}px), repeating-linear-gradient(to bottom, rgba(120,160,255,0.28) 0 1px, transparent 1px ${GRID_STEP}px)`,
};

export function BrandSurface({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative isolate overflow-hidden bg-brand text-white [font-family:var(--font-poppins)] ${className ?? ""}`}
      style={brandGridStyle}
    >
      {children}
    </section>
  );
}
