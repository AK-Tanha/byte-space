import { BrandSurface } from "./brand-surface";
import { Container } from "./section-heading";
import { Squiggle } from "./decorations";

const lime = "#CBFC01";
const white = "#FFFFFF";

function CtaDecorations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Squiggle
        className="absolute hidden sm:block"
        style={{ left: -60, top: -10, width: 190, height: 180 }}
        strokeWidth={40}
      />

      <svg
        className="absolute hidden sm:block"
        style={{ left: 200, top: 30, width: 100, height: 110 }}
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

      <div
        className="absolute"
        style={{
          left: 1105,
          top: 55,
          width: 135,
          height: 135,
          clipPath: "polygon(50% 0%, 100% 100%, 0% 88%)",
          borderRadius: "16px",
          transform: "rotate(12deg)",
        }}
      />

      <div
        className="absolute bg-white"
        style={{
          right: -80,
          top: 120,
          width: 210,
          height: 230,
          borderRadius: "40% 12% 40% 40%",
          transform: "rotate(-8deg)",
        }}
      />

      <div
        className="absolute bg-white"
        style={{
          left: -50,
          top: 320,
          width: 120,
          height: 130,
          clipPath: "polygon(50% 0%, 100% 100%, 0% 88%)",
          borderRadius: "14px",
        }}
      />

      <div
        className="absolute rounded-full bg-lime"
        style={{ left: 20, bottom: -170, width: 260, height: 260 }}
      />

      <svg
        className="absolute hidden sm:block"
        style={{ right: 70, bottom: -60, width: 160, height: 150 }}
        viewBox="0 0 250 330"
        fill="none"
      >
        <path
          d="M40 20h170M40 20 210 110M210 110 40 200M40 200h170"
          stroke={lime}
          strokeWidth={46}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function CreatorCta() {
  return (
    <BrandSurface className="py-20 sm:py-24">
      <CtaDecorations />
      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-[760px] text-[30px] leading-[1.2] font-bold tracking-[-0.02em] text-white sm:text-[40px]">
          Unlock Your Potential as a
          <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-8 max-w-[950px] text-[15px] leading-[1.75] text-white/90 sm:text-[17px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a
          href="/creators/join"
          className="mt-10 inline-flex h-[52px] items-center rounded-full bg-lime px-8 text-[16px] font-medium text-neutral-900 transition-colors hover:bg-lime/85"
        >
          Join as Creator
        </a>
      </Container>
    </BrandSurface>
  );
}
