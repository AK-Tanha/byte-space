import { CourseCard, type Course } from "./course-card";
import { Container, SectionHeading } from "./section-heading";

const topics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const featuredCourses: Course[] = [
  {
    title: "Learn Figma from Basic",
    image: "/courses/skill-card-1.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    lifetime: true,
  },
  {
    title: "Build Digital Asset",
    image: "/courses/skill-card-2.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    lifetime: true,
  },
  {
    title: "the Power of Big Data",
    image: "/courses/skill-card-3.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    lifetime: true,
  },
  {
    title: "Balancing Productivity and Focus",
    image: "/courses/skill-card-4.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    lifetime: true,
  },
  {
    title: "Mastering Money Management",
    image: "/courses/skill-card-5.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    lifetime: true,
  },
  {
    title: "From Idea to Startup Success",
    image: "/courses/skill-card-6.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    price: "$25",
    lifetime: true,
  },
];

export function Categories() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br className="hidden sm:block" /> Build Your Skills
            </>
          }
          subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Mobile: horizontal snap strip. The 18 topics wrap into ragged rows
            when allowed to flow, so they scroll instead. */}
        <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {topics.map((topic) => (
            <li key={topic} className="shrink-0 snap-start">
              <button
                type="button"
                className={`rounded-full px-5 py-2.5 text-[15px] whitespace-nowrap transition-colors ${
                  topic === "Featured"
                    ? "bg-lime font-medium text-neutral-900"
                    : "bg-[#f5f5f6] text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {topic}
              </button>
            </li>
          ))}
          <li className="shrink-0 snap-start">
            <button
              type="button"
              className="px-2 py-2.5 text-[15px] font-medium whitespace-nowrap text-brand"
            >
              + More
            </button>
          </li>
        </ul>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
