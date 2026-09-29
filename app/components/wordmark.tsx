import Image from "next/image";

export function Wordmark({
  fontSize = "18px",
  className = "",
}: {
  fontSize?: string;
  className?: string;
}) {
  return (
    <span
      className={`flex items-center ${className}`}
      style={{ gap: `calc(${fontSize} * 0.28)` }}
    >
      <Image
        src="/hero/logo-mark.png"
        alt=""
        width={40}
        height={46}
        className="w-auto"
        style={{ height: `calc(${fontSize} * 1.7)` }}
      />
      <span
        className="font-bold tracking-[-0.02em] text-white"
        style={{ fontSize, lineHeight: 1 }}
      >
        ByteSpace
      </span>
    </span>
  );
}
