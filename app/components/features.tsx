import Image from "next/image";
import { CourseCard } from "./course-card";
import { featuredCourses } from "./categories";
import { ProgressCard, StudentsCard } from "./hero-cards";
import { CheckIcon } from "./icons";

/** Design canvas for this section is 1258px wide (Figma frame at x=121 of a 1500px frame). */
const U = (px: number) => `${px / 12.58}cqw`;

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-start">
      <span
        className="text-[26px] leading-[1.15] font-medium tracking-[-0.01em] text-brand sm:text-[30px] lg:text-[2.8617cqw] lg:leading-[3.4976cqw]"
        style={{ fontFamily: "var(--font-poppins)", fontWeight: 500 }}
      >
        {value}
      </span>
      <span
        className="mt-1 text-[12px] leading-[1.4] text-[#4b4c53] sm:text-[13px] lg:mt-0 lg:text-[1.4310cqw] lg:leading-[2.3053cqw]"
        style={{
          fontFamily:
            "Satoshi, var(--font-geist-sans), Arial, Helvetica, sans-serif",
          fontWeight: 400,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function RevenueBadge() {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-lime px-2 py-0.5 font-medium text-[#242528]"
      style={{ fontSize: "0.625em", lineHeight: "2em" }}
    >
      +12$
    </span>
  );
}

function RevenueCard({
  title,
  sub,
  value,
  fontSize,
  withBar,
  stacked,
  className = "",
  style,
}: {
  title: string;
  sub: string;
  value: string;
  fontSize: string;
  withBar?: boolean;
  stacked?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex flex-col items-start rounded-[1em] bg-brand p-[1em] text-[#f5f5f6] backdrop-blur-[10px] ${className}`}
      style={{ fontSize, gap: "0.5em", ...style }}
    >
      <div className="flex flex-col">
        <span
          className="flex items-center font-medium"
          style={{ fontSize: "1em", lineHeight: "1.1875em" }}
        >
          {title}
        </span>
        <span
          className="flex items-center font-normal"
          style={{ fontSize: "0.625em", lineHeight: "1.2em" }}
        >
          {sub}
        </span>
      </div>
      {stacked ? (
        <div className="flex flex-col items-start" style={{ gap: "0.5em" }}>
          <span
            className="flex items-center font-semibold tracking-[-0.01em]"
            style={{
              fontSize: "1.5em",
              lineHeight: "1.3333em",
              fontFamily: "var(--font-poppins)",
            }}
          >
            {value}
          </span>
          <RevenueBadge />
        </div>
      ) : (
        <div
          className="flex items-center justify-between"
          style={{ width: "12.5em", gap: "0.5em" }}
        >
          <span
            className="m-auto flex items-center font-semibold tracking-[-0.01em]"
            style={{
              fontSize: "1.5em",
              lineHeight: "1.3333em",
              fontFamily: "var(--font-poppins)",
            }}
          >
            {value}
          </span>
          <RevenueBadge />
        </div>
      )}
      {withBar ? (
        <div
          className="absolute h-[0.5em] w-[12.5em] overflow-hidden rounded-full bg-white"
          style={{ left: "1em", top: "5.9375em" }}
        >
          <div className="h-full w-[7em] rounded-full bg-[#d4fb20]" />
        </div>
      ) : null}
    </div>
  );
}

function LearnerVisual() {
  return (
    <div
      className="relative mx-auto hidden w-full lg:block"
      style={{ width: U(621), height: U(552), flex: "none" }}
      aria-hidden
    >
      <div className="absolute" style={{ left: 0, top: 0, width: U(373) }}>
        <CourseCard course={featuredCourses[0]} compact />
      </div>
      <Image
        src="/hero/happy-boy-2.png"
        alt=""
        width={703}
        height={688}
        className="absolute object-cover"
        style={{
          left: U(57),
          top: U(29),
          width: U(635),
          height: U(594),
          objectPosition: "center bottom",
        }}
      />
      <div className="absolute" style={{ left: U(345), top: U(213) }}>
        <ProgressCard fontSize={U(14)} />
      </div>
      <Image
        src="/squiggle-frame.png"
        alt=""
        width={217}
        height={216}
        className="absolute object-contain"
        style={{
          left: U(403),
          top: U(51),
          width: U(214),
          height: U(213),
        }}
      />
    </div>
  );
}

function CreatorVisual() {
  return (
    <div
      className="relative mx-auto hidden w-full max-w-[541px] lg:block"
      style={{ height: U(596) }}
    >
      <Image
        src="/happy girl.png"
        alt="ByteSpace creator with course revenue and students"
        width={435}
        height={596}
        className="absolute z-10 object-cover"
        style={{
          left: U(38),
          top: U(-1),
          width: U(517),
          height: U(708),
        }}
      />
      <RevenueCard
        title="Total Revenue"
        sub="July 1-28"
        value="$120.29"
        fontSize={U(16)}
        withBar
        className="relative hidden lg:flex"
        style={{ left: 0, top: U(44), width: U(232), height: U(119) }}
      />
      <RevenueCard
        title="Year to Date"
        sub="2023"
        value="$1,200.38"
        fontSize={U(16)}
        stacked
        className="relative hidden lg:flex"
        style={{ left: 0, top: U(55), width: U(134), height: U(135) }}
      />
      <Image
        src="/squiggle-creator.png"
        alt=""
        width={217}
        height={216}
        className="absolute z-20 object-contain"
        style={{
          left: U(303),
          top: U(114),
          width: U(219),
          height: U(218),
        }}
      />
      <div className="absolute z-10" style={{ left: U(283), top: U(413) }}>
        <StudentsCard fontSize={U(16.87)} />
      </div>
    </div>
  );
}

function LearnersFlow() {
  return (
    <div className="mt-8 flex w-full flex-col items-center gap-5 lg:hidden">
      <div className="w-full max-w-[320px]">
        <CourseCard course={featuredCourses[0]} />
      </div>
      {/* Source is 722×515 with transparent padding at x=81,y=36, so the
          visible content is 619×479. The card sits below the photo rather than
          overlapping it — at this width an overlay would cover his face. */}
      <Image
        src="/hero/happy-boy.png"
        alt=""
        width={722}
        height={515}
        className="h-auto w-[240px]"
      />
      <div className="-mt-16 w-fit">
        <ProgressCard fontSize="11px" />
      </div>
    </div>
  );
}

function CreatorFlow() {
  return (
    <div className="mt-6 flex w-full flex-col items-center gap-5 lg:hidden">
      {/* Source is 579×719 with transparent padding at x=50,y=35, so visible
          content is 497×684. Card overlaps the lower edge only, clear of her face. */}
      <div className="relative w-[220px]">
        <Image
          src="/happy girl.png"
          alt="ByteSpace creator with course revenue and students"
          width={579}
          height={719}
          className="h-auto w-full"
        />
        <div className="absolute inset-x-0 -bottom-10 mx-auto w-fit">
          <StudentsCard fontSize="10px" />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-start justify-center gap-3">
        <RevenueCard
          title="Total Revenue"
          sub="July 1-28"
          value="$120.29"
          fontSize="12px"
          withBar
          className="w-[164px]"
          style={{ position: "relative" }}
        />
        <RevenueCard
          title="Year to Date"
          sub="2023"
          value="$1,200.38"
          fontSize="12px"
          stacked
          className="w-[96px]"
          style={{ position: "relative" }}
        />
      </div>
    </div>
  );
}

/**
 * Background glow layer. Figma "Group 5" (2456x2391 at -508,-466) is a group, so
 * its children's offsets are group-local; the group offset is folded into each
 * ellipse below. Ellipse 12 is a sibling group, not part of Group 5.
 * Design frame is 1440x1460.
 */
const G = (px: number) => `${px / 14.4}cqw`;

const glowEllipses = [
  // Top left lime glow (Ellipse 11). Frame-absolute offsets; the 1137px box
  // centres at (416,102), which is the reference's top-lime peak.
  {
    left: G(-152),
    top: G(-466),
    size: G(1137),
    stops: [0.4, 0.092, 0.024],
    rgb: "203,252,1",
    blur: "20px",
  },
  // Lower right brand glow (Ellipse 8). Frame-absolute; box centres at (1290, 856).
  {
    left: G(722),
    top: G(788),
    size: G(1137),
    stops: [0.24, 0.0552, 0.0144],
    rgb: "0,59,226",
    blur: "40px",
  },
  // Group 5 → Ellipse 9 (brand)
  {
    left: G(-1016),
    top: G(-283),
    size: G(1137),
    stops: [0.16, 0.0368, 0.0096],
    rgb: "0,59,226",
    blur: "20px",
  },
  // Top right brand glow (Ellipse 10). Frame-absolute; box centres at (1379,110).
  {
    left: G(811),
    top: G(-458),
    size: G(1137),
    stops: [0.08, 0.0184, 0.0048],
    rgb: "0,59,226",
    blur: "40px",
  },
  // Ellipse 12 (lime) — bottom left
  {
    left: G(-287),
    top: G(946),
    size: G(672),
    stops: [0.6, 0.138, 0.036],
    rgb: "203,252,1",
    blur: "20px",
  },
];

function FeaturesGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ containerType: "inline-size" }}
    >
      {glowEllipses.map((e) => (
        <div
          key={`${e.left}-${e.top}`}
          className="absolute"
          style={{
            left: e.left,
            top: e.top,
            width: e.size,
            height: e.size,
            filter: `blur(${e.blur})`,
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(${e.rgb},${e.stops[0]}) 0%, rgba(${e.rgb},${e.stops[1]}) 53%, rgba(${e.rgb},${e.stops[2]}) 75%, rgba(${e.rgb},0) 100%)`,
          }}
        />
      ))}
    </div>
  );
}

export function Features() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] font-sans">
      <FeaturesGlow />
      <div
        className="relative z-10 w-full px-5 py-16 sm:px-6 sm:py-20 lg:w-[1258px] lg:max-w-none lg:px-0 lg:py-[120px] lg:[margin-left:121px] lg:[margin-right:auto]"
        style={{ containerType: "inline-size" }}
      >
        <div className="flex flex-col gap-10 lg:gap-[5.7cqw]">
          {/* Row 1 — growth pitch + learner visual */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[5.0079cqw]">
            <div className="flex w-full flex-col gap-6 lg:w-[45.63cqw] lg:gap-[3.1796cqw]">
              <h2
                className="text-[26px] leading-[1.18] font-semibold tracking-[-0.01em] text-[#0b0b0d] sm:text-[34px] lg:max-w-[45.87cqw] lg:text-[3.4976cqw]"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 600,
                }}
              >
                Your Path to Professional Growth Starts Here!
              </h2>
              <p
                className="text-[15px] leading-[1.65] text-[#4b4c53] sm:text-[16px] lg:max-w-[37.92cqw] lg:text-[1.4310cqw] lg:leading-[1.6]"
                style={{
                  fontFamily:
                    "Satoshi, var(--font-geist-sans), Arial, Helvetica, sans-serif",
                  fontWeight: 400,
                }}
              >
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:items-end sm:gap-8 lg:flex lg:gap-[4.4cqw]">
                {stats.map((stat) => (
                  <Stat key={stat.label} {...stat} />
                ))}
              </div>
              <LearnersFlow />
            </div>
            <div
              className="hidden w-full lg:block"
              style={{ width: U(621), flex: "none" }}
            >
              <LearnerVisual />
            </div>
          </div>

          {/* Row 2 — creator visual + manage pitch */}
          <div
            className="flex flex-col lg:flex-row lg:items-center lg:w-[95.39cqw] lg:gap-[6.2798cqw]"
          >
            <div className="mx-auto flex w-full flex-col items-center lg:mx-0 lg:w-[43cqw] lg:shrink-0 lg:items-stretch">
              <CreatorVisual />
              <CreatorFlow />
            </div>
            <div className="flex w-full flex-col gap-6 lg:w-[46.1cqw] lg:gap-[3.1796cqw]">
              <h2
                className="text-[26px] leading-[1.18] font-semibold tracking-[-0.01em] text-[#242528] sm:text-[34px] lg:max-w-[31.08cqw] lg:text-[3.4976cqw]"
                style={{ fontFamily: "var(--font-poppins)", fontWeight: 600 }}
              >
                Create &amp; Manage Courses Easily.
              </h2>
              <p
                className="text-[15px] leading-[1.6] text-[#242528] sm:text-[16px] lg:max-w-[45.63cqw] lg:text-[1.4310cqw] lg:leading-[2.2266cqw]"
                style={{
                  fontFamily:
                    "Satoshi, var(--font-geist-sans), Arial, Helvetica, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0em",
                }}
              >
                <strong style={{ fontWeight: 700 }}>ByteSpace</strong> supports
                individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>
              <ul className="flex flex-col gap-3 lg:gap-[1.272cqw]">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 lg:gap-[0.636cqw]"
                  >
                    <CheckIcon
                      className="shrink-0 text-brand lg:h-[1.9075cqw] lg:w-[1.9075cqw]"
                      style={{ width: 20, height: 20 }}
                    />
                    <span
                      className="text-[15px] leading-[1.35] font-medium text-[#242528] sm:text-[16px] lg:text-[1.4310cqw]"
                      style={{
                        fontFamily:
                          "Satoshi, var(--font-geist-sans), Arial, Helvetica, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
