import HeroOne from "@/components/Hero/HeroThree";
import PartnerOne from "@/components/Partner/PartnerOne";
import CourseOne from "@/components/Course/CourseTwo";
import ServiceOne from "@/components/Service/ServiceOne";
import BlogOne from "@/components/Blog/BlogOne";
import LayoutOne from "@/components/Layout/LayoutOne";
import TestimonialSuccessOne from "@/components/Testimonial/TestimonialOne";
import InstructorOne from "@/components/Instructor/InstructorOne";
import CounterOne from "@/components/Counter/CounterOne";
import CtaOne from "@/components/CTA/CtaOne";
import AboutOne from "@/components/About/AboutOne";

export default function HomePage() {
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        {/* <PartnerOne /> */}
        {/* <AboutOne /> */}
        <CourseOne />
        <TestimonialSuccessOne />
        {/* <ServiceOne /> */}
        {/* <InstructorOne /> */}
        {/* <CounterOne /> */}
        <BlogOne />
        {/* <CtaOne /> */}
      </main>
    </LayoutOne>
  );
}
