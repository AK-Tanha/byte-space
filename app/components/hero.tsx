import Image from "next/image";
import { BrandSurface } from "./brand-surface";
import { Decorations } from "./decorations";
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
        <Decorations variant="stage" />
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
          src="/hero/student.png"
          alt="Student learning with ByteSpace courses"
          width={437}
          height={484}
          priority
          className="absolute z-10 h-auto w-auto"
          style={{ left: U(575), top: U(540), width: U(437) }}
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
      <Decorations variant="flow" />
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

      <div className="relative mt-10 h-[430px] sm:h-[520px]">
        <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-lime sm:h-[520px] sm:w-[520px]" />
        <Image
          src="/hero/student.png"
          alt="Student learning with ByteSpace courses"
          width={437}
          height={484}
          priority
          className="absolute bottom-0 left-1/2 z-10 h-auto w-[290px] -translate-x-1/2 sm:w-[360px]"
        />
        <div className="absolute top-16 left-4 z-20 sm:top-24 sm:left-10">
          <CourseCard fontSize="13px" />
        </div>
        <div className="absolute top-40 right-4 z-20 sm:top-52 sm:right-10">
          <ProgressCard fontSize="12px" />
        </div>
        <div className="absolute bottom-6 left-4 z-20 sm:bottom-10 sm:left-10">
          <StudentsCard fontSize="14px" />
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
