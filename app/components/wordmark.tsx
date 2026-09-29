import Image from "next/image";

export function Wordmark({
  height = "30px",
  variant = "light",
  className = "",
  priority = false,
}: {
  height?: string;
  variant?: "light" | "dark";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={variant === "dark" ? "/hero/Header_Logo_Dark.png" : "/hero/Header_Logo.png"}
      alt="ByteSpace"
      width={171}
      height={37}
      priority={priority}
      className={`w-auto ${className}`}
      style={{ height }}
    />
  );
}
