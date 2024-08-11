import CourseImageOne from "/assets/imgs/gallery/course-img-1.webp";
import CourseImageTwo from "/assets/imgs/gallery/course-img-2.webp";
import CourseImageThree from "/assets/imgs/gallery/course-img-3.webp";
import CourseImageFour from "/assets/imgs/gallery/course-img-4.webp";
import CourseImageFive from "/assets/imgs/gallery/course-img-5.webp";
import CourseImageSix from "/assets/imgs/gallery/course-img-6.webp";

import InstructorImageOne from "/assets/imgs/team/comment-1.webp";
import InstructorImageTwo from "/assets/imgs/team/comment-2.webp";
import InstructorImageThree from "/assets/imgs/team/comment-3.webp";
import InstructorImageFour from "/assets/imgs/team/comment-img.webp";
import InstructorImageFive from "/assets/imgs/team/instructor.webp";

import WishListIcon from "/assets/imgs/icon/wiselist.svg";
import StarRedIcon from "/assets/imgs/icon/star-red.svg";
import StatusIcon from "/assets/imgs/icon/status-icon.svg";
import UserGroupIcon from "/assets/imgs/icon/user-three-red.svg";
import RightArrowRedIcon from "/assets/imgs/icon/arrow-right-red.svg";
import RightArrowWhiteIcon from "/assets/imgs/icon/arrow-right-white.svg";

const courseOne = {
  title: {
    sliceOne: "Success Stories",
  },
  subtitle: "We offer a diverse range of courses designed to help you acquire new skills, advance your career, and achieve your professional goals. Each course is carefully crafted to provide you with practical knowledge and hands-on experience in your chosen field.",
  filterOptions: [
    {
      name: "All",
      target: "*",
    },
    {
      name: "Trending",
      target: "trending",
    },
    {
      name: "Popular",
      target: "popular",
    },
    {
      name: "Featured",
      target: "featured",
    },
  ],
  courses: [
    {
      image: "https://plus.unsplash.com/premium_photo-1661774861781-e540fbc29330?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        image: InstructorImageFive,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: " Aisha Patel, 31",
      company: "Cognizant",
      price: "$19.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: "https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        image: InstructorImageOne,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: " Aisha Patel, 31",
      company: "Cognizant",
      price: "$9.00",
      link: "course-detail",
      filterClass: "trending",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
    {
      image: "https://images.unsplash.com/photo-1437572848259-df63caa1a552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      instructor: {
        image: InstructorImageTwo,
        name: "Jackie Rippin",
      },
      wishlistIcon: WishListIcon,
      title: " Aisha Patel, 31",
      company: "Cognizant",
      price: "$15.00",
      link: "course-detail",
      filterClass: "popular",
      categories: [
        {
          name: "Trending",
          link: "categories",
        },
      ],
      meta: [
        {
          icon: StarRedIcon,
          description: "4.9 Rating",
        },
        {
          icon: StatusIcon,
          description: "Beginner",
        },
        {
          icon: UserGroupIcon,
          description: "5K+ Students",
        },
      ],
      enrollBtnText: "Enroll Now",
      arrowIcon: RightArrowRedIcon,
    },
  ],
  more: {
    name: "Browse More",
    icon: RightArrowWhiteIcon,
    link: "courses",
  },
};

import CourseTwoImageOne from "/assets/imgs/thumb/course-four-1.webp";
import CourseTwoImageTwo from "/assets/imgs/thumb/course-four-2.webp";
import CourseTwoImageThree from "/assets/imgs/thumb/course-four-3.webp";

const courseTwo = {
  title: "Explore Our Course",
  btn: {
    text: "View all course",
    link: "/",
  },
  courses: [
    {
      image: "https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?t=st=1723377221~exp=1723380821~hmac=57f94616414e47942ee12aeb30e7a29b5117e4f16336e65820bb89d79c1a9ddf&w=1060",
      title: "Digital Marketing",
      description:
        "Master Digital Marketing and Drive Results",
      link: "course-detail",
      price: "$12",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.4",
      },
    },
    {
      image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051556.jpg?t=st=1723377178~exp=1723380778~hmac=d5658ac732423a744fa6a2fe3fad8d5a4b677bc53b890190262215b213949919&w=1060",
      title: "UI/UX Design ",
      description:
        "Design Engaging User Experiences",
      link: "course-detail",
      price: "$13",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
    },
    {
      image: "https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1723377268~exp=1723380868~hmac=3e0a4862dcac17f31f3aa76b7279106c75ad7376f64b7bb1f9c9daef02b665c5&w=740",
      title: "Development",
      description:
        "Build Cutting-Edge Applications",
      link: "course-detail",
      price: "$15",
      discount: "60%",
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
    },
  ],
};

import CourseThreeImageOne from "/assets/imgs/thumb/course-6-1.webp";
import CourseThreeImageTwo from "/assets/imgs/thumb/course-6-2.webp";
import CourseThreeImageThree from "/assets/imgs/thumb/course-6-3.webp";
import CourseThreeImageFour from "/assets/imgs/thumb/course-6-4.webp";

const courseThree = {
  title: "Our health coach online courses",
  courses: [
    {
      image: CourseThreeImageOne,
      title: "Prime & wellness coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageTwo,
      title: "Fundamental health coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.6",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageThree,
      title: "Stress management coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
    {
      image: CourseThreeImageFour,
      title: "Behavioral Change Coaching",
      link: "course-detail",
      description:
        "Develops positive lifestyle changes that last for areas including weight loss, balanced nutrition.",
      categories: [
        "Primary Care",
        "Physical Therapy",
        "Mental Health",
        "Care Navigation",
        "Coaching",
      ],
      animation: {
        name: "fade-slide bottom",
        delay: "0.8",
      },
      btn: {
        text: "Enroll Now",
        link: "course-detail",
      },
    },
  ],
};

export { courseOne, courseTwo, courseThree };
