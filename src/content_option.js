const logotext = "DKS";
const meta = {
  title: "Dhruv Shetty",
  description: "Dhruv Shetty is a Product Manager and Full Stack Developer who loves building impactful products",
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
  description2: "Love making life a little bit easier, one innovation at a time",
};

const dataabout = {
  title: "Who am I?",
  aboutme: "Having recently graduated from New York University with a Master of Science in Computing, Entrepreneurship, and Innovation, I am now channeling my expertise into building Snacc, an AI-enabled wellness tracker. My passion for problem-solving inspires me to develop innovative solutions that enhance everyday life. With a knack for rapidly acquiring new skills, I have successfully led multiple projects both independently and through my work at Pyramid Developers, which fosters a learning and development platform for students. As a former Teaching Assistant for the course 'DevOps and Agile Methodologies' at NYU, I bring a robust understanding of efficient software development practices to my current endeavor. At Snacc, I am committed to driving health and wellness forward through cutting-edge technology, aiming to improve the quality of life for our users."};
const worktimeline = [
  {
    jobtitle: "Co-Founder",
    where: "Snacc",
    date: "Febuary 2024 - Present",
  },
  {
    jobtitle: "Teaching Assistant",
    where: "New York University",
    date: "January 2023 - December 2023",
  }, {
    jobtitle: "Product Manager",
    where: "Pyramid Developers",
    date: "January 2020 - Present",
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
    name: "Go",
    badgeUrl: "https://img.shields.io/badge/Go-blue.svg?&style=for-the-badge&logo=go&logoColor=white"
  }
];

// Portfolio Projects
const pyramidProjects = [
  {
    img: require("./assets/images/portfolio/athena.png"),
    projectTitle: "Athena Gen",
    description: "AI-powered Ad Creation Platform",
    link: "https://www.athenagen.ai/",
    info: "Athena is an AI-based Marketing Image Generator that allows users to generate 25-30 high-quality marketing images based on a provided concept or keyword. Users can also add templates and view previously generated results.",
    scope: [
      "Designed and implemented backend architecture.",
      "Integrated with Midjourney through a Discord bot.",
      "Managed UI/UX design.",
      "Led Front-End Development, Bug Testing, and Deployment."
    ],
    isAppScreenshot: false
  },
  {
    img: require("./assets/images/portfolio/trashtocash.png"),
    projectTitle: "Trash To Cash",
    description: "User, Partner, and Admin Applications for a Waste Management Company",
    link: "https://play.google.com/store/apps/details?id=com.pyramid.trashtocash",
    info: "Trash to Cash is a waste management solution in Bangalore, allowing users to book a partner to collect segregated waste in exchange for UPI compensation.",
    scope: [
      "Shaped entire architecture for the app.",
      "Built all three apps (User, Partner, Admin) end-to-end.",
      "Led scaling and iterative development based on client needs.",
      "Managed UI/UX design.",
      "Handled Front-End Development, Server Setup, Maintenance, and Deployment on Android and iOS."
    ],
    isAppScreenshot: true
  },
  {
    img: require("./assets/images/portfolio/enerman.png"),
    projectTitle: "Enerman",
    description: "Solar Panel Information Dashboard",
    link: "https://play.google.com/store/apps/details?id=com.pyramid.enerman",
    info: "Enerman Technologies provides solutions for solar energy management. This app helps owners track power generation and energy collection over different periods.",
    scope: [
      "Led product development.",
      "Integrated app with Enerman's solar energy management technologies using GraphQL.",
      "Managed UI/UX design.",
      "Handled Front-End Development, Bug Testing, and Deployment on Android and iOS."
    ],
    isAppScreenshot: true
  }
];

const otherProjects = [
  {
    img: require("./assets/images/portfolio/snacc.png"),
    projectTitle: "Snacc",
    description: "AI-powered Nutrition Guide and Wellness Tracker",
    link: "https://snacc.fit/get",
    info: "Snacc is a nutrition guide that uses AI to help you manage your diet. You can take photos or describe your meals, and Snacc will quickly show you the nutritional details like calories and nutrients.",
    scope: [
      "Drove rapid development from concept to prototype.",
      "Achieved beta testing launch within two months.",
      "Secured $30,000 in initial funding.",
      "Led customer discovery phases.",
      "Enhanced user engagement by 30% and retention by 15%."
    ],
    isAppScreenshot: true
  },
  {
    img: require("./assets/images/portfolio/lucio.png"),
    projectTitle: "Lucio",
    description: "Nightlife Recommendation Platform using Spotify Data",
    info: "Lucio is a platform that analyzes users' music preferences by connecting to their Spotify accounts and matches them with nightclubs, bars, and music venues that feature music and vibes they'll love. It also provides key information like reviews, cost of entry, and dress code to help users make informed decisions.",
    scope: [
      "Led development from ideation to market-ready product.",
      "Handled user story creation and design.",
      "Conducted customer discovery with 15 NYC venues.",
      "Managed third-party integrations, including Spotify."
    ],
    isAppScreenshot: true
  },
  {
    img: require("./assets/images/portfolio/happyours.png"),
    projectTitle: "HappyOurs",
    description: "Help you discover the best bars and pubs in NYC",
    info: "HappyOurs is a mobile application that provides streamlined information about drinking establishments for people who are either new to the city or want to try out new places, making the process more efficient than existing methods like Google Maps or Yelp Reviews.",
    scope: [
      "Built the fully functional app.",
      "Scraped the internet for accurate information.",
      "Conducted user interviews to understand pain points.",
      "Managed development from UI/UX design to deployment on App Store and Play Store."
    ],
    isAppScreenshot: true
  },
  {
    img: require("./assets/images/portfolio/maigrate.png"),
    projectTitle: "Maigrate",
    description: "No Code Platform to Create AI Agents",
    link: "https://www.maigrate.com/",
    info: "Maigrate is a no-code AI platform that simplifies the integration of AI copilots into existing products, saving time, resources, and costs.",
    scope: [
      "Architected and launched the Minimum Viable Product.",
      "Boosted customer acquisition by 30% in the first quarter.",
      "Configured scalable AWS cloud computing environments.",
      "Achieved 99.99% uptime through continuous integration and deployment."
    ],
    isAppScreenshot: false
  },
  {
    img: "/collision-prediction/scores.png",
    projectTitle: "NYU's Deep Learning Collision Prediction Project",
    description: "Deep learning project for predicting collisions",
    link: "/collision-prediction",
    info: "The model takes 11 consecutive images of objects (varying shape, color, and material) moving on a smooth white surface. The model must predict the segmentation mask of the scene after another 11 frames. We used a dual UNet model (WNet) to predict object positions accurately.",
    scope: [
      "Developed 'WNet,' a dual UNet AI model for predictive semantic segmentation.",
      "Achieved 2nd place in NYU’s Machine Learning challenge with a 0.442 Jaccard index.",
      "Enhanced model accuracy using autoregressive techniques.",
      "Utilized HPC for efficient model running."
    ],
    isAppScreenshot: false
  }
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
  worktimeline,
  pyramidProjects,
  otherProjects,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};