import { Project } from "./project";

export const ListOfCodeProjects: Project[] = [
  {
    heading: "DelGaudioMike_v2",
    description:
      "This project is the one you are currently viewing, the second generation of my personal portfolio website. It is based upon the Angular 10 framework and utilizes SCSS, RxJS, and the continuous deployment methodology. This was done with Docker containers and GitHub Action automated workflows where the repository is located.",
    asset: "../../../assets/code-projects/delgaudiomike_v2.jpg",
    assetAlt: "Bullish Bay Desktop View GIF",
    srcUrl: "https://github.com/mikedelgaudio/delgaudiomike.com_v2",
  },
  {
    heading: "DelGaudioMike",
    description:
      "This is my first personal portfolio website I developed initially from basic HTML, CSS, and JavaScript. It has evolved over time since 2018 and was the previous iteration of my website. This project eventually taught me the beginning of dynamic web programming with PHP and CSS libraries such as Bootstrap.",
    asset: "../../../assets/code-projects/delgaudiomike.jpg",
    assetAlt: "Bullish Bay Desktop View GIF",
    srcUrl: "https://github.com/mikedelgaudio/delgaudiomike.com",
  },
  {
    heading: "Bullish Bay",
    description:
      "Created a responsive website with roommate to access any given stock by pulling financial data from company SEC Filings. Through the use of an API, financial data is called for, then used a variety of calculations to produce a score.",
    asset: "../../../assets/code-projects/desktop_bullish_bay.gif",
    assetAlt: "Bullish Bay Desktop View GIF",
    demoUrl: "https://bullishbay.com",
  },
];
