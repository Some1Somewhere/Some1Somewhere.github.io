const logotext = "DKS";
const meta = {
  title: "Dhruv Shetty | Product Engineer",
  description: "Dhruv Shetty is a product engineer and the founding engineer at TrueMark. Empowering educators to foster critical thinking with AI.",
};

const introdata = {
  title: "I’m Dhruv Shetty",
  description1: "Founding Engineer at TrueMark. Empowering educators to foster critical thinking with AI.",
  beats: ["Understand the user.", "Find the real problem.", "Build the thing that fixes it."],
};

// Hero growth ticker. Pyramid client counts are rounded; TrueMark numbers are from product analytics.
const growthStops = [
  { year: "2020", value: 4, unit: "clients", label: "Pyramid Developers, year one" },
  { year: "2021", value: 12, unit: "clients", label: "Pyramid Developers" },
  { year: "2022", value: 20, unit: "clients", label: "Pyramid Developers" },
  { year: "2023", value: 50, unit: "clients", label: "Pyramid Developers, 40+ products shipped" },
  { year: "2024", value: 100, unit: "students", label: "TrueMark, 2 teachers" },
  { year: "2025", value: 8000, unit: "students", label: "TrueMark, 40 schools" },
  { year: "2026", value: 45000, unit: "students", label: "TrueMark, 2,300 teachers, 229 schools" },
];

const dataabout = {
  title: "Who am I?",
  aboutme: [
    "I'm the founding engineer at TrueMark, and the only engineer on the team. We give teachers a writing platform where AI guides students instead of writing for them, and shows teachers how each essay came together.",
    "I joined when 2 teachers were using it. Two years later it's 2,300+ teachers and 45,000+ students across 229 schools, and the code in between is mine: the student editor, AI grading and feedback, the 7 LMS integrations schools need before they can buy, and everything that keeps it up on exam day.",
    "Before TrueMark I co-founded Snacc, an AI calorie tracker that reached ~1,000 users, and ran Pyramid Developers for five years, a studio of up to 30 engineers that shipped 40+ products for startups. I have a master's in Computing, Entrepreneurship and Innovation from NYU, where I also TA'd DevOps and Agile Methodologies.",
  ],
};

const worktimeline = [
  {
    jobtitle: "Founding Engineer",
    where: "Truemark - AI for Education",
    date: "September 2024 - Present",
  },
  {
    jobtitle: "Co-Founder",
    where: "Snacc",
    date: "February 2024 - September 2024",
  },
  {
    jobtitle: "Founder & CEO",
    where: "Pyramid Developers",
    date: "January 2020 - September 2024",
  },
  {
    jobtitle: "Teaching Assistant",
    where: "New York University",
    date: "January 2023 - December 2023",
  },
  {
    jobtitle: "Research and Development Engineer",
    where: "Hewlett Packard Enterprise",
    date: "January 2022 - June 2022",
  },
  // {
  //   jobtitle: "Engineering Intern",
  //   where: "Riskcovry",
  //   date: "NOT SURE",
  // },
];

