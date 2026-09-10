export interface SocialLink {
  id: string;
  name: string;
  url: string;
  displayValue: string;
  icon: string;
  description: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/aj49/",
    displayValue: "linkedin.com/in/aj49",
    icon: "Linkedin",
    description: "Connect professionally for DFIR, research, and cybersecurity inquiries"
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/aslamxsthets",
    displayValue: "github.com/aslamxsthets",
    icon: "Github",
    description: "Explore security repositories, lab scripts, and open-source code"
  },
  {
    id: "instagram",
    name: "Instagram (Writing)",
    url: "https://instagram.com/_.mi.amor.fio",
    displayValue: "@_.mi.amor.fio",
    icon: "Instagram",
    description: "Follow poetry, creative writing, and reflective logs"
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:aslamjaveed1827@gmail.com",
    displayValue: "aslamjaveed1827@gmail.com",
    icon: "Mail",
    description: "Direct email contact for academic and professional communications"
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+919025812913",
    displayValue: "+91 90258 12913",
    icon: "Phone",
    description: "Direct telephone line for formal calls and verifications"
  }
];
