const logotext = "DKS";
const meta = {
  title: "Dhruv Shetty",
  description: "Entrepreneur and software maestro rooted in NYC, navigating the digital realm with an innovator's spirit.",
};

const introdata = {
  title: "I’m Dhruv Shetty",
  animated: {
    first: "I passionately innovate products",
    second: "I breathe life through code",
    third: "I flourish from diverse experiences",
    fourth: "I masterfully solve complex problems",
  },
  description1: "Entreprenuer, Full Stack Developer and Product Manager",
  description2: "Love making life just a little bit easier, one innovation at a time",
};

const dataabout = {
  title: "Who am I?",
  aboutme: "Pursuing a master's degree in Computing, Entrepreneurship and Innovation from New York University, I am developing my skillset in Product Development, Management and Entrepreneurship. I weirdly like having problems, because they constantly are an inspiration to build better solutions. Technology has made life so much easier, so I learn as many different skills as possible to contribute to this ease, picking up on new ones very quickly. I have worked on multiple projects in the past either independantly, or through my startup (Pyramid Developers), which aims to provide a platform for students to learn and build projects. I am also a Teaching Assistant at NYU for the course 'DevOps and Agile Methodologies' by John Rofrano.",
};
const worktimeline = [
  {
    jobtitle: "Teaching Assistant",
    where: "New York University",
    date: "January 2023 - December 2023",
  }, {
    jobtitle: "Founder",
    where: "Pyramid Developers",
    date: "Arpil 2020 - ",
  },
  {
    jobtitle: "Research and Development Engineer",
    where: "Hewlett Packard Enterprise",
    date: "January 2022 - June 2022",
  },
];

const skills = [
  {
    name: "Flutter",
    badgeUrl: "https://img.shields.io/badge/Flutter-%2302569B.svg?&style=for-the-badge&logo=Flutter&logoColor=white"
  },
  {
    name: "Python",
    badgeUrl: "https://img.shields.io/badge/python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"
  },
  {
    name: "Dart",
    badgeUrl: "https://img.shields.io/badge/dart-%230175C2.svg?&style=for-the-badge&logo=dart&logoColor=white"
  },
  {
    name: "AWS",
    badgeUrl: "https://img.shields.io/badge/Amazon%20Web%20Services-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"
  },
  {
    name: "Django",
    badgeUrl: "https://img.shields.io/badge/django-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"
  },
  {
    name: "Google Cloud",
    badgeUrl: "https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?&style=for-the-badge&logo=google-cloud&logoColor=white"
  },
  {
    name: "Firebase",
    badgeUrl: "https://img.shields.io/badge/Firebase-orange.svg?&style=for-the-badge&logo=firebase&logoColor=white"
  },
  {
    name: "NodeJS",
    badgeUrl: "https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"
  },
  {
    name: "JavaScript",
    badgeUrl: "https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
  },
  {
    name: "TypeScript",
    badgeUrl: "https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"
  },
  {
    name: "HTML5",
    badgeUrl: "https://img.shields.io/badge/html5-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"
  },
  {
    name: "C",
    badgeUrl: "https://img.shields.io/badge/c-%2300599C.svg?&style=for-the-badge&logo=c&logoColor=white"
  },
  {
    name: "Java",
    badgeUrl: "https://img.shields.io/badge/java-%23ED8B00.svg?&style=for-the-badge&logo=java&logoColor=white"
  },
  {
    name: "Angular",
    badgeUrl: "https://img.shields.io/badge/angular-%23DD0031.svg?&style=for-the-badge&logo=angular&logoColor=white"
  },
  {
    name: "Go",
    badgeUrl: "https://img.shields.io/badge/Go-blue.svg?&style=for-the-badge&logo=go&logoColor=white"
  }
];




const dataportfolio = [{
  img: "/collision-prediction/scores.png",
  description: "",
  link: "/collision-prediction",
},
{
  img: "https://picsum.photos/400/800/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/600/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/300/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/700/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},

{
  img: "https://picsum.photos/400/600/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/300/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/550/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
{
  img: "https://picsum.photos/400/700/?grayscale",
  description: "The wisdom of life consists in the elimination of non-essentials.",
  link: "#",
},
];

const contactConfig = {
  YOUR_EMAIL: "dhruv.shetty@stern.nyu.edu",
  YOUR_FONE: "+1(470)902-1657  or +919845309776",
  description: "Reach out to me and I'll reply the moment I'm available!",
  // creat an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_mmvjqdm",
  YOUR_TEMPLATE_ID: "template_2zd386r",
  YOUR_USER_ID: "Cl6GPvuogW15ZrYDx",
};

const socialprofils = {
  github: "https://github.com/Some1somewhere",
  linkedin: "https://linkedin.com/in/dhruv-k-shetty",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};