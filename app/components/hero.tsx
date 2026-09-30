import Image from "next/image";
import { BrandSurface } from "./brand-surface";
import { Decorations, HeroFrames } from "./decorations";
import { CourseCard, ProgressCard, StudentsCard } from "./hero-cards";
import { SearchBar } from "./search-bar";
import { SiteHeader } from "./site-header";

const U = (px: number) => `${px / 14.4}cqw`;

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
    <div className="relative md:hidden">
      <Decorations />
      <SiteHeader />
      <div className="relative z-10 px-5 pt-10 text-center sm:px-8">
        <h1 className="text-[1.85rem] leading-[1.15] font-bold tracking-[-0.025em] text-white sm:text-5xl">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm text-[#c8d2f4] sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
        <div className="mx-auto mt-8 max-w-lg">
          <SearchBar />
        </div>
      </div>

      <div className="relative mx-auto mt-10 aspect-[722/620] w-full max-w-[340px] sm:max-w-none sm:aspect-auto sm:h-[520px]">
        <div className="absolute left-1/2 top-[6%] aspect-square w-[78%] -translate-x-1/2 rounded-full bg-lime sm:top-8 sm:h-[520px] sm:w-[520px]" />
        <Image
          src="/hero/happy-boy.png"
          alt="Student learning with ByteSpace courses"
          width={722}
          height={515}
          priority
          className="absolute inset-x-0 bottom-0 z-10 mx-auto h-auto w-full max-w-none object-contain"
        />
        <div className="absolute top-[16%] left-2 z-20 sm:top-36 sm:left-10">
          <CourseCard fontSize="11px" />
        </div>
        <div className="absolute top-[42%] right-2 z-20 sm:top-[290px] sm:right-10">
          <ProgressCard fontSize="10px" />
        </div>
        <div className="absolute bottom-2 left-2 z-20 sm:bottom-10 sm:left-10">
          <StudentsCard fontSize="11px" />
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
