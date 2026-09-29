import Image from "next/image";
import { StarIcon } from "./icons";

const cardShadow = "0 1.4em 3em -1.2em rgba(2, 12, 48, 0.45)";

function Card({
  className,
  fontSize,
  children,
}: {
  className?: string;
  fontSize: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-[1.05em] bg-white text-neutral-900 ${className ?? ""}`}
      style={{ fontSize, boxShadow: cardShadow }}
    >
      {children}
    </div>
  );
}

export function CourseCard({
  fontSize,
  className,
}: {
  fontSize: string;
  className?: string;
}) {
  return (
    <Card
      fontSize={fontSize}
      className={`w-[14em] px-[1.1em] py-[0.95em] ${className ?? ""}`}
    >
      <p className="text-[1em] leading-tight font-semibold">UI/UX Design</p>
      <p className="mt-[0.5em] flex items-center whitespace-nowrap text-[0.7em] text-neutral-400">
        <span>200 Courses</span>
        <span className="mx-[0.7em] text-neutral-300">•</span>
        <span>1000+ Students</span>
      </p>
    </Card>
  );
}

export function ProgressCard({
  fontSize,
  className,
}: {
  fontSize: string;
  className?: string;
}) {
  return (
    <Card
      fontSize={fontSize}
      className={`w-[16.5em] px-[1.4em] py-[1.2em] ${className ?? ""}`}
    >
      <p className="text-[1em] leading-none font-medium">Learning Progress</p>
      <p className="mt-[0.5em] text-[3em] leading-none font-bold tracking-tight">
        55%
      </p>
      <div className="mt-[1em] h-[0.5em] w-full overflow-hidden rounded-full bg-neutral-200">
        <div className="h-full w-[55%] rounded-full bg-lime" />
      </div>
    </Card>
  );
}

export function StudentsCard({
  fontSize,
  className,
}: {
  fontSize: string;
  className?: string;
}) {
  return (
    <Card
      fontSize={fontSize}
      className={`w-[15.3em] px-[1.05em] py-[1em] ${className ?? ""}`}
    >
      <p className="text-[1em] leading-none font-semibold">Happy Students</p>
      <p className="mt-[0.6em] flex items-center gap-[0.35em] text-[0.76em] text-neutral-400">
        <span>4.5 (240)</span>
        <StarIcon className="h-[1.15em] w-[1.15em] text-lime" />
      </p>
      <div className="mt-[0.9em] flex items-center">
        <Image
          src="/hero/avatars.png"
          alt=""
          width={136}
          height={60}
          className="h-[2.1em] w-auto"
        />
        <span className="-ml-[0.9em] grid h-[2.35em] w-[2.35em] place-items-center rounded-full bg-lime text-[0.78em] font-bold text-neutral-900">
          2K+
        </span>
      </div>
    </Card>
  );
}
