// Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import NewspaperLineIcon from "remixicon-react/NewspaperLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedinBoxLineIcon from "remixicon-react/LinkedinBoxLineIcon";

//Hero Icons Array
export const heroIcons = [
  <LinkedinBoxLineIcon />,
  <GithubLineIcon />,
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <NewspaperLineIcon />,
];

//Links for Hero Icons Array
export const heroLinks = [
  "https://www.linkedin.com/in/vishnu-gurav-469625291",
  "https://github.com/Vishnugurav",
  "https://www.instagram.com/guravvishnu07/",
  "https://www.facebook.com/vishnu.gurav.5855",
  "#",
];

// AboutMe icons
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";
import LinksFillIcon from "remixicon-react/LinksFillIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 8,
    icon: <GithubFillIcon />,
  },
  // {
  //   title: "Blogs Written",
  //   amount: 10,
  //   icon: <AwardFillIcon />,
  // },
  {
    title: "LinkedIn Followers",
    amount: 330,
    icon: <GroupLineIcon />,
  },
  {
    title: "LinkedIn Connections",
    amount: 300,
    icon: <LinksFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Yo, what’s up? I’m Vishnu! 🏐💻 A problem-solver at heart, passionate about DSA and algorithms to tackle real-world challenges. Right now, I’m learning backend development, adding it to my skillset along with frontend (HTML, CSS, JS, React). But more than just coding, I love exploring new concepts and constantly leveling up. Whether it’s cracking a tough algorithm or picking up a new tech skill, I’m always up for the challenge. Off-screen, you’ll find me on the volleyball court, bringing the same energy and strategy into the game. 🚀 Let’s build, learn, and grow! 🔥🚀";
// End of AboutMe icons

// Skills
export const skillsData = [
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/js.png",
  },
  // {
  //   name: "TypeScript",
  //   icon: "/skills/ts.png",
  // },
  {
    name: "VS Code",
    icon: "/skills/vscode.png",
  },
  {
    name: "ReactJS",
    icon: "/skills/react.png",
  },
  {
    name: "NextJS",
    icon: "/skills/nextjs.png",
  },
  {
    name: "Github",
    icon: "/skills/github.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwind.png",
  },
  // {
  //   name: "Framer Motion",
  //   icon: "/skills/framer.png",
  // },
  // {
  //   name: "Figma",
  //   icon: "/skills/figma.png",
  // },
  // {
  //   name: "Cloudflare",
  //   icon: "/skills/cloudflare.png",
  // },
  // {
  //   name: "NodeJS",
  //   icon: "/skills/nodejs.png",
  // },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "ChatGPT",
    icon: "/skills/chatgpt.png",
  },
  {
    name: "Linux",
    icon: "/skills/linux.png",
  },
  {
    name: "C",
    icon: "/skills/c.png",
  },
  {
    name: "C++",
    icon: "/skills/cpp.png",
  },
  {
    name: "Java",
    icon: "/skills/java1.png",
  },
];

// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />;


export const myDates = [
  { section: "Dynamic Volleyball Skills & Competitive Play🏐", date: "2019 - Forever" },
  { section: "The Beginning of the Journey 🚀", date: "2021" },
  // { section: "Tech Arsenal: My Skillset🚀", date: "2021 - Present" },
  { section: "Building Blocks: My Diploma Journey 😎", date: "2021 - 2024" },
  { section: "Building the Future: My BTech Story🔧", date: "2024 - Present" },
];

export const experienceData = [
  {
    year: 1,
    title: "Dynamic Volleyball Skills & Competitive Play🏐",
    education: "",
    experience: [
      "-Techniques Mastered: Improved skills in spiking, setting, blocking, and digging for effective gameplay.",
      "-Serving Skills: Developed powerful and accurate jump serves, float serves, and topspin serves.",
      "-Game Strategy: Focused on court positioning, quick attacks, and defensive formations for better team coordination.",
    ],
  },
  {
    year: 2,
    title: "The Beginning of the Journey 🚀",
    education: "The Rising Sun English School Omerga",
    experience: [
      "-Scored an impressive 97.40% in the SSC (10th) board exams.",
      "-Developed a passion for learning and growth.",
    ],
  },
  {
    year: 4,
    title: "Building Blocks: My Diploma Journey 😎",
    education: "DBATU, Lonere",
    experience: [
      "-CGPA - 9.89",
      "-Gained hands-on experience in refinery operations, process optimization, and petrochemical production.",
      "-Specialized in thermodynamics, reaction engineering, and process simulation for efficient plant design.",
      "-Worked on C programming, focusing on problem-solving, basic Data Structures & Algorithms (DSA), and system-level programming.",
    ],    
  },
  {
    year: 5,
    title: "Building the Future: My BTech Story🔧",
    education: "COEP Technological University, Pune",
    experience: [
      "-Member of CSI COEP",
      "-VFX Coordinator at Zest, managing visual effects integration for events and presentations.",
      "-Specialized in front-end frameworks like React",
    ],
  },
];


