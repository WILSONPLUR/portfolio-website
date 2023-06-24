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
  git,
  figma,
  movieSearch,
  libapp,
  threejs,
  movieSearchAppDemo,
  libAppDemo,
} from "../assets";
import i18n from "../utils/i18n";

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
];

const projects = [
  {
    name: i18n.t("myWorks.cards.card1.title"),
    description: i18n.t("myWorks.cards.card1.description"),
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "strapi",
        color: "pink-text-gradient",
      },
    ],
    image: libapp,
    video: libAppDemo,
    source_code_link: "https://lib-app.vercel.app/",
    deployed_link: "https://lib-app.vercel.app/",
  },
  {
    name: i18n.t("myWorks.cards.card2.title"),
    description: i18n.t("myWorks.cards.card2.description"),
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: movieSearch,
    video: movieSearchAppDemo,
    source_code_link: "https://github.com/WILSONPLUR/movies-search-app",
    deployed_link: "https://movies-search-app-wine.vercel.app/",
  },
];

export { services, technologies, projects };
