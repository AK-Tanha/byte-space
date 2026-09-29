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
    image: "/courses/figma.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    students: "26+",
    price: "$25",
    lifetime: true,
  },
  {
    title: "Build Digital Asset",
    image: "/courses/digital-asset.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    students: "26+",
    price: "$25",
    lifetime: true,
  },
  {
    title: "the Power of Big Data",
    image: "/courses/big-data.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    students: "26+",
    price: "$25",
    lifetime: true,
  },
  {
    title: "Balancing Productivity and Focus",
    image: "/courses/productivity.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    students: "26+",
    price: "$25",
    lifetime: true,
  },
  {
    title: "Mastering Money Management",
    image: "/courses/money.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    students: "26+",
    price: "$25",
    lifetime: true,
  },
  {
    title: "From Idea to Startup Success",
    image: "/courses/startup.jpg",
    author: "purepearl studio",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    rating: "4.5",
    students: "26+",
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

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {topics.map((topic) => (
            <li key={topic}>
              <button
                type="button"
                className={`rounded-full px-5 py-2.5 text-[15px] transition-colors ${
                  topic === "Featured"
                    ? "bg-lime font-medium text-neutral-900"
                    : "bg-[#f5f5f6] text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {topic}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="px-2 py-2.5 text-[15px] font-medium text-brand"
            >
              + More
            </button>
          </li>
        </ul>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