//project Section

// export const projectsData = [
//   {
//     name: "TRACKIT-VCS",
//     desc: "TRACKIT - A version control system built with a strong focus on data structures and algorithms, enabling efficient tracking, management, and retrieval of code changes for seamless collaboration.",
//     url: "/projects/image-1.jpg",
//     tech: ["DSA"],
//   },
//   {
//     name: "Portfolio",
//     desc: "A personal portfolio website showcasing my projects, skills, and experiences, designed with a sleek UI and smooth navigation for an engaging user experience.",
//     url: "/projects/image-2.jpg",
//     tech: ["All"],
//   },
  
// ];

// export const projectsButton = [
//   "All",
//   "DSA",
//   "HTML",
//   "CSS",
//   "JS",
//   "ReactJS",
//   "TailwindCSS",
//   "NextJS",
//   "FramerMotion",
// ];

//Navbar Data:
import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
// import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
// import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
// import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  // {
  //   id: "reviews",
  //   name: "Reviews",
  //   icon: <UserStarLineIcon />,
  // },
  // {
  //   id: "projects",
  //   name: "Projects",
  //   icon: <ProjectorLineIcon />,
  // },
  // {
  //   id: 'pricing',
  //   name: 'Pricing',
  //   icon: <PriceTag3LineIcon />,
  // },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",
    name: "Questions",
    icon: <QuestionAnswerLineIcon />,
  },
];

// Questions & Answers (Q&A):

export const questions = [
  {
    question: "What’s your story, Vishnu 👨‍💻? ",
    answer:
      "I’m a BTech CSE student at COEP Pune, but my journey wasn’t a straight path. I initially pursued petrochemical engineering, but my passion for coding and technology led me to switch to computer science. During my diploma, I discovered my love for programming and never looked back.Now, I’m focused on AI, DSA, and web development, constantly learning and growing. Though I had to leave behind volleyball, a sport I cherished since childhood, I’ve found new excitement in solving complex problems and building innovative solutions. Passion over pressure—that’s my mantra! 🚀💡",
  },
  {
    question: "Why did you switch from Petrochemical to Computer Science? 🔄💡? ",
    answer:
      "I initially chose petrochemical engineering based on external advice rather than my own passion. But as I studied, I realized that my heart wasn’t in it. At the same time, I started coding and enjoyed it far more than my core subjects. That’s when I knew I had to switch and pursue what truly excited me.",
  },
  {
    question: "How did you get into COEP 🎓🏆? ",
    answer:
      "When I decided to transition into computer science, I researched top colleges and set COEP as my first preference and VJTI as my second. When the provisional merit list was released, I was ranked 4th in all of Maharashtra! It was a proud moment for my family, but for me, it was bittersweet—I had to sacrifice my love for volleyball to focus on my career.",
  },
  {
    question: "What was the biggest challenge during your transition🤔?",
    answer:
      "The biggest challenge was catching up with the technical knowledge that other computer science students already had. I had to put in extra effort to learn DSA, web development, and AI while balancing my coursework. It was tough, but I pushed through and cleared all my subjects with a solid CGPA of 8.0🚀.",
  },
  {
    question: "Do you miss volleyball🏐💙?",
    answer:
      "Absolutely! Volleyball was a huge part of my life, and stepping away from it was difficult. But I believe sacrifices are necessary to achieve greater goals. While I may not play competitively anymore, the sport has instilled in me discipline, teamwork, and perseverance—qualities that help me in my tech journey.",
  },
  {
    question: "What’s the biggest lesson you’ve learned from this experience🎯?",
    answer:
      "Always choose what truly interests you, not what others suggest. Your career is something you’ll work on for years, so it should be something you’re passionate about. If you follow external advice without considering your own interests, you might end up regretting it. 🤝📚",
  },
  {
    question: "Got any advice for young tech enthusiasts 💡?",
    answer:
      "Start small but dream big! Dive into DSA, try building real-world projects, and never stop exploring new tech. And most importantly, have fun with it. Coding is like playing a game. 🎮💻",
  },
  {
    question: "What’s been the biggest challenge in switching fields? 🤔?",
    answer:
      "Adapting to a completely new way of thinking! Moving from chemical equations to coding logic wasn’t easy, but persistence, curiosity, and a love for problem-solving helped me bridge the gap.🔧🔍",
  },
  {
    question: "How do you deal with coding burnout 🤯🔥 ?",
    answer:
      "I take breaks and step away from the screen. A walk, a playing FreeFire, or just talking with my family helps me reset. Balance is the secret sauce. 🧠🍃",
  },
  {
    question: "What’s next for you 🚀✨? ",
    answer:
      "More learning, more projects, and maybe some new skills like AI. The world’s full of possibilities, and I’m just getting started. Watch out! 💥✨",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;