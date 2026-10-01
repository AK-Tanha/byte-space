import Image from "next/image";
import { BrandSurface } from "./brand-surface";
import { HeroFrames } from "./decorations";
import { CourseCard, ProgressCard, StudentsCard } from "./hero-cards";
import { SearchBar } from "./search-bar";
import { SiteHeader } from "./site-header";

const U = (px: number) => `${px / 14.4}cqw`;

/** Mobile collage canvas: 440px, matching the stage's `max-w`. */
const SU = (px: number) => `${(px / 440) * 100}cqw`;

function HeroStage() {
  return (
    <div
      className="relative mx-auto hidden w-full max-w-[1440px] md:block"
      style={{ containerType: "inline-size" }}
    >
      <div className="relative" style={{ height: U(1024) }}>
        <HeroFrames />
        <SiteHeader variant="stage" />

        <div className="absolute inset-x-0 text-center" style={{ top: U(158) }}>
          <h1
            className="mx-auto font-bold tracking-[-0.025em] text-white"
            style={{ fontSize: U(72), lineHeight: 1.14, maxWidth: U(1120) }}
          >
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p
            className="text-[#c8d2f4]"
            style={{ fontSize: U(16), marginTop: U(30) }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
          <div className="flex justify-center" style={{ marginTop: U(62) }}>
            <SearchBar variant="stage" />
          </div>
        </div>

        <div
          className="absolute rounded-full bg-lime"
          style={{ left: U(200), top: U(570), width: U(1040), height: U(1040) }}
        />

        <Image
          src="/hero/happy-boy.png"
          alt="Student learning with ByteSpace courses"
          width={722}
          height={515}
          priority
          className="absolute z-10 h-auto w-auto"
          style={{ left: U(414), top: U(509), width: U(722) }}
        />

        <div className="absolute z-20" style={{ left: U(403), top: U(640) }}>
          <CourseCard fontSize={U(15)} />
        </div>
        <div className="absolute z-20" style={{ left: U(843), top: U(655) }}>
          <ProgressCard fontSize={U(14)} />
        </div>
        <div className="absolute z-20" style={{ left: U(330), top: U(838) }}>
          <StudentsCard fontSize={U(17)} />
        </div>
      </div>
    </div>
  );
}

function HeroMobile() {
  return (
    <div className="relative pb-8 md:hidden">
      <SiteHeader />
      <div className="relative z-10 px-4 pt-8 text-center sm:px-8 sm:pt-10">
        <h1 className="text-[clamp(1.55rem,7.7vw,1.85rem)] leading-[1.15] font-bold tracking-[-0.025em] text-white sm:text-5xl">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm text-[#c8d2f4] sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mx-auto mt-7 max-w-lg sm:mt-8">
          <SearchBar />
        </div>
      </div>

      {/* The stage matches the image's own 722x515 ratio and runs the full
          viewport width, so the photo is edge-to-edge with no dead band above
          it. `SU` scales the cards off that width, and every card sits in a
          transparent region of the photo - never over the face. */}
      <div
        className="relative z-10 mx-auto mt-8 aspect-[722/515] w-full max-w-[440px]"
        style={{ containerType: "inline-size" }}
      >
        <div className="absolute top-[3%] left-[18%] aspect-square w-[60%] rounded-full bg-lime" />
        <Image
          src="/hero/happy-boy.png"
          alt="Student learning with ByteSpace courses"
          width={722}
          height={515}
          priority
          className="absolute inset-0 z-10 h-full w-full max-w-none object-contain"
        />
        <div className="absolute top-[3%] left-[1%] z-20">
          <CourseCard fontSize={SU(8.5)} />
        </div>
        <div className="absolute top-[3%] right-[1%] z-20">
          <ProgressCard fontSize={SU(7)} />
        </div>
        <div className="absolute right-[1%] bottom-[3%] z-20">
          <StudentsCard fontSize={SU(10)} />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <BrandSurface>
      <HeroMobile />
      <HeroStage />
    </BrandSurface>
  );
}
