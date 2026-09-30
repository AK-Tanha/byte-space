import Image from "next/image";
import { BrandSurface } from "./brand-surface";
import { Container } from "./section-heading";

/** CTA_Frame is 1440x488 with a 120px grid at 2px white, 12% opacity. */
const ctaGridStyle: React.CSSProperties = {
  containerType: "inline-size",
  backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0 2px, transparent 2px 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.12) 0 2px, transparent 2px 120px)`,
};

/**
 * CTA_Frame is 1440x488; the section itself is the CSS container, so cqw values
 * below are design-px ÷ 14.4. They are all on `lg:` classes — small screens use
 * the fixed px values, since cqw shrinks with the viewport and becomes unreadable.
 */

/**
 * Decorations measured against CTA_Frame.png. The section is 1440x488; four
 * shapes sit on the left, three on the right. Positions are the element boxes,
 * each offset so the painted area of the PNG lands on its reference position.
 */
function CtaDecorations() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Left */}
      <Image
        src="/creators_svg/unlock-deco-left-1.png"
        alt=""
        width={267}
        height={225}
        className="absolute hidden object-contain sm:block"
        style={{ left: 0, top: 0, width: 270, height: 228 }}
      />

      <Image
        src="/creators_svg/unlock-deco-left-2.png"
        alt=""
        width={177}
        height={176}
        className="absolute hidden object-contain sm:block"
        style={{ left: 178, top: 5, width: 182, height: 181 }}
      />

      <Image
        src="/creators_svg/unlock-deco-left-3.png"
        alt=""
        width={140}
        height={189}
        className="absolute hidden object-contain sm:block"
        style={{ left: 0, top: 225, width: 142, height: 192 }}
      />

      <Image
        src="/creators_svg/unlock-deco-left-4.png"
        alt=""
        width={346}
        height={190}
        className="absolute hidden object-contain sm:block"
        style={{ left: 18, top: 300, width: 342, height: 188 }}
      />

      {/* Right */}
      <Image
        src="/creators_svg/unlock-deco-right-1.png"
        alt=""
        width={190}
        height={189}
        className="absolute hidden object-contain sm:block"
        style={{ left: 1077, top: 0, width: 195, height: 194 }}
      />

      <Image
        src="/creators_svg/unlock-deco-right-2.png"
        alt=""
        width={218}
        height={372}
        className="absolute hidden object-contain sm:block"
        style={{ left: 1222, top: 5, width: 222, height: 379 }}
      />

      <Image
        src="/creators_svg/unlock-deco-right-3.png"
        alt=""
        width={334}
        height={199}
        className="absolute hidden object-contain sm:block"
        style={{ left: 1109, top: 290, width: 331, height: 197 }}
      />
    </div>
  );
}

export function CreatorCta() {
  return (
    <BrandSurface className="py-16 sm:py-[84.5px]" style={ctaGridStyle}>
      <CtaDecorations />
      <Container className="relative z-10 text-center">
        <h2
          className="mx-auto text-[28px] leading-[1.18] font-semibold tracking-[-0.01em] text-[#f5f5f6] sm:text-[34px] lg:h-[7.3611cqw] lg:max-w-[49.3056cqw] lg:text-[3.0556cqw] lg:leading-[1.2]"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p
          className="mx-auto mt-6 text-[15px] leading-[1.65] font-normal text-[#f5f5f6] sm:text-[16px] lg:mt-[2.7778cqw] lg:max-w-[66.9444cqw] lg:text-[1.25cqw] lg:leading-[1.6]"
          style={{
            fontFamily:
              "Satoshi, var(--font-geist-sans), Arial, Helvetica, sans-serif",
          }}
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a
          href="/creators/join"
          className="mt-6 inline-flex h-[46px] w-[172px] items-center justify-center rounded-[24px] bg-[#d4fb20] whitespace-nowrap text-[15px] text-[#242528] sm:text-[16px] lg:mt-[2.7778cqw] lg:text-[1.25cqw]"
          style={{
            fontFamily:
              "Satoshi, var(--font-geist-sans), Arial, Helvetica, sans-serif",
            lineHeight: "120%",
            fontWeight: 500,
          }}
        >
          Join as Creator
        </a>
      </Container>
    </BrandSurface>
  );
}
