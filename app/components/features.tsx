import Image from "next/image";
import { ProgressCard } from "./hero-cards";
import { featuredCourses } from "./categories";
import { CheckIcon } from "./icons";
import { Container } from "./section-heading";
import { Squiggle } from "./decorations";

const V = (px: number) => `${px / 5.7}cqw`;

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const checklist = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

function CoursePreview() {
  const course = featuredCourses[0];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ced0d3] bg-white p-4 shadow-[0_24px_60px_-30px_rgba(2,12,48,0.45)]">
      <div className="overflow-hidden rounded-[10px]">
        <Image src={course.image} alt="" width={332} height={196} className="h-auto w-full" />
      </div>
      <p className="mt-3 line-clamp-1 text-[19px] font-bold text-neutral-900">
        {course.title}
      </p>
      <p className="mt-1 text-[13px] text-neutral-400">
        by <span className="text-brand">{course.author}</span>
      </p>
      <div className="mt-3 flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-[#f5f5f6] px-3 py-1.5 text-[12px] text-neutral-600">
          {course.level}
        </span>
      </div>
      <p className="mt-3 text-[20px] font-bold text-brand">
        {course.price}
        <span className="text-[12px] font-normal text-neutral-400">/lifetime</span>
      </p>
    </div>
  );
}

function LearnerVisual() {
  return (
    <div
      className="relative mx-auto hidden w-full lg:block lg:aspect-[570/600]"
      style={{ containerType: "inline-size" }}
      aria-hidden
    >
      <div className="absolute" style={{ left: V(40), top: V(24), width: V(372) }}>
        <CoursePreview />
      </div>
      <Image
        src="/hero/student.png"
        alt=""
        width={437}
        height={484}
        className="absolute z-10 h-auto w-auto"
        style={{ left: V(120), top: V(86), width: V(388) }}
      />
      <div className="absolute z-20" style={{ left: V(400), top: V(250) }}>
        <ProgressCard fontSize={V(14)} />
      </div>
      <Squiggle
        className="absolute"
        style={{ left: V(498), top: V(124), width: V(150), height: V(160) }}
        strokeWidth={30}
      />
    </div>
  );
}

function LearnerVisualFlow() {
  return (
    <div className="relative mt-10 lg:hidden">
      <div className="mx-auto w-full max-w-[320px]">
        <CoursePreview />
      </div>
      <Image
        src="/hero/student.png"
        alt=""
        width={437}
        height={484}
        className="relative z-10 mx-auto -mt-16 w-[240px]"
      />
      <div className="relative z-20 mx-auto -mt-24 w-fit">
        <ProgressCard fontSize="12px" />
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section
      className="bg-[#fafafa]"
      style={{
        backgroundImage:
          "radial-gradient(45% 40% at 20% 15%, rgba(203,252,1,0.32), transparent 70%), radial-gradient(45% 35% at 5% 95%, rgba(203,252,1,0.32), transparent 70%), radial-gradient(40% 30% at 0% 55%, rgba(120,150,255,0.30), transparent 75%), radial-gradient(45% 45% at 100% 5%, rgba(120,150,255,0.26), transparent 75%), radial-gradient(45% 45% at 100% 95%, rgba(120,150,255,0.26), transparent 75%)",
      }}
    >
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-start lg:gap-x-10 lg:gap-y-16 lg:py-24">
        <div>
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-[#040819] sm:text-[40px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-neutral-600 sm:text-[17px]">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely, we have the resources you
            need.
          </p>
          <dl className="mt-10 flex gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[30px] font-bold text-brand sm:text-[34px]">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[15px] text-neutral-500">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <LearnerVisualFlow />
        </div>

        <LearnerVisual />

        <div className="mx-auto w-full max-w-[380px] lg:max-w-none">
          <Image
            src="/creator-collage.png"
            alt="ByteSpace creator with course revenue and students"
            width={570}
            height={610}
            className="h-auto w-full"
            style={{
              maskImage: "radial-gradient(78% 78% at 50% 50%, #000 62%, transparent 100%)",
            }}
          />
        </div>

        <div>
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-[#040819] sm:text-[40px]">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-6 max-w-[520px] text-[15px] leading-[1.75] text-neutral-600 sm:text-[17px]">
            <strong className="font-semibold text-neutral-900">ByteSpace</strong> supports
            individuals or entities in the creation, publication, and administration of educational
            courses.
          </p>
          <ul className="mt-7 space-y-4">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[16px] text-neutral-800 sm:text-[17px]"
              >
                <CheckIcon className="h-5 w-5 shrink-0 text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
