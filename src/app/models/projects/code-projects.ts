import { Project } from './project';

export const ListOfCodeProjects: Project[] = [
  {
    heading: 'Bullish Bay Chatbot',
    typeOfWork: 'UX Design + Node.js Development',
    description:
      "With the use of NodeJS, Discord's public API and Discord's NPM package, I created a chatbot users can interact with in multiple Discord servers. The bot can provide the latest news stories on Wall Street or display the current price information based on a company stock ticker. The application is containerized using Docker and deploys automatically to my personal hypervisor.",
    asset: '../../../assets/home/projects/bbay-discord.jpg',
    subDescription: 'Developing a financial Discord bot for users to receive the latest stock market news',
    assetAlt: 'Bullish Bay logo with a combination of the Discord logo.',
    demoUrl: 'https://github.com/mikedelgaudio/Bullish-Bay-Discord-Bot',
  },
  {
    heading: 'WeatherFlash',
    typeOfWork: 'UX/UI Design + Front-End Development',
    description:
      "This project is based purely on the technical stack of NextJS, React, and React Hooks. Utilzing an external API and the browser's geolocation, the app will give a minimalistic snapshot of the current weather conditions in your area. The application is containerized using Docker and deploys automatically to my personal hypervisor.",
    asset: '../../../assets/home/projects/weatherflash.jpg',
    subDescription: 'Designing and developing a React geolocation weather app',
    assetAlt: 'Weather Flash Geolocation Demo View Snippet',
    demoUrl: 'https://weatherflash.delgaudiomike.com',
  },
  {
    heading: 'Bullish Bay',
    typeOfWork: 'UX/UI Design + Front-End Development',
    description:
      'Created a responsive website to access any given stock by pulling financial data from company SEC Filings. Through the use of an API, financial data is called for, then used a variety of calculations to produce a score.',
    asset: '../../../assets/home/projects/bbay.jpg',
    subDescription:
      'Designing and developing a Robinhood inspired Angular stock market watchlist and automated advisor web app',
    assetAlt: 'Bullish Bay logo',
    demoUrl: 'https://bullishbay.delgaudiomike.com',
  },
  {
    heading: 'Neu',
    typeOfWork: 'UX/UI Design + Front-End Development',
    description: '',
    asset: '../../../assets/home/projects/neu.jpg',
    subDescription: 'Designing and developing a simplified Pomodoro timer with CSS themes',
    assetAlt: 'Neu logo clock',
    demoUrl: 'https://neu.delgaudiomike.com',
  },
  {
    heading: 'Design Portfolio',
    typeOfWork: 'UX/UI Design',
    description: '',
    asset: '../../../assets/home/projects/photoshop.jpg',
    subDescription: 'Designing numerous miscellaneous graphics and user interfaces',
    assetAlt: 'Adobe Photoshop, Xd, and Creative Cloud logos',
    demoUrl: 'https://www.behance.net/gallery/104849725/Photoshop-Work',
  },
  {
    heading: 'Medium Blog',
    typeOfWork: 'Information Tutorial Guides',
    description: '',
    asset: '../../../assets/home/projects/medium.jpg',
    subDescription: 'Publishing blog posts with guides on web performance and security',
    assetAlt: 'Medium.com three dot logo',
    demoUrl: 'https://mikedelgaudio.medium.com/',
  },
];
