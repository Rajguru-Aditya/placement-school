import CtaOne from "@/components/CTA/CtaOne";
import InnerHeroOne from "@/components/Hero/InnerHeroOne";
import HeroOne from "@/components/Hero/HeroOne";
import PartnerOne from "@/components/Partner/PartnerOne";
import CourseOne from "@/components/Course/CourseOne";
import ServiceOne from "@/components/Service/ServiceOne";
import BlogOne from "@/components/Blog/BlogOne";
import LayoutOne from "@/components/Layout/LayoutOne";

export default function CooursesPage() {
  const data = {
    title: "Courses",
    breadcrumbs: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Courses",
        link: "#",
      },
    ],
  };
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        <PartnerOne />
        {/* <AboutOne /> */}
        <CourseOne />
        {/* <TestimonialOne /> */}
        <ServiceOne />
        {/* <InstructorOne /> */}
        {/* <CounterOne /> */}
        <BlogOne />
      </main>
    </LayoutOne>
  );
}
