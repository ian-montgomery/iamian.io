import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ian Arthur Montgomery | Full Stack Developer',
  lang: 'en', // e.g: en, es, fr, jp
  description: "Welcome to Ian Arthur Montgomery's portfolio", 
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Ian',
  subtitle: "and I'm a full stack developer.",
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'EDA_Graduation_2020-157.JPG',
  paragraphOne: 'I used to sell vegetables, and now I solve problems with computers.',
  paragraphTwo: "With over ten years of management experience tackling Organic retail's challenges, I am now a full stack developer who wants to help you tackle your challenges and make software that is a pleasure to use.",
  paragraphThree: "Let's work together!",
  resume: 'https://nx4656.your-storageshare.de/s/kjQRzZaDJ8SnLrK', // if no resume, the button will not show up
  cta: 'Contact me'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'leaf-it-to-me.png',
    title: 'Leaf It To Me',
    info: 'A plant care app. Want to keep track of how to take care of your family of house plants? Leaf it to us',
    info2: '',
    url: 'https://leaf-it-to-me.herokuapp.com/',
    repo: 'https://github.com/ian-montgomery/Leaf-it-to-me',
  },
  {
    id: nanoid(),
    img: 'EDA_Graduation_2020-369.JPG',
    title: 'My GitHub Repo',
    info: 'At Enspiral Dev Academy, I worked on many small projects in groups with other students. We were given one day to come up with an app idea, then plan, develop, launch and present it to the larger cohort each week. Using Agile development practices, we learned to work quickly and effectively to produce web apps.',
    info2: 'Click through to my GitHub repo so see some of the source code from the projects I worked on.',
    url: 'https://github.com/ian-montgomery?tab=repositories',
    repo: 'https://github.com/ian-montgomery?tab=repositories',
  },
];

// CONTACT DATA
export const contactData = {
  cta1: "Let's work on something togther!",
  cta2: "Or fill out the contact form below",
  btnEmail: 'Send me an email',
  btnContact: 'Submit',
  email: 'ianmontgomery@posteo.net',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ian-montgomery/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ian-montgomery',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
