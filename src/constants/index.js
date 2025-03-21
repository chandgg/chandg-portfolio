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
  dmart,
  hdfchome,
  shraaddhamotors,
  Captlogo,
  p1,
  p2,
  p4,
  threejs,
} from "../assets";

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
    title: "Web Developer",
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
    title: "Content Creator",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cashier",
    company_name: "Dmart",
    icon: dmart,
    iconBg: "#383E56",
    date: "March 2020 - Feb 2021",
    points: [
      "Scanning product and making Bills.",
      "Customer Handling.",
      "Keeping transaction records and Cash handling.",
      "Adapt at multitasking, managing register and keeping the checkout area .",
    ],
  },
  {
    title: "FSA",
    company_name: "HDFC Home Loans",
    icon: hdfchome,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Aug 2021",
    points: [
      "Assist customer in completing home loan applications.",
      "Providing personalized services to clients by explaining home loan products and others things.",
      "Review and verify legal documents, Agreements and other paperworks.",
      "Support business development growth by cross-selling other financial products.",
    ],
  },
  {
    title: "DataBase Administrator",
    company_name: "Shraddha Tata Motors",
    icon: shraaddhamotors,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Ensure the Performance, availability and security of database.",
      "Manage access control, encryption and data recovery process.",
      "Design and implement efficient database structure.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "FreeLancer Capt Technology",
    icon: Captlogo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Bright Internationals",
    description:
      "IELTS preparation class for students for Abroads Studies.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: p1,
    source_code_link: "https://brightinternationals.com/",
  },
  {
    name: "Luxury Tiles And Marbles",
    description:
      "Canada Base Dealer of Luxury and unique tiles and Marbles for decoration of House, office anything decorative places.",
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
    image: p2,
    source_code_link: "https://amgranito.ca/",
  },
  {
    name: "My Food Order",
    description:
      "A landing Pages of Online Healthy Food Delivery websites.",
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
    image: p4,
    source_code_link: "https://my-food-ordering.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
