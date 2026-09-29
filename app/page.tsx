import { Categories } from "./components/categories";
import { CreatorCta } from "./components/creator-cta";
import { Features } from "./components/features";
import { Hero } from "./components/hero";
import { LearningPaths } from "./components/learning-paths";
import { LogoStrip } from "./components/logo-strip";
import { SiteFooter } from "./components/site-footer";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <LogoStrip />
      <Categories />
      <LearningPaths />
      <Features />
      <CreatorCta />
      <Testimonials />
      <SiteFooter />
    </main>
  );
}
