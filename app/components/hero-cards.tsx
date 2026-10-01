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

/** Figma: 232×138, padding 16, radius 16, gap 8. Scales from `fontSize` (14 = 1:1). */
export function ProgressCard({
  fontSize,
  className,
}: {
  fontSize: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col rounded-[1.143em] bg-white px-[1.143em] pt-[1.143em] pb-[1.143em] backdrop-blur-[10px] ${className ?? ""}`}
      style={{ fontSize, width: "16.571em", gap: "0.571em" }}
    >
      <p className="leading-[1.714em] font-medium text-[#242528]">
        Learning Progress
      </p>
      <p className="text-[3.429em] leading-[1.206em] font-semibold tracking-[-0.01em] text-[#242528]">
        55%
      </p>
      <div className="h-[0.571em] w-full overflow-hidden rounded-full bg-[#f6f6f6]">
        <div className="h-full w-[56%] rounded-full bg-lime" />
      </div>
    </div>
  );
}

/** Figma: 258×123, padding 16, radius 16, gap 4. Scales from `fontSize` (16.87 = 1:1). */
export function StudentsCard({
  fontSize,
  className,
  tone = "light",
}: {
  fontSize: string;
  className?: string;
  /** `lime` swaps the white plate for the brand lime, so the star turns brand blue. */
  tone?: "light" | "lime";
}) {
  const isLime = tone === "lime";

  return (
    <div
      className={`flex flex-col rounded-2xl ${
        isLime ? "bg-lime" : "bg-white"
      } ${className ?? ""}`}
      style={{
        fontSize,
        width: "15.77em",
        // Padding is in `em` like every other dimension here. The fixed `px-4
        // pb-4` this replaced did not scale with `fontSize`, so the avatar
        // strip (13.93em) overran the content box at small sizes.
        padding: "0.952em",
        gap: "0.237em",
      }}
    >
      <p
        className="font-medium text-[#242528]"
        style={{ fontSize: "0.949em", lineHeight: "1.5em" }}
      >
        Happy Students
      </p>
      <div
        className="flex items-center"
        style={{ gap: "0.28em", height: "0.949em" }}
      >
        <span
          className="font-bold text-[#242528]"
          style={{ fontSize: "0.593em", lineHeight: "1.5em" }}
        >
          4.5 (240)
        </span>
        <StarIcon
          className="h-[1.05em] w-[1.05em]"
          style={{ color: isLime ? "#003be2" : "#d4fb20" }}
        />
      </div>
      <Image
        src="/hero/Auto Layout Horizontal.png"
        alt=""
        width={232}
        height={43}
        className="h-auto w-full max-w-[13.93em]"
      />
    </div>
  );
}
