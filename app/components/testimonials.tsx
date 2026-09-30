import Image from "next/image";
import { Container } from "./section-heading";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/testimonials/user-3.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/testimonials/user-1.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/testimonials/user-2.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

/**
 * Background glow layer. Same structure as the features section: three
 * absolutely-positioned radial-gradient divs, sized in cqw off a 1440px frame.
 * Note each gradient only paints to half its box, so these are positioned by
 * their box, not by the visible core.
 */
const T = (px: number) => `${px / 14.4}cqw`;

const glowEllipses = [
  {
    left: T(-442),
    top: T(149),
    size: T(1137),
    stops: [0.24, 0.0552, 0.0144],
    rgb: "0,59,226",
  },
  {
    left: T(395),
    top: T(-138),
    size: T(672),
    stops: [0.6, 0.138, 0.036],
    rgb: "203,252,1",
  },
  {
    left: T(842),
    top: T(-241),
    size: T(1137),
    stops: [0.4, 0.092, 0.024],
    rgb: "203,252,1",
  },
];

function TestimonialsGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ containerType: "inline-size" }}
    >
      {glowEllipses.map((e) => (
        <div
          key={`${e.left}-${e.top}`}
          className="absolute"
          style={{
            left: e.left,
            top: e.top,
            width: e.size,
            height: e.size,
            filter: "blur(40px)",
            backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(${e.rgb},${e.stops[0]}) 0%, rgba(${e.rgb},${e.stops[1]}) 53%, rgba(${e.rgb},${e.stops[2]}) 75%, rgba(${e.rgb},0) 100%)`,
          }}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-16 sm:py-24">
      <TestimonialsGlow />
      <Container className="relative z-10">
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
