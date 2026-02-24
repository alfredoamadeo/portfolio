import {
  IconMail,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const profileData = {
  avatarUrl: "ama_profile_enhanced.jpg",
  name: "Alfredo III Mendoza Amadeo",
  title: "Software Engineer",
  tagline: "Passionate about coding and exploring new technologies to create innovative solutions",
  contacts: [
    {
      icon: IconMail,
      content: "amadeoalfredo.dev@gmail.com",
      href: "mailto:amadeoalfredo.dev@gmail.com",
    },
    {
      icon: IconMapPin,
      content: "Manila, Philippines",
      latitude: 14.6042,
      longitude: 121.0245,
      href: "https://maps.google.com/?q=Manila,+Philippines",
    },
  ],
  socials: [
    { icon: IconBrandGithub, href: "https://github.com/alfredo0021" },
    { icon: IconBrandLinkedin, href: "https://linkedin.com/in/alfredo0021" },
    { icon: IconBrandX, href: "https://x.com/alfredo0021" },
  ],
  skills: ["React", "TypeScript", ".NET CORE", "SQL SERVER"],
  cvUrl: "cv_alfredo_M.pdf",
};
