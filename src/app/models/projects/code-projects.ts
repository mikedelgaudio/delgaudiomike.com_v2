import { Project } from "./project";

export const ListOfCodeProjects: Project[] = [
  {
    heading: "Bullish Bay Chatbot",
    description:
      "With the use of NodeJS, Discord's public API and Discord's NPM package, I created a chatbot users can interact with in multiple Discord servers. The bot can provide the latest news stories on Wall Street or display the current price information based on a company stock ticker. The application is containerized using Docker and deploys automatically to my personal hypervisor.",
    asset: "../../../assets/home/projects/bbay-discord.jpg",
    assetAlt: "Bullish Bay Discord Chat Bot Demo GIF",
    srcUrl: "https://github.com/mikedelgaudio/Bullish-Bay-Discord-Bot",
  },
  {
    heading: "WeatherFlash",
    description:
      "This project is based purely on the technical stack of NextJS, React, and React Hooks. Utilzing an external API and the browser's geolocation, the app will give a minimalistic snapshot of the current weather conditions in your area. The application is containerized using Docker and deploys automatically to my personal hypervisor.",
    asset: "../../../assets/home/projects/weatherflash.jpg",
    assetAlt: "Weather Flash Geolocation Demo View Image",
    srcUrl: "https://github.com/mikedelgaudio/WeatherFlash",
    demoUrl: "https://weatherflash.delgaudiomike.com",
  },
  {
    heading: "Bullish Bay",
    description:
      "Created a responsive website to access any given stock by pulling financial data from company SEC Filings. Through the use of an API, financial data is called for, then used a variety of calculations to produce a score.",
    asset: "../../../assets/home/projects/bbay.jpg",
    assetAlt: "Bullish Bay Desktop View GIF",
    demoUrl: "https://bullishbay.delgaudiomike.com",
  },
];
