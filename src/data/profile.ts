import type { SocialLinkItem } from '../types';

export const PROFILE = {
  fullName: 'Maaz Imran Pathan',
  shortName: 'Maaz Pathan',
  title: 'Aspiring Software Engineer & Freelance Web Developer',
  eyebrow: 'ASPIRING SOFTWARE ENGINEER · FREELANCE WEB DEVELOPER',
  tagline: 'Building ideas into digital experiences.',
  heroBio: "Hi, I'm Maaz Pathan. I'm an Information Technology student and freelance web developer, building modern websites and exploring full-stack development.",
  aboutParagraphs: [
    "I'm Maaz Imran Pathan, an Information Technology student at P P Savani University (PPSU), Gujarat, with a foundational background in Computer Engineering and a strong passion for software engineering.",
    "I believe the best way to master modern development is by building real digital products. Through freelance client projects, I have developed and deployed production-ready websites for businesses and organizations, managing everything from interface implementation to live deployment.",
    "Currently, I am strengthening my core computer science and programming foundations in Java and Data Structures while actively expanding into full-stack development with the MERN stack. My goal is to build scalable software solutions, collaborate with international teams, and continuously grow as an engineer."
  ],
  location: 'Surat, Gujarat, India',
  email: 'pathanmaaz142@gmail.com',
  availability: 'Open to Opportunities & Freelance Projects',
  stats: [
    { label: 'Client Websites Delivered', value: '3+' },
    { label: 'B.Tech IT (PPSU)', value: '2025–2028' },
    { label: 'Diploma Computer Engg', value: '2022–2025' },
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/maazpathan07',
      iconName: 'github',
      ariaLabel: "View Maaz Pathan's GitHub profile",
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/maazpathan/',
      iconName: 'linkedin',
      ariaLabel: "Connect with Maaz Pathan on LinkedIn",
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/p__maaz/',
      iconName: 'instagram',
      ariaLabel: "View Maaz Pathan's Instagram profile",
    },
    {
      name: 'Email',
      url: 'mailto:pathanmaaz142@gmail.com',
      iconName: 'mail',
      ariaLabel: 'Send an email directly to Maaz Pathan',
    },
  ] as SocialLinkItem[],
};
