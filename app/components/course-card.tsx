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
  students: string;
  price: string;
  lifetime?: boolean;
};

function OverlayPill({
  icon,
  children,
  withIcon = true,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  withIcon?: boolean;
}) {
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 text-[12px] leading-5 font-medium whitespace-nowrap text-[#4f4f4f] backdrop-blur-[4px]">
      {withIcon ? icon : null}
      {children}
    </span>
  );
}

/** Figma: four 32px avatars overlapping 16px + a black `26+` badge. */
function AvatarStack({
  count,
  badgeClassName,
}: {
  count: string;
  badgeClassName?: string;
}) {
  return (
    <span className="flex items-center" style={{ gap: 8 }}>
      <Image
        src="/courses/avatars-4.png"
        alt=""
        width={104}
        height={32}
        className="h-8 w-auto"
      />
      <span
        className={`grid h-8 w-8 place-items-center rounded-full text-[12px] leading-5 font-medium ${badgeClassName ?? "bg-lime text-neutral-900"}`}
      >
        {count}
      </span>
    </span>
  );
}

function GridCourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-[#ced0d3] bg-white p-5 transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(2,12,48,0.45)]">
      <div className="relative overflow-hidden rounded-[10px]">
        <Image
          src={course.image}
          alt=""
          width={332}
          height={196}
          className="h-auto w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-1.5 p-2.5">
          <OverlayPill icon={<BarIcon className="h-3 w-3" />}>
            {course.lessons}
          </OverlayPill>
          <OverlayPill icon={<ClockIcon className="h-3 w-3" />}>
            {course.duration}
          </OverlayPill>
          <OverlayPill icon={<CommentIcon className="h-3 w-3" />}>
            {course.comments}
          </OverlayPill>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="line-clamp-1 text-[19px] font-bold text-neutral-900">
          {course.title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 pt-1">
          <span className="text-[15px] text-neutral-400">{course.rating}</span>
          <StarIcon className="h-4 w-4 text-lime" />
        </span>
      </div>

      <p className="mt-1 text-[13px] text-neutral-400">
        by <span className="text-brand">{course.author}</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[12px] text-neutral-600">
          <BarIcon className="h-3 w-3" />
          {course.level}
        </span>
        <AvatarStack count={course.students} />
      </div>

      <p className="mt-4 text-[20px] font-bold text-brand">
        {course.price}
        {course.lifetime ? (
          <span className="text-[12px] font-normal text-neutral-400">
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
        <OverlayPill withIcon={false} icon={null}>
          {course.lessons}
        </OverlayPill>
        <OverlayPill withIcon={false} icon={null}>
          {course.duration}
        </OverlayPill>
        <OverlayPill withIcon={false} icon={null}>
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
            <AvatarStack
              count={course.students}
              badgeClassName="bg-black text-white"
            />
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
