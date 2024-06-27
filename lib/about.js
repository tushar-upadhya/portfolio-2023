import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiFigma, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const about = {
  title: "About me",
  description:
    "My name is Tushar Upadhyay and I am an inventive Frontend Developer with a MSC Electronics and Instrumentation. Specializing in HTML, CSS, JavaScript and Java – with an initiative to delve deep into Typescript for improved web application quality. I am detail-oriented and a team player, and I create beautiful, responsive user interfaces. Connect with me for some cool frontend dev opportunities.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tushar Upadhyay",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 8979033432",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Email",
      fieldValue: "tusharupadhyay690@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Frontend Developer at MentorAide",

  items: [
    {
      company: "MentorAide.in",
      position: "Frontend Developer",
      duration: "2023-Present",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  //   description: "Frontend Developer at MentorAide",
  items: [
    {
      institution: "Dau Dayal Institute Of Vocational Education",
      degree: "Master of Science",
      duration: "2020",
    },
    {
      institution: "Dau Dayal Institute Of Vocational Education",
      degree: "Bachelor of Science",
      duration: "2017",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "My skills",

  skillList: [
    { icons: <FaHtml5 />, name: "html 5" },
    { icons: <FaCss3 />, name: "css 2" },
    { icons: <FaJs />, name: "javascript" },
    { icons: <FaReact />, name: "react" },
    { icons: <SiNextdotjs />, name: "nextJS" },
    { icons: <SiTailwindcss />, name: "tailwindcss" },
    { icons: <SiFigma />, name: "figma" },
    // { icons: <FaJava />, name: "Java" },
    // { icons: <SiTypescript />, name: "Typescript" },
    // { icons: <SiRedux />, name: "Redux" },
    // { icons: <BsFiletypeScss />, name: "Scss" },
    // { icons: <FaBootstrap />, name: "Bootstrap" },
    // { icons: <SiShadcnui />, name: "ShadcnUi" },
    // { icons: <SiAstro />, name: "Astro" },
    // { icons: <SiStrapi />, name: "Strapi" },
  ],
};
