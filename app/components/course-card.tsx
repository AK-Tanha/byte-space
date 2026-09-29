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
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 text-[10.5px] whitespace-nowrap text-neutral-700 backdrop-blur-sm">
      {icon}
      {children}
    </span>
  );
}

function AvatarStack({ count }: { count: string }) {
  return (
    <span className="flex items-center">
      <Image
        src="/courses/avatars.png"
        alt=""
        width={294}
        height={102}
        className="h-8 w-auto"
      />
      <span className="-ml-3 grid h-8 w-8 place-items-center rounded-full bg-lime text-[11px] font-bold text-neutral-900">
        {count}
      </span>
    </span>
  );
}

export function CourseCard({ course }: { course: Course }) {
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
        <div className="absolute inset-x-0 bottom-0 flex flex-nowrap items-center gap-1.5 p-2.5">
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
