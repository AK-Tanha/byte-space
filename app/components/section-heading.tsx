export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
  titleClassName = "",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const width = align === "center" ? "mx-auto max-w-3xl" : "";

  return (
    <div className={`${alignment} ${className}`}>
      <h2
        className={`text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-[#040819] sm:text-[40px] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 text-[15px] leading-[1.7] text-[#82868e] sm:text-[17px] ${width}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
