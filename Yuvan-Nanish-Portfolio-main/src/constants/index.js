
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: mysql,
  },
  {
    title: "Machine Learning Engineer",
    icon: mongodb,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
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
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Stock Price Prediction Project",
    company_name: "Sri Ramachandra Faculty of Engineering & Technology",
    icon: github, // Or a custom icon for SRFET if available
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Developed a stock price prediction model using LSTM and Yahoo Finance data.",
      "Enabled time-series forecasting with real-world financial insights.",
      "Focused on deep learning model optimization and performance evaluation.",
      "GitHub: https://github.com/Yuvan-nanish/Stock-price-prediction-model-using-Yfinance",
    ],
  },
  {
    title: "Cloud Computing Intern",
    company_name: "Finforz",
    icon: github, // Replace with Finforz logo if available
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Apr 2024",
    points: [
      "Completed internship with hands-on experience in cloud services and deployment.",
      "Worked on building and managing an online learning platform.",
      "Integrated real-time data handling and optimized performance.",
      "GitHub: https://github.com/Yuvan-nanish/E-learning",
    ],
  },
  {
    title: "AI & Health Data Intern",
    company_name: "Sri Ramachandra Faculty of Engineering & Technology",
    icon: github, // Or use a health/lock icon if relevant
    iconBg: "#383E56",
    date: "Aug 2024 - Oct 2024",
    points: [
      "Completed an internship focusing on the encryption and sharing of health data.",
      "Gained hands-on experience in AI, encryption methods, and cybersecurity.",
      "Worked on SECURE-HEALTH-INFORMATION-EXCHANGE (HIE) system.",
      "GitHub: https://github.com/Yuvan-nanish/SECURE-HEALTH-INFORMATION-EXCHANG",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Stock Price Prediction",
    description:
      "Developed a stock price prediction model using LSTM and Yahoo Finance data, enabling accurate time-series forecasting with real-world financial insights.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "lstm",
        color: "green-text-gradient",
      },
      {
        name: "yfinance",
        color: "pink-text-gradient",
      },
    ],
    image: project2, // Replace with actual stock prediction project image
    source_code_link: "https://github.com/Yuvan-nanish/Stock-price-prediction-model-using-Yfinance",
  },
  {
    name: "E-Learning Platform",
    description:
      "An online learning platform developed as part of a cloud computing internship. Deployed cloud-based architecture with real-time data handling and a user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "white-text-gradient",
      },
      {
        name: "cloud",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert, // Replace with actual e-learning project image
    source_code_link: "https://github.com/Yuvan-nanish/E-learning",
  },
  {
    name: "Secure Health Information Exchange (HIE)",
    description:
      "A secure system for sharing and encrypting sensitive medical data. Integrated AI, encryption algorithms, and cybersecurity practices for safe healthcare data transmission.",
    tags: [
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "cryptography",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "security",
        color: "white-text-gradient",
      },
    ],
    image: project3, // Replace with actual HIE project image
    source_code_link: "https://github.com/Yuvan-nanish/SECURE-HEALTH-INFORMATION-EXCHANG",
  },
];


export { services, technologies, experiences, testimonials, projects };
