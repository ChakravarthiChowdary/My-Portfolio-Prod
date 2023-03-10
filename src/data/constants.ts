import { generateId } from "../utils/GenerateRandomId";

export const NavItems = [
  { title: "Home", icon: "uil-estate", id: generateId(10) },
  { title: "About", icon: "uil-user", id: generateId(10) },
  { title: "Skills", icon: "uil-file-alt", id: generateId(10) },
  { title: "Services", icon: "uil-briefcase-alt", id: generateId(10) },
  { title: "Portfolio", icon: "uil-scenery", id: generateId(10) },
  { title: "Contact", icon: "uil-navigator", id: generateId(10) },
];

export const socialIcons = [
  {
    title: "LinkedIn",
    icon: "uil-linkedin-alt",
    id: generateId(10),
    link: "https://www.linkedin.com/in/chakravarthichowdary/",
  },
  {
    title: "GitHub",
    icon: "uil-github-alt",
    id: generateId(10),
    link: "https://github.com/ChakravarthiChowdary",
  },
];

export const aboutInfo = [
  { number: "4.5+", title: "Years", subtitle: "experience" },
  { number: "3+", title: "Projects", subtitle: "completed" },
  { number: "3", title: "Companies", subtitle: "worked" },
];

export const skills = [
  {
    skillTitle: "Frontend developer",
    skillsSubtitle: "More than 4 years",
    skills: [
      { name: "HTML", percentage: "90%", id: generateId(10) },
      { name: "CSS", percentage: "70%", id: generateId(10) },
      { name: "JS", percentage: "80%", id: generateId(10) },
      { name: "REACT", percentage: "80%", id: generateId(10) },
    ],
    id: generateId(10),
    skillsIcon: "uil-brackets-curly",
  },
  {
    skillTitle: "Backend developer",
    skillsSubtitle: "More than 1 year",
    skills: [
      { name: "Node Js", percentage: "70%", id: generateId(10) },
      { name: "Express", percentage: "70%", id: generateId(10) },
      { name: "Mongo DB", percentage: "70%", id: generateId(10) },
      { name: "Firebase", percentage: "80%", id: generateId(10) },
    ],
    id: generateId(10),
    skillsIcon: "uil-server-network",
  },
];

export const qualifications = [
  {
    name: "UI Engineer",
    organization: "Anko (Target Australia)",
    term: "2022 - Till Date",
    type: "work",
    gradeOrExperience: "3 Months",
    id: generateId(10),
  },
  {
    name: "Application Development Analyst",
    organization: "Accenture",
    term: "2021 - 2022",
    type: "work",
    gradeOrExperience: "11 Months",
    id: generateId(10),
  },
  {
    name: "System Engineer",
    organization: "Tata Consultancy Services",
    term: "2018 - 2021",
    type: "work",
    gradeOrExperience: "3 years",
    id: generateId(10),
  },
  {
    name: "Bachelor of Technology (EEE)",
    organization: "VRSEC",
    term: "2014 - 2018",
    type: "education",
    gradeOrExperience: "9.18",
    id: generateId(10),
  },
  {
    name: "Intermediate",
    organization: "Sri Chaitanya Jr College",
    term: "2012 - 2014",
    type: "education",
    gradeOrExperience: "95.4%",
    id: generateId(10),
  },
  {
    name: "Tenth standard",
    organization: "Sri Chaitanya School",
    term: "2011 - 2012",
    type: "education",
    gradeOrExperience: "9.7",
    id: generateId(10),
  },
];

export const services = [
  {
    title: "Frontend Developer",
    id: generateId(10),
    icon: "uil-arrow",
    serviceDescription: [
      "Design and develop web applications using HTML5, CSS3, JavaScript, ReactJS that meets accessibility and web standards for website.",
      "Use Redux with Redux-Thunk middleware in application to retrieve datafrom back-end andtoalso perform RESTFUL services",
      "Optimize the application by code splitting using Lazy loading.",
      "Can write JASMINE unit test framework to write unit tests for JavaScript code",
    ],
  },
  {
    title: "Backend Developer",
    id: generateId(10),
    icon: "uil-server-network",
    serviceDescription: [
      "Develop API end points that will get and store the data coming from front end.",
      "Can implement authentication using JWT tokens",
      "Implementing different routes using express and validating request body sent by front end.",
      "Troubleshoot and debug applications.",
    ],
  },
  {
    title: "Mobile Developer",
    id: generateId(10),
    icon: "uil-mobile-android",
    serviceDescription: [
      "Develop aesthetic looking mobile applications using React Native.",
      "Can implement OTP, Facebook, Google based authentication using firebase as backend.",
      "Develop hybrid applications for both iOS and Android",
      "Use Redux with Redux-Thunk middleware in application to retrieve datafrom back-end andtoalso perform RESTFUL services",
    ],
  },
];

export const portfolios = [
  {
    titile: "Expense Tracker",
    urlToImage: "assets/img/portfolio1.jpg",
    description:
      "A responsive Expense tracker app developed with React, React Hooks, Redux, Material UI and used Node Js to create backend. Implemented image upload to the backend so that users can change or upload profile photo. Users can also upload expense bills.",
    demoUrl: "https://github.com/ChakravarthiChowdary/Expense-Tracker-Frontend",
    id: generateId(10),
  },
  {
    titile: "Memories Web app",
    urlToImage: "assets/img/portfolio2.jpg",
    description:
      "This is a web application where users can store thier memories and other users can like the shared memories. Implemented authentication to allow users to delete thier own memories and like others !",
    demoUrl: "https://github.com/ChakravarthiChowdary/Memories-FrontEnd",
    id: generateId(10),
  },
  {
    titile: "Netflix Clone",
    urlToImage: "assets/img/portfolio3.jpg",
    description: "Created clone for Netflix UI using react",
    demoUrl: "https://github.com/ChakravarthiChowdary/Netflix-Clone",
    id: generateId(10),
  },
];

export const testimonials = [
  {
    id: generateId(10),
    name: "Varsha Jagtap",
    designation: "Team Lead",
    isClient: false,
    rating: 5,
    description:
      "You have been working exceptionally well and handling every user story be it front-end or back-end independently. You completed all your tasks with very minimal supervision and with complete ownership. You are technically very strong and your communication skills are also very good.",
    urlToImage: "assets/img/testimonial1.jpg",
  },
  {
    id: generateId(10),
    name: "Kanika Garg",
    designation: "Team Lead",
    isClient: false,
    rating: 5,
    description:
      "You have done great work in handling technical stories and supporting other team members technically. You have been actively delivering tasks assigned to you and working assignments with different technologies.",
    urlToImage: "assets/img/testimonial2.jpg",
  },
  {
    id: generateId(10),
    name: "Sonal Gurwara",
    designation: "Team Lead",
    isClient: false,
    rating: 5,
    description:
      "The way you handle the stories, interact with the client and provide quick resolution for any issues/concern raised is really tremendous. Your eagerness to learn new skills and ability to pick up new technologies quickly is really helping our team to grow.",
    urlToImage: "assets/img/testimonial3.jpg",
  },
];

export const contacts = [
  {
    source: "Call Me",
    value: "+91 9441811236",
    id: generateId(10),
    icon: "uil-phone",
  },
  {
    source: "Email Me",
    value: "chakravarthichowdary236@gmail.com",
    id: generateId(10),
    icon: "uil-envelope",
  },
  {
    source: "Location",
    value: "Bengaluru - India",
    id: generateId(10),
    icon: "uil-map-marker",
  },
];
