import Image from "next/image";
import { BarIcon, ClockIcon, CommentIcon, StarIcon } from "./icons";

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
}: {
  children: React.ReactNode;
  size?: "sm" | "md";
}) {
  const sizeClass =
    size === "sm"
      ? "gap-0.5 px-[7.5px] py-[3.25px] text-[11px] leading-4"
      : "gap-1.5 px-3 py-1.5 text-[12px] leading-5";

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-[rgba(246,246,246,0.6)] font-medium whitespace-nowrap text-[#4f4f4f] backdrop-blur-[4px] ${sizeClass}`}
    >
      {/* {withIcon ? icon : null} */}
      {children}
    </span>
  );
}

/** Figma: four 32px avatars overlapping 16px. */
function AvatarStack() {
  return (
    <span className="flex items-center" style={{ gap: 8 }}>
      <Image
        src="/courses/Auto Layout Horizontal.png"
        alt=""
        width={104}
        height={32}
        className="h-8 w-auto"
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
          <AvatarStack />
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

/** Figma `Course_Card_1`: 373×384, radius 24, 16px padding, pills without icons. */
function CompactCourseCard({ course }: { course: Course }) {
  return (
    <article
      className="relative box-border rounded-3xl border border-[#ced0d3] bg-white"
      style={{ width: "100%", aspectRatio: "373 / 384" }}
    >
      <div
        className="absolute overflow-hidden rounded-xl"
        style={{ left: 16, top: 16, right: 16, height: 195 }}
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
        className="absolute flex items-center"
        style={{ left: 12, top: 150, gap: 12, height: 32 }}
      >
        <OverlayPill >
          {course.lessons}
        </OverlayPill>
        <OverlayPill >
          {course.duration}
        </OverlayPill>
        <OverlayPill >
          {course.comments}
        </OverlayPill>
      </div>

      <div
        className="absolute flex justify-between"
        style={{ left: 16, right: 16, top: 232 }}
      >
        <div className="flex flex-col" style={{ width: 237, gap: 16 }}>
          <div className="flex flex-col">
            <h3
              className="line-clamp-1 font-semibold tracking-[-0.01em] text-black"
              style={{ fontSize: 20, lineHeight: "28px" }}
            >
              {course.title}
            </h3>
            <p className="text-[12px] leading-5 text-[#4f4f4f]">
              by {course.author}
            </p>
          </div>

          <div className="flex items-center" style={{ gap: 12, height: 32 }}>
            <span
              className="inline-flex items-center rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[12px] leading-5 font-medium text-[#4b4c53]"
              style={{ gap: 4 }}
            >
              <BarIcon className="h-5 w-5" />
              {course.level}
            </span>
            <AvatarStack />
          </div>

          <div className="flex items-end" style={{ gap: 8 }}>
            <span
              className="font-medium tracking-[-0.01em] text-brand"
              style={{ fontSize: 20, lineHeight: "28px" }}
            >
              {course.price}
            </span>
            <span className="text-[12px] leading-5 text-[#4f4f4f]">
              /lifetime
            </span>
          </div>
        </div>

        <div className="flex items-center" style={{ gap: 0, height: 28 }}>
          <span className="text-[18px] leading-7 font-medium text-[#4f4f4f]">
            {course.rating}
          </span>
          <StarIcon className="h-6 w-6" style={{ color: "#d4fb20" }} />
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
