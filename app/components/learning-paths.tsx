import Image from "next/image";
import { Container, SectionHeading } from "./section-heading";

const paths = [
  { label: "Design", icon: "/categories/design.png" },
  { label: "Development", icon: "/categories/development.png" },
  { label: "IT & Software", icon: "/categories/it.png" },
  { label: "Business", icon: "/categories/business.png" },
  { label: "Marketing", icon: "/categories/marketing.png" },
  { label: "Photography", icon: "/categories/photography.png" },
];

export function LearningPaths() {
  return (
    <section className="bg-white pt-4 pb-20 sm:pb-28">
      <Container>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          subtitle="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map((path) => (
            <li
              key={path.label}
              className="flex flex-col items-center gap-4 rounded-2xl border border-neutral-200 px-4 py-7 text-center transition-colors hover:border-neutral-300 hover:bg-neutral-50/60"
            >
              <Image
                src={path.icon}
                alt=""
                width={60}
                height={60}
                className="h-[60px] w-[60px]"
              />
              <span className="text-[17px] font-medium text-neutral-800">
                {path.label}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
