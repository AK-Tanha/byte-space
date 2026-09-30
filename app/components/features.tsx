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
        className="font-medium tracking-[-0.01em] text-brand"
        style={{ fontSize: U(36), lineHeight: `${U(44)}` }}
      >
        {value}
      </span>
      <span
        className="text-[#4b4c53]"
        style={{ fontSize: U(18), lineHeight: `${U(29)}` }}
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
          left: U(28),
          top: 0,
          width: U(435),
          height: U(596),
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
        className="absolute object-contain"
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
    <div className="mt-10 w-full lg:hidden">
      <div className="mx-auto w-full max-w-[340px]">
        <CourseCard course={featuredCourses[0]} />
      </div>
      <div className="relative mt-4">
        <Image
          src="/hero/happy-boy.png"
          alt=""
          width={577}
          height={540}
          className="mx-auto w-[260px] object-cover"
        />
        <div className="relative z-20 mx-auto -mt-6 w-fit">
          <ProgressCard fontSize="13px" />
        </div>
      </div>
    </div>
  );
}

function CreatorFlow() {
  return (
    <div className="mt-12 w-full lg:hidden">
      <div className="relative mx-auto w-full max-w-[360px]">
        <Image
          src="/happy girl.png"
          alt="ByteSpace creator with course revenue and students"
          width={435}
          height={596}
          className="h-auto w-full object-cover"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <StudentsCard fontSize="14px" />
        </div>
      </div>
      <div className="mt-6 flex items-start justify-center gap-3">
        <RevenueCard
          title="Total Revenue"
          sub="July 1-28"
          value="$120.29"
          fontSize="14px"
          withBar
          style={{ position: "relative", width: "14.5em", height: "7.4375em" }}
        />
        <RevenueCard
          title="Year to Date"
          sub="2023"
          value="$1,200.38"
          fontSize="14px"
          stacked
          style={{ position: "relative", width: "8.375em", height: "8.4375em" }}
        />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      className="bg-[#fafafa] font-sans"
      style={{
        backgroundImage:
          "radial-gradient(45% 40% at 20% 15%, rgba(203,252,1,0.32), transparent 70%), radial-gradient(45% 35% at 5% 95%, rgba(203,252,1,0.32), transparent 70%), radial-gradient(40% 30% at 0% 55%, rgba(120,150,255,0.30), transparent 75%), radial-gradient(45% 45% at 100% 5%, rgba(120,150,255,0.26), transparent 75%), radial-gradient(45% 45% at 100% 95%, rgba(120,150,255,0.26), transparent 75%)",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1258px] px-5 py-16 sm:px-6 sm:py-20 lg:px-0 lg:py-[120px]"
        style={{ containerType: "inline-size" }}
      >
        <div className="flex flex-col gap-10 lg:gap-[5.7cqw]">
          {/* Row 1 — growth pitch + learner visual */}
          <div
            className="flex flex-col lg:flex-row lg:items-center"
            style={{ gap: U(63) }}
          >
            <div
              className="flex flex-col"
              style={{ gap: U(40), width: U(574), maxWidth: "100%" }}
            >
              <h2
                className="font-semibold tracking-[-0.01em] text-[#242528]"
                style={{
                  fontSize: U(44),
                  lineHeight: "120%",
                  maxWidth: U(577),
                }}
              >
                Your Path to Professional Growth Starts Here!
              </h2>
              <p
                className="text-[#4b4c53]"
                style={{
                  fontSize: U(18),
                  lineHeight: "160%",
                  maxWidth: U(477),
                }}
              >
                Explore our curated selection of courses tailored to enhance
                your capabilities and accelerate your career journey. Whether
                you are looking to sharpen specific skills, gain industry
                expertise, or embark on a new career path entirely, we have the
                resources you need.
              </p>
              <div className="flex flex-wrap items-end gap-8 lg:gap-[4.4cqw]">
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
            className="flex flex-col lg:flex-row lg:items-center"
            style={{ gap: U(79), width: U(1200), maxWidth: "100%" }}
          >
            <div
              className="w-full lg:w-auto"
              style={{ width: U(541), maxWidth: "100%", flex: "none" }}
            >
              <CreatorVisual />
              <CreatorFlow />
            </div>
            <div
              className="flex flex-col"
              style={{ gap: U(40), width: U(580), maxWidth: "100%" }}
            >
              <h2
                className="font-semibold tracking-[-0.01em] text-[#242528]"
                style={{
                  fontSize: U(44),
                  lineHeight: "120%",
                  maxWidth: U(391),
                }}
              >
                Create &amp; Manage Courses Easily.
              </h2>
              <p
                className="font-bold text-[#242528]"
                style={{
                  fontSize: U(18),
                  lineHeight: `${U(28)}`,
                  maxWidth: U(574),
                }}
              >
                <strong className="font-bold">ByteSpace</strong> supports
                individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>
              <ul className="flex flex-col" style={{ gap: U(16) }}>
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-end"
                    style={{ gap: U(8) }}
                  >
                    <CheckIcon
                      className="shrink-0 text-brand"
                      style={{ width: U(24), height: U(24) }}
                    />
                    <span className="text-[16px] leading-[1.2] font-medium text-[#242528] lg:text-[1.43cqw]">
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
