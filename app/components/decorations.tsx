const lime = "#CBFC01";
const white = "#FFFFFF";

export function Squiggle({
  className,
  color = lime,
  strokeWidth = 52,
  ...props
}: React.SVGProps<SVGSVGElement> & { color?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden
      className={className}
      {...props}
    >
      <path
        d="M10 40h150M10 40 90 105M90 105 10 170M10 170h150"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const U = (px: number) => `${px / 14.4}cqw`;

type DecoProps = { variant?: "stage" | "flow" };

export function Decorations({ variant = "flow" }: DecoProps) {
  const stage = variant === "stage";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {stage ? (
        <>
          <Squiggle
            className="absolute"
            style={{ left: U(-60), top: U(280), width: U(300), height: U(300) }}
          />

          <svg
            className="absolute"
            style={{ left: U(210), top: U(495), width: U(120), height: U(130) }}
            viewBox="0 0 120 130"
            fill="none"
          >
            <path
              d="M10 20h100M10 20 100 65M100 65 10 110"
              stroke={white}
              strokeWidth={26}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className="absolute"
            style={{
              left: U(48),
              top: U(738),
              width: U(262),
              height: U(222),
              transform: "rotate(-24deg)",
            }}
            viewBox="0 0 250 210"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M125 0c69 0 125 45 125 100s-56 100-125 100S0 155 0 100 56 0 125 0Zm0 52c-38 0-69 21-69 48s31 48 69 48 69-21 69-48-31-48-69-48Z"
              fill={white}
            />
          </svg>

          <div
            className="absolute bg-lime"
            style={{
              left: U(1276),
              top: U(252),
              width: U(250),
              height: U(250),
              borderRadius: "38% 12% 38% 38%",
              transform: "rotate(16deg)",
            }}
          />

          <div
            className="absolute bg-white"
            style={{
              left: U(1128),
              top: U(488),
              width: U(120),
              height: U(135),
              clipPath: "polygon(50% 0%, 100% 100%, 0% 88%)",
              borderRadius: "14px",
            }}
          />

          <svg
            className="absolute"
            style={{
              left: U(1180),
              top: U(690),
              width: U(250),
              height: U(330),
            }}
            viewBox="0 0 250 330"
            fill="none"
          >
            <path
              d="M40 20h170M40 20 210 110M210 110 40 200M40 200h170"
              stroke={white}
              strokeWidth={46}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ) : (
        <>
          <div className="absolute -top-14 -right-16 h-44 w-44 rotate-12 rounded-[45%] bg-lime" />
          <Squiggle className="absolute -left-14 top-[330px] h-32 w-32" />
          <div
            className="absolute top-[352px] right-0 h-20 w-16 bg-white"
            style={{
              clipPath: "polygon(50% 0%, 100% 100%, 0% 88%)",
              borderRadius: "8px",
            }}
          />
        </>
      )}
    </div>
  );
}
