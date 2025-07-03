// Copyright Sukanya Mohanty 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/sukanya-mohanty-0640522b2/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Sukanya Mohanty",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://suku2007.github.io/smohanty20-portfolio/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const EMAIL = "sukanyamohanty71@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sukanya-mohanty-0640522b2/",
  github: "https://github.com/suku2007",
  behance: "https://www.behance.net/sukanyamohanty20"
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "PBPCO - bottling plants",
    image: "/projects/pbpco.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "We present a sustainable alternative to single-use plastics...",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://pbpco.net/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Al Yamuna - electrical infrastructure industry",
    image: "/projects/alyamuna.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Al Yamuna Densons, has been in electrical infrastructure...",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.alyamunadensons.ae/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "SRMU - opportunities at SRMU",
    image: "/projects/srmu.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Experience a world of countless opportunities at SRMU...",
    gradient: ["#245B57", "#004741"],
    url: "https://srmu.ac.in/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Tuli - Indian law firm",
    image: "/projects/tuli.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "Tuli & Co is a premier Indian law firm founded in 2000...",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://tuli.co.in/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Coral - monitoring of AI systems",
    image: "/projects/coral.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Responsible AI governs the development, deployment...",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://www.coralesecure.com/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Sunder Nursery - World Heritage Site",
    image: "/projects/sunder-nursery.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "Sunder Nursery is flanked by the World Heritage Site...",
    gradient: ["#5E4C06", "#746528"],
    url: "https://www.sundernursery.org/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Microlit - liquid handling instruments",
    image: "/projects/microlit.jpg",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description: "We design and develop high precision liquid handling...",
    gradient: ["#172839", "#334659"],
    url: "https://www.microlit.com/",
    tech: ["javascript", "html", "css"],
  },
  {
    name: "Kensho Hills - a luxury villa in Manali",
    image: "/projects/card-9.jpg",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description: "Kenshō Hills - Slow living in the mountains...",
    gradient: ["#142D46", "#2E4964"],
    url: "https://kenshohills.com/",
    tech: ["javascript", "html", "css", "wordpress"],
  },
  {
    name: "Blox - real-estate buying",
    image: "/projects/card-11.png",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "India's first consumer centric real-estate buying platform...",
    gradient: ["#470700", "#712A23"],
    url: "https://blox.xyz/",
    tech: ["next", "tailwind", "typescript"],
  },
  {
    name: "CSA - premium chauffeur services",
    image: "/projects/csa.jpg",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description: "We offer a premium Chauffeur and Hirecars services...",
    gradient: ["#685506", "#7B6921"],
    url: "https://csaapp.com/",
    tech: ["next", "tailwind", "typescript"],
  },
  {
    name: "Andaman Island - wishing to book holidays",
    image: "/projects/andaman.png",
    blurImage: "/projects/blur/cardize-blur.jpg",
    description: "A one-stop destination for people wishing to book holidays...",
    gradient: ["#552A04", "#614023"],
    url: "https://www.andamanisland.in/",
    tech: ["next", "tailwind", "typescript"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "tailwind",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "illustrator", "photoshop"],
  other: ["git", "lightroom",],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
   {
    type: NodeTypes.CHECKPOINT,
    title: "March 2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
   {
    type: NodeTypes.CHECKPOINT,
    title: "Step ahead to AI technology - AdvanceAI",
    size: ItemSize.SMALL,
    subtitle: "Developed and launched Advance AI Technology, an IT company specializing in web and app development, SaaS solutions, and comprehensive digital marketing services.",
    slideImage: "/timeline/advancaai.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "December 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
   {
    type: NodeTypes.CHECKPOINT,
    title: "Travipro",
    size: ItemSize.SMALL,
    subtitle: "Implemented a user-centric design for travel websites, alongside digital marketing strategies to boost online presence and customer engagement within the travel industry.",
    image: "/timeline/travipro.svg",
    slideImage: "/timeline/travipro.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Created Real Estate giant. 99patta",
    size: ItemSize.SMALL,
    subtitle: "Modarnize the UI/UX for user friendly intrectivity. completed the website with full of animations.",
    image: "/timeline/99patta.svg",
    slideImage: "/timeline/99patta.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
   {
    type: NodeTypes.CHECKPOINT,
    title: "June 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Completed Fuzia Talent Project.",
    size: ItemSize.SMALL,
    subtitle: "Collabrated with fuzia team to feel their perspective and provided them their dream project come true.",
    image: "/timeline/fuzia_logo.svg",
    slideImage: "/timeline/fuzia_talent.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Rewamped the website for alyamuna densons",
    size: ItemSize.SMALL,
    subtitle:
      "Tailored the requirements to a digital presence. got client score 100 out of 100.",
    image: "/timeline/alyamuna.svg",
    slideImage: "/timeline/alyamuna.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
    {
    type: NodeTypes.CHECKPOINT,
    title: "March 2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Inhanced Bisuness of PBPCO.",
    size: ItemSize.SMALL,
    subtitle: "PBP an EcoAqua Enterprise, is an ISO 9001:2015 & CE Certified Company. PBP've proudly served several esteemed clients, including renowned brands such as TAJ, ITC, JW Marriott, Shangri-La, Novotel,",
    slideImage: "/timeline/pbpco.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
   
  {
    type: NodeTypes.CHECKPOINT,
    title: "Completed Agrocrops website.",
    size: ItemSize.SMALL,
    subtitle: "Agrocrops handle 20 origins of peanuts, from 87% of global origination sites. Agrocrops set industry benchmarks by integrating every part of the peanut process",
    image: "/timeline/agrocrops.svg",
    slideImage: "/timeline/agrocrops.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey at Alliance web solution, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/aws.svg",
    slideImage: "/timeline/aws_full.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Freelance <br/>Travel Portal",
    size: ItemSize.SMALL,
    subtitle:
      "Completed a travel portal website. where anyone can book packages and plan their tour itenary.",
    // image: "/timeline/andaman.png",
    slideImage: "/timeline/andaman_card.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
