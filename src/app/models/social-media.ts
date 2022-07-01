export interface SocialMedia {
  name: string;
  link: string;
  icon?: string;
  iconAlt?: string;
}

export const ListOfSocialMedia: SocialMedia[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/mikedelgaudio',
    icon: '../../assets/icons/github-alt-brands.svg',
    iconAlt: "An icon of the GitHub logo that links to Mike's GitHub.",
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/michael-delgaudio/',
    icon: '../../assets/icons/linkedin-in-brands.svg',
    iconAlt: "An icon of the LinkedIn logo that links to Mike's LinkedIn.",
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/c/MikeDelGaudio',
    icon: '../../assets/icons/youtube-brands.svg',
    iconAlt: "An icon of the YouTube logo that links to Mike's YouTube.",
  },
  {
    name: 'Blog',
    link: 'https://blog.delgaudio.dev/',
    icon: '../../assets/icons/blog-solid.svg',
    iconAlt: "Mike DelGaudio's personal blog",
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/DelgaudioMike',
    icon: '../../assets/icons/twitter-brands.svg',
    iconAlt: "An icon of the Twitter logo that links to Mike's Twitter.",
  },
];
