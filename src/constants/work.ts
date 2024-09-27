import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    sql,
    nodejs,
    mongodb,
    git,
    threejs,
    mathTeacher,
    sapir,
    cambium,
    elevation,
    acsioma,
    highSchool,
    reflix,
    weatherApp,
    planify,
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
        title: "app Developer",
        icon: mobile,
    },
    {
        title: "Front-End Developer",
        icon: backend,
    },
    {
        title: "Math Teacher",
        icon: mathTeacher,
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
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "sql",
        icon: sql,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Instructor",
        company_name: "Axioma Achievements",
        icon: acsioma,
        BgColor: "#191540",
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Present",
        points: [
            "Instructor specializing in Excel, Canva, and digital knowledge, delivering engaging,  practical courses that empower students with essential skills for real-world applications.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "cambium applicable innovation",
        icon: cambium,
        BgColor: "#B9B1A3",
        iconBg: "#E6DEDD",
        date: "May 2023 - Nov 2023",
        points: [
            "Working with Angular, Typescript, and CSS, the languages that used in the backend was C# .Net, and SQL for the database.",
            "Working with Typescript, React, and CSS In the frontend, NodeJS, and Express in the backend also building the database with ORM and Mongo DB.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Web Developer",
        company_name: "Elevation",
        icon: elevation,
        BgColor: "#E06C9F",
        iconBg: "#E6DEDD",
        date: "Feb 2023 - Apr 2023",
        points: [
            "An industry-based intensive 3-month coding Bootcamp that covered the entire MERN stack and beyond.",
            "Built a number of end-to-end projects from scratch while adhering to solid OOP principles and communicating with a number of external APIs.",
        ],
    },
    {
        title: "BSc. in Computer Science",
        company_name: "Sapir College",
        icon: sapir,
        BgColor: "#FF9914",
        iconBg: "#E6DEDD",
        date: "Oct 2019 - Jun 2022",
        points: [
            "GPA is 92",
            "Final project: Collaborated with the Israeli Ministry of Justice to facilitate the digitization of laws and legislation in Israel. As a team of two we developed a system that automatically detects OCR errors to increase the speed and effectiveness of the digitization process. ",
            "Project technologies: Python, XML, Web scraping, neural network(RNN).",
        ],
    },
    {
        title: "Math tutor",
        company_name: "Al-Takwa High School",
        icon: highSchool,
        BgColor: "rgb(16, 204, 82)",
        iconBg: "#E6DEDD",
        date: "Sep 2019 - Jan 2023",
        points: [
            "Collaborate with math teachers to identify areas where students need extra help.",
            "Provide group tutoring sessions to students in mathematics subjects including algebra,geometry, calculus, and statistics.",
        ],
    },
];


const projects = [
    {
        name: "Weather App",
        description:
            "The Weather App provides real-time weather updates for any city. Users can search for cities, save favorites, and stay informed about important weather conditions. ",
        tags: [
            {
                name: "node.js",
                color: "#61DAFB",
            },
            {
                name: "html",
                color: "#FFEB00",
            },
            {
                name: "css",
                color: "#FF6600",
            },
            {
                name: "javascript",
                color: "#4DB33D",
            },
            {
                name: "mongoDB",
                color: "#EC4899",
            },
        ],
        image: weatherApp,
        source_code_link: "https://github.com/MalakGdaea/weather-app",
    },
    {
        name: "Reflix",
        description:
            "Reflix is a movie rental app that allows users to browse and rent films within their budget. Users get their money back upon returning the movies, offering a unique renting experience.",
        tags: [
            {
                name: "javascript",
                color: "#61DAFB",
            },
            {
                name: "html",
                color: "#4DB33D",
            },
            {
                name: "css",
                color: "#EC4899",
            },
        ],
        image: reflix,
        source_code_link: "https://github.com/MalakGdaea/Reflix",
    },
    {
        name: "Planify - mobile app",
        description:
            "Planify is a task management app, designed to help users create and organize tasks efficiently. With Planify, you can categorize tasks, set deadlines, and manage your time more effectively.",
        tags: [
            {
                name: "react native",
                color: "#61DAFB",
            },
            {
                name: "Redux",
                color: "#4DB33D",
            },
            {
                name: "Firestore",
                color: "#EC4899",
            },
        ],
        image: planify,
        source_code_link: "https://github.com/MalakGdaea/Planify",
    },
];

export { services, technologies, experiences, projects };
