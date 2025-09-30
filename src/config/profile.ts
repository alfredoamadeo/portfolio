import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export const profileData = {
  avatarUrl: "ama_profile_enhanced.jpg",
  name: "Alfredo III Mendoza Amadeo",
  title: "Junior to Mid-level Web Developer",
  tagline: "Passionate about coding and exploring new technologies to create innovative solutions",
  contacts: [
    {
      icon: IconMail,
      content: "alfredoamadeo71@gmail.com",
      href: "mailto:alfredoamadeo71@gmail.com",
    },
    {
      icon: IconPhone,
      content: "+63 9762006526",
      href: "tel:+63976200652",
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
