import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";

import celectLogo from '../assets/company/celectcep.png'
import iitLogo from '../assets/company/iit.png'
import javaLogo from '../assets/tech/javalogo.png'
import expressLogo from '../assets/tech/expresslogo.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Java",
    icon: javaLogo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Express",
    icon: expressLogo,
  }
];

const experiences = [
  {
    title: "Software Development Full-time",
    company_name: "CELECT",
    icon: celectLogo,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      " User Interface Design: I am dedicated to creating visually stunning and user-friendly interfaces tha resonate with the target audience.",
      "Functionality Implementation: With a keen eye for detail, I implement a wide range of functionalities tailored to the specific needs of clients and end-users.",
      "Bug and Error Fixing: I excel in identifying and resolving bugs and errors promptly to ensure optimal performance and reliability of websites and apps.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "CELECT",
    icon: celectLogo,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - June 2024",
    points: [
      "User Interface Design: I am dedicated to creating visually stunning and user-friendly interfaces that resonate with the target audience.",
      "Functionality Implementation: With a keen eye for detail, I implement a wide range of functionalities tailored to the specific needs of clients and end-users.",
      "Bug and Error Fixing: I excel in identifying and resolving bugs and errors promptly to ensure optimal performance and reliability of websites and apps.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "IIT Academy",
    icon: iitLogo,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Dec 2023",
    points: [
      `Design Customization: Crafting unique and visually appealing designs tailored to client's preferences and brand identity.`,
      "Optimization for Performance: Ensuring websites are fully optimized for speed, responsiveness, and user experience across devices and browsers.",
      "SEO Integration: Implementing SEO best practices to enhance website visibility and ranking on search engine results pages, thereby driving organic traffic and improving online presence.",
    ],
  },
];

const projects = [
  {
    name: "Affiliate",
    description:
      "A web platform where users can explore and buy their favorite and trending clothes with a simple click on any product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node-js",
        color: "pink-text-gradient",
      },
      {
        name: "express-js",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
