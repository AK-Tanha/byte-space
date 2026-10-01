import Image from "next/image";
import { BarIcon, StarIcon } from "./icons";

export type Course = {
  title: string;
  image: string;
  author: string;
  level: string;
  lessons: string;
  duration: string;
  comments: string;
  rating: string;
  price: string;
  lifetime?: boolean;
};

function OverlayPill({
  children,
  size = "md",
  style,
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}) {
  const sizeClass =
    size === "sm"
      ? "gap-0.5 px-[7.5px] py-[3.25px] text-[11px] leading-4"
      : "gap-1.5 px-3 py-1.5 text-[12px] leading-5";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-[rgba(246,246,246,0.6)] font-medium whitespace-nowrap text-[#4f4f4f] backdrop-blur-[4px] ${sizeClass}`}
      style={style}
    >
      {children}
    </span>
  );
}

/** Figma: four 32px avatars overlapping 16px. `size` scales it for the compact card. */
function AvatarStack({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`flex shrink-0 items-center ${className}`} style={style}>
      <Image
        src="/courses/Auto Layout Horizontal.png"
        alt=""
        width={104}
        height={32}
        className="w-auto"
        style={{ height: "100%", width: "auto" }}
      />
    </span>
  );
}

function GridCourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-[#ced0d3] bg-white p-3 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(2,12,48,0.45)] sm:p-5">
      <div className="relative overflow-hidden rounded-[10px]">
        <Image
          src={course.image}
          alt=""
          width={332}
          height={196}
          className="h-auto w-full object-cover"
        />
        {/* Only the lessons pill fits a two-up mobile column; the rest show from sm up. */}
        <div className="absolute inset-x-0 bottom-[11px] flex flex-wrap items-center justify-center gap-1.5 p-2.5">
          <OverlayPill size="sm">{course.lessons}</OverlayPill>
          <span className="hidden sm:contents">
            <OverlayPill size="sm">{course.duration}</OverlayPill>
            <OverlayPill size="sm">{course.comments}</OverlayPill>
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2 sm:mt-4 sm:gap-3">
        <h3 className="line-clamp-2 text-[14px] leading-tight font-bold text-neutral-900 sm:line-clamp-1 sm:text-[19px]">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 pt-0.5">
          <span className="text-[12px] text-neutral-400 sm:text-[15px]">
            {course.rating}
          </span>
          <StarIcon className="h-3.5 w-3.5 text-lime sm:h-4 sm:w-4" />
        </span>
      </div>

      <p className="mt-1 text-[11px] text-neutral-400 sm:text-[13px]">
        by <span className="text-brand">{course.author}</span>
      </p>

      <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f6] px-2.5 py-1 text-[11px] text-neutral-600 sm:px-3 sm:py-1.5 sm:text-[12px]">
          <BarIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          {course.level}
        </span>
        <span className="hidden sm:contents">
          <AvatarStack className="h-8" />
        </span>
      </div>

      <p className="mt-3 text-[17px] font-bold text-brand sm:mt-4 sm:text-[20px]">
        {course.price}
        {course.lifetime ? (
          <span className="text-[10px] font-normal text-neutral-400 sm:text-[12px]">
            /lifetime
          </span>
        ) : null}
      </p>
    </article>
  );
}

/**
 * Figma `Course_Card_1`: 373×384, radius 24, 16px padding, pills without icons.
 *
 * The card is a query container and every internal offset is expressed in
 * `cqw` (1% of the card's own width) against the 373px Figma frame. Fixed px
 * offsets only lined up while the card happened to render at 373px: at 272px
 * the `aspectRatio` box shrank but the children did not, so ~100px of content
 * spilled past the white background onto whatever sat below.
 */
function CompactCourseCard({ course }: { course: Course }) {
  const px = (n: number) => `${(n / 373) * 100}cqw`;
  const pill: React.CSSProperties = {
    gap: px(6),
    padding: `${px(3.25)} ${px(7.5)}`,
    fontSize: px(11),
    lineHeight: px(16),
  };

  return (
    <article
      className="relative box-border rounded-3xl border border-[#ced0d3] bg-white"
      style={{
        width: "100%",
        aspectRatio: "373 / 384",
        containerType: "inline-size",
      }}
    >
      <div
        className="absolute overflow-hidden rounded-xl"
        style={{
          left: px(16),
          top: px(16),
          right: px(16),
          height: px(195),
        }}
      >
        <Image
          src={course.image}
          alt=""
          width={341}
          height={195}
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="absolute flex flex-wrap items-center"
        style={{
          left: px(12),
          right: px(12),
          top: px(150),
          gap: px(12),
          minHeight: px(32),
        }}
      >
        <OverlayPill style={pill}>{course.lessons}</OverlayPill>
        <OverlayPill style={pill}>{course.duration}</OverlayPill>
        <OverlayPill style={pill}>{course.comments}</OverlayPill>
      </div>

      <div
        className="absolute flex justify-between gap-2"
        style={{ left: px(16), right: px(16), top: px(232) }}
      >
        <div className="flex min-w-0 flex-col" style={{ width: px(237), gap: px(16) }}>
          <div className="flex min-w-0 flex-col">
            <h3
              className="line-clamp-1 font-semibold tracking-[-0.01em] text-black"
              style={{ fontSize: px(20), lineHeight: 1.4 }}
            >
              {course.title}
            </h3>
            <p
              className="truncate text-[#4f4f4f]"
              style={{ fontSize: px(12), lineHeight: 1.67 }}
            >
              by {course.author}
            </p>
          </div>

          <div className="flex items-center" style={{ gap: px(12), minHeight: px(32) }}>
            <span
              className="inline-flex items-center rounded-full bg-[#f5f5f6] font-medium text-[#4b4c53]"
              style={{ gap: px(4), padding: `${px(6)} ${px(12)}`, fontSize: px(12) }}
            >
              <BarIcon style={{ width: px(20), height: px(20) }} />
              {course.level}
            </span>
            <AvatarStack
              className="h-auto"
              style={{ gap: px(8), height: px(32), width: px(104) }}
            />
          </div>

          <div className="flex items-end" style={{ gap: px(8) }}>
            <span
              className="font-medium tracking-[-0.01em] text-brand"
              style={{ fontSize: px(20), lineHeight: 1.4 }}
            >
              {course.price}
            </span>
            <span className="text-[#4f4f4f]" style={{ fontSize: px(12) }}>
              /lifetime
            </span>
          </div>
        </div>

        <div
          className="flex shrink-0 items-center"
          style={{ height: px(28), fontSize: px(18), lineHeight: 1.94 }}
        >
          <span className="font-medium text-[#4f4f4f]">{course.rating}</span>
          <StarIcon style={{ width: px(24), height: px(24), color: "#d4fb20" }} />
        </div>
      </div>
    </article>
  );
}

export function CourseCard({
  course,
  compact = false,
}: {
  course: Course;
  compact?: boolean;
}) {
  return compact ? (
    <CompactCourseCard course={course} />
  ) : (
    <GridCourseCard course={course} />
  );
}