const skills = [
  { name: "Python", badgeUrl: "https://img.shields.io/badge/Python-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white" },
  { name: "TypeScript", badgeUrl: "https://img.shields.io/badge/TypeScript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white" },
  { name: "React", badgeUrl: "https://img.shields.io/badge/React-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=white" },
  { name: "Next.js", badgeUrl: "https://img.shields.io/badge/Next%2Ejs-%23000000.svg?&style=for-the-badge&logo=nextdotjs&logoColor=white" },
  { name: "FastAPI", badgeUrl: "https://img.shields.io/badge/FastAPI-%23009688.svg?&style=for-the-badge&logo=fastapi&logoColor=white" },
  { name: "Flutter", badgeUrl: "https://img.shields.io/badge/Flutter-%2302569B.svg?&style=for-the-badge&logo=flutter&logoColor=white" },
  { name: "Google Cloud", badgeUrl: "https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?&style=for-the-badge&logo=googlecloud&logoColor=white" },
  { name: "Kubernetes", badgeUrl: "https://img.shields.io/badge/Kubernetes-%23326CE5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white" },
  { name: "Docker", badgeUrl: "https://img.shields.io/badge/Docker-%232496ED.svg?&style=for-the-badge&logo=docker&logoColor=white" },
  { name: "Firebase", badgeUrl: "https://img.shields.io/badge/Firebase-%23FFCA28.svg?&style=for-the-badge&logo=firebase&logoColor=white" },
  { name: "PostgreSQL", badgeUrl: "https://img.shields.io/badge/PostgreSQL-%23336791.svg?&style=for-the-badge&logo=postgresql&logoColor=white" },
  { name: "GitHub Actions", badgeUrl: "https://img.shields.io/badge/GitHub%20Actions-%232088FF.svg?&style=for-the-badge&logo=githubactions&logoColor=white" },
  { name: "Sentry", badgeUrl: "https://img.shields.io/badge/Sentry-%23362D59.svg?&style=for-the-badge&logo=sentry&logoColor=white" },
  { name: "PostHog", badgeUrl: "https://img.shields.io/badge/PostHog-%231D4AFF.svg?&style=for-the-badge&logo=posthog&logoColor=white" },
  { name: "Prometheus", badgeUrl: "https://img.shields.io/badge/Prometheus-%23E6522C.svg?&style=for-the-badge&logo=prometheus&logoColor=white" },
  { name: "Langfuse", badgeUrl: "https://img.shields.io/badge/Langfuse-%23000000.svg?&style=for-the-badge&logo=langfuse&logoColor=white" },
  { name: "Intercom", badgeUrl: "https://img.shields.io/badge/Intercom-%236AFDEF.svg?&style=for-the-badge&logo=intercom&logoColor=white" },
  { name: "OpenAI", badgeUrl: "https://img.shields.io/badge/OpenAI-%23412991.svg?&style=for-the-badge&logo=openai&logoColor=white" },
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
      "Backend and Midjourney integration via a Discord bot, so a keyword becomes 25 to 30 marketing images.",
      "Shipped front end and deployment.",
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
      "Three Flutter apps (user, partner, admin) built end to end for segregated waste pickup paid by UPI.",
      "Ran in production for 16 months; scaled and iterated on client requests.",
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
      "Flutter app on top of Enerman's solar management stack over GraphQL.",
      "Shipped to Android and iOS.",
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
      "AI calorie tracker in Flutter: photograph a meal, get calories and nutrients from OpenAI vision.",
      "Beta in 2 months, ~1,000 users, $30,000 raised.",
    ],
    isAppScreenshot: true
  },
  {
    img: require("./assets/images/portfolio/lucio.png"),
    projectTitle: "Lucio",
    description: "Nightlife Recommendation Platform using Spotify Data",
    info: "Lucio is a platform that analyzes users' music preferences by connecting to their Spotify accounts and matches them with nightclubs, bars, and music venues that feature music and vibes they'll love. It also provides key information like reviews, cost of entry, and dress code to help users make informed decisions.",
    scope: [
      "Matches Spotify listening history to NYC bars and venues.",
      "Customer discovery with 15 venues; Spotify integration; ideation to market-ready.",
    ],
    isAppScreenshot: true
  },
  {
    img: require("./assets/images/portfolio/happyours.png"),
    projectTitle: "HappyOurs",
    description: "Help you discover the best bars and pubs in NYC",
    info: "HappyOurs is a mobile application that provides streamlined information about drinking establishments for people who are either new to the city or want to try out new places, making the process more efficient than existing methods like Google Maps or Yelp Reviews.",
    scope: [
      "Scraped and organised happy-hour data for NYC bars.",
      "User interviews to UI to App Store and Play Store.",
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
      "No-code RAG chatbot builder: add knowledge sources, embed with one script tag.",
      "AWS ECS with CI/CD; launched with a pilot client.",
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
      "WNet, a dual-UNet model that predicts the segmentation mask 11 frames ahead.",
      "2nd place in Yann LeCun's class challenge (0.442 Jaccard).",
    ],
    isAppScreenshot: false
  }
];



const contactConfig = {
  YOUR_EMAIL: "dhruvshetty.business@gmail.com",
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
  growthStops,
};