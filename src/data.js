import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'I am Ian | Full Stack Developer',
  lang: 'en', // e.g: en, es, fr, jp
  description: "I am Ian and this is my portfolio",
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ',
  name: 'Ian.',
  subtitle: 'I am a full stack developer.',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'EDA_Graduation_2020-157.JPG',
  paragraphOne: "I am Ian, a full stack developer with heaps of management experience.",
  paragraphTwo: "I started my career working in tech and media but then moved to New Zealand and spent six years managing a flagship Organic supermarket.",
  paragraphThree: "Through my experience in Organics and all the challenges we face in food systems, I discovered I have a knack and passion for problem-solving. Committed to using my skills to work in a dynamic and exciting field that allows me to tackle all kinds of new problems, big and small, I have transitioned back into tech with a lot more management and business experience under my belt.",
  paragraphFour:"Let's work on something together",
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
    title: 'My GitHub',
    info: 'Enspiral Dev Academy is an intensive full-immersion bootcamp modelling an apprenticeship with over 700 hours of training as a full stack web developer. Practical project-based experience building web applications using various technologies. Check out my github to see some of the work we did.',
    info2: 'Click through for some source code.',
    url: 'https://github.com/ian-montgomery?tab=repositories',
    repo: 'https://github.com/ian-montgomery?tab=repositories',
  },
];

// CONTACT DATA
export const contactData = {
  cta1: "Let's work on something togther",
  cta2: "Or fill out the contact form below",
  btnEmail: 'Send me an email',
  btnContact: 'Submit',
  email: 'hello@iamian.io',
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
