import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Courses from "@/components/Courses";
import Services from "@/components/Services.";
import Corporate from "@/components/Corporate";
import WhyChoose from "@/components/WhyChoose";
import LearningPath from "@/components/LearningPath";

export default function Home() {
  return (
    <main>
      <Hero />
      <Audience />
      <Courses />
      `<Services />`
      <Corporate />
      <WhyChoose />
      <LearningPath />
    </main>
  );
}