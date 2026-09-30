import Image from "next/image";
import Link from "next/link";
import { BrandSurface } from "./brand-surface";
import { featuredCourses } from "./categories";
import { CourseCard } from "./course-card";
import { StudentsCard } from "./hero-cards";

/** Shared page gutter: 122px at the 1440 artboard, 48px from md up. */
const GUTTER = "px-6 pt-9 md:px-12 md:pt-9 xl:px-[122px]";

/**
 * Left-hand collage. Desktop uses the Figma frame (548×585, positioned at
 * left 97 / top 305 of the 1440-wide artboard) with every child offset relative
 * to that frame; mobile falls back to a single flowing column.
 */
function AuthCollage() {
  const [front, back] = [
    featuredCourses[2],
    featuredCourses[1],
  ];

  return (
    /* Figma: the group sits at left 97 / top 305, i.e. 25px left of the 122px
       text column and 58px below its 127px height. */
    <div className="relative mt-[58px] xl:-ml-[25px]">
      {/* Desktop stage */}
      <div className="relative hidden h-[585px] w-[548px] md:block">
        <div
          className="absolute z-0"
          style={{ left: 26, top: 92, width: 373, height: 384 }}
        >
          <CourseCard course={back} compact />
        </div>

        <div
          className="absolute z-10"
          style={{ left: 137, top: 1, width: 373, height: 384 }}
        >
          <CourseCard course={front} compact />
        </div>

        <Image
          src="/auth/auth-deco-left-1.png"
          alt=""
          width={146.72}
          height={146.72}
          className="absolute z-20 h-auto w-auto"
          style={{ left: 51.5, top: 20, width: 146.72, height: 146.72 }}
        />

        <Image
          src="/auth/auth-deco-left-2.png"
          alt=""
          width={188}
          height={188}
          className="absolute z-20 h-auto w-auto"
          style={{ left: 0, top: 397, width: 188, height: 188 }}
        />

        <Image
          src="/auth/auth-deco-right-1.png.png"
          alt=""
          width={175}
          height={175}
          className="absolute z-30 h-auto w-auto"
          style={{
            left: 373,
            top: 321,
            width: 175,
            height: 175,
            transform: "rotate(360deg)",
          }}
        />

        <div className="absolute z-20" style={{ left: 251, top: 435 }}>
          <StudentsCard fontSize="16.87px" tone="lime" />
        </div>
      </div>

      {/* Mobile stack */}
      <div className="mt-10 flex flex-col items-center gap-6 md:hidden">
        <div className="relative w-full max-w-[340px]">
          <div className="w-full">
            <CourseCard course={front} compact />
          </div>
          <Image
            src="/auth/auth-deco-left-1.png"
            alt=""
            width={72}
            height={72}
            className="absolute -top-6 -left-6 z-10 h-auto w-auto"
          />
          <Image
            src="/auth/auth-deco-right-1.png.png"
            alt=""
            width={80}
            height={80}
            className="absolute -right-4 bottom-8 z-10 h-auto w-auto"
          />
        </div>
        <div className="w-full max-w-[280px] self-start">
          <StudentsCard fontSize="15px" tone="lime" />
        </div>
      </div>
    </div>
  );
}

export function AuthShell({
  heading,
  description,
  children,
}: {
  heading: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <BrandSurface className="flex min-h-screen flex-col">
      {/* Same horizontal padding as the grid below, so the logo lines up with
          the left column text. */}
      <header
        className={`relative z-10 mx-auto w-full max-w-[1440px] ${GUTTER}`}
      >
        <Link href="/" aria-label="ByteSpace home" className="inline-block">
          <Image
            src="/auth/auth-logo.png"
            alt="ByteSpace"
            width={28.875}
            height={31.5}
            priority
            className="h-auto w-auto"
            style={{ width: 28.875, height: 31.5 }}
          />
        </Link>
      </header>

      <div
        className={`relative z-10 mx-auto grid w-full max-w-[1440px] flex-1 items-start gap-12 py-10 md:grid-cols-2 md:gap-8 md:pb-16 md:pt-[52px] ${GUTTER}`}
      >
        <div className="min-w-0">
          {/* Figma: 475 wide, 16px gap. Heading 20/24 semibold -1%, body
              18/28.8 regular #b0b0b0. */}
          <div className="flex w-full max-w-[475px] flex-col gap-4">
            <h2 className="text-[20px] leading-[1.2] font-semibold tracking-[-0.01em] text-white">
              {heading}
            </h2>
            <p className="font-sans text-[17px] leading-[1.6] font-normal text-[#f5f5f6]">
              {description}
            </p>          </div>

          <AuthCollage />
        </div>

        <div className="min-w-0">
          <div className="mx-auto w-full max-w-[580px] rounded-3xl bg-white px-6 py-8 text-neutral-900 sm:px-10 md:px-14 md:py-12 lg:px-16">
            {children}
          </div>
        </div>
      </div>
    </BrandSurface>
  );
}
