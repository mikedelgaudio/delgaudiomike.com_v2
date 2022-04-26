import { Project } from './project';

export const ListOfCodeProjects: Project[] = [
  {
    heading: 'WeatherFlash',
    typeOfWork: 'Next.js Full Stack Development',
    description:
      "Use of an external API and the browser's geolocation, the app will give a minimalistic snapshot of the current weather conditions in your area. The application is containerized using Docker and deploys automatically to my personal hypervisor.",
    asset: '../../../assets/home/projects/weatherflash.jpg',
    subDescription: 'Developed a Next.js geolocation weather app',
    assetAlt: 'Weather Flash Geolocation Demo View Snippet',
    demoUrl: 'https://weatherflash.delgaudio.dev',
  },
  {
    heading: 'Blog',
    typeOfWork: 'Hugo Front-End Development',
    description: '',
    asset: '../../../assets/home/projects/blog.png',
    subDescription: 'Publishing blog posts with guides on web performance and my home lab',
    assetAlt: 'Feather icon',
    demoUrl: 'https://blog.delgaudio.dev',
  },
  {
    heading: 'Tipsy',
    typeOfWork: 'React and Mobx Front-End Development',
    description: '',
    asset: '../../../assets/home/projects/tipsy.jpg',
    subDescription:
      'Add the items from your receipt and determine how much each person owes you with tip and tax included.',
    assetAlt: 'Two message bubbles with dollar signs',
    demoUrl: 'https://tipsy.delgaudio.dev',
  },
  {
    heading: 'Bullish Bay',
    typeOfWork: 'Express API and Angular Front-End Development',
    description:
      'Created a responsive website to access any given stock by pulling financial data from company SEC Filings. Through the use of an API, financial data is called for, then used a variety of calculations to produce a score.',
    asset: '../../../assets/home/projects/bbay.jpg',
    subDescription: 'Developed a Robinhood inspired Angular stock market watchlist and automated advisor web app',
    assetAlt: 'Bullish Bay logo',
    demoUrl: 'https://bullishbay.delgaudio.dev',
  },
  {
    heading: 'Neu',
    typeOfWork: 'React Front-End Development',
    description: '',
    asset: '../../../assets/home/projects/neu.jpg',
    subDescription: 'Developed a simplified clock screensaver with CSS themes',
    assetAlt: 'Neu logo clock',
    demoUrl: 'https://neu.delgaudio.dev',
  },
  {
    heading: 'Bullish Bay Chatbot',
    typeOfWork: 'Node.js Development',
    description:
      'A discord chatbot users can interact with in multiple Discord servers. The bot can provide the latest news stories on Wall Street or display the current price information based on a company stock ticker. The application is containerized using Docker and deploys automatically to my personal hypervisor.',
    asset: '../../../assets/home/projects/bbay-discord.jpg',
    subDescription: 'Developed a financial Discord bot for users to receive the latest stock market news',
    assetAlt: 'Bullish Bay logo with a combination of the Discord logo.',
    demoUrl: 'https://github.com/mikedelgaudio/Bullish-Bay-Discord-Bot',
  },
];
