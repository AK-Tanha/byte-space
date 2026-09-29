import Image from "next/image";
import { Container } from "./section-heading";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/testimonials/sarah.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/testimonials/james.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/testimonials/alex.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export function Testimonials() {
  return (
    <section
      className="bg-[#fafafa] py-16 sm:py-24"
      style={{
        backgroundImage:
          "radial-gradient(60% 70% at 0% 90%, rgba(110,140,255,0.20), transparent 72%), radial-gradient(70% 55% at 100% 30%, rgba(203,252,1,0.20), transparent 74%), radial-gradient(50% 40% at 100% 100%, rgba(203,252,1,0.14), transparent 72%)",
      }}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-[32px] leading-[1.15] font-bold tracking-[-0.02em] text-[#040819] sm:text-[40px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[560px] text-[15px] leading-[1.75] text-neutral-600 sm:text-[17px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_-34px_rgba(2,12,48,0.5)]"
            >
              <Image
                src={item.avatar}
                alt=""
                width={80}
                height={80}
                className="h-20 w-20"
              />
              <p className="mt-6 text-[20px] font-bold text-neutral-900">
                {item.name}
              </p>
              <p className="mt-1 text-[16px] text-brand">{item.role}</p>
              <p className="mt-5 text-[15px] leading-[1.8] text-neutral-600 sm:text-[16px]">
                {item.quote}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
