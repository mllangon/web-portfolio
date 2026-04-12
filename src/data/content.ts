// ============================================================================
// PORTFOLIO CONTENT — Edit this file to update all site copy and data
// ============================================================================

export const siteConfig = {
  name: "Mario Llansó",
  fullName: "Mario Llansó González-Anleo",
  title: "Computer Engineering Student",
  url: "https://mariollansó.dev",
  description:
    "Portfolio of Mario Llansó González-Anleo — Computer Engineering student specializing in backend development, AI automation, and full-stack development.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Focus", href: "#ai-focus" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  greeting: "Hi, I'm",
  name: "Mario Llansó",
  tagline: "Computer Engineering Student | Backend, AI Automation & Full-Stack Development",
  description:
    "Building technical systems across backend development, automation workflows, and modern web technologies, with a growing focus on practical AI-driven solutions.",
  cta: {
    primary: { label: "Get in touch", href: "#contact" },
    secondary: { label: "View projects", href: "#projects" },
  },
};

export const about = {
  heading: "About",
  lead: "Third-year Computer Engineering student at Universidad Alfonso X El Sabio in Madrid.",
  paragraphs: [
    "My work focuses on building technical foundations across backend development, automation workflows, and full-stack web applications.",
    "I am particularly interested in how intelligent systems and automation can improve operational efficiency and software workflows. My goal is to combine solid engineering principles with practical implementations that solve real problems.",
  ],
  highlights: [
    { label: "Year", value: "3rd" },
    { label: "Focus", value: "Backend & AI" },
    { label: "Based in", value: "Madrid" },
  ],
};

export const skills = {
  heading: "Skills & Technologies",
  categories: [
    {
      title: "Programming Languages",
      items: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"],
    },
    {
      title: "Frameworks & Technologies",
      items: ["React", "Next.js", "Node.js", "Spring"],
    },
    {
      title: "Tools & Systems",
      items: ["APIs", "n8n", "Workflow Automation"],
    },
  ],
};

// ============================================================================
// PROJECTS — Edit here to add/remove/update project cards
//
// Each project appears as a stacked card in the CardSwap component.
// Fields:
//   title       — Project name
//   description — 1-2 sentence summary of what it does
//   tags        — Tech stack tags shown on the card
//   github      — GitHub repo URL (leave "" if private/unavailable)
//   live        — Live demo URL (leave "" if not deployed)
//   number      — Display number shown in card header (e.g. "01/03")
// ============================================================================
export const projects = {
  heading: "Selected Projects",
  subtitle: "Real projects I've built across automation, web development, and network infrastructure.",
  items: [
    {
      title: "AI Operations Inbox Agent",
      description:
        "Automates the processing of incoming emails by classifying messages, converting them into operational tasks, and notifying the appropriate responsible team member.",
      tags: ["n8n", "Gmail API", "Outlook API", "Google Sheets", "Slack API"],
      github: "",
      live: "",
      number: "01/03",
    },
    {
      title: "EV Charger Reservation System",
      description:
        "A web application that allows users to register, log in, view charging stations on an interactive map, and reserve electric vehicle charging points located at gas stations in Madrid.",
      tags: ["HTML5", "CSS3", "JavaScript", "Leaflet.js", "LocalStorage"],
      github: "",
      live: "",
      number: "02/03",
    },
    {
      title: "Smart City Network Infrastructure",
      description:
        "Design and implementation of a segmented smart-city network architecture using VLANs, secure routing, and simulated enterprise services to model a scalable and secure urban communication infrastructure.",
      tags: ["Cisco Packet Tracer", "VLAN", "IPv4/IPv6", "DHCP", "VPN", "ACL"],
      github: "",
      live: "",
      number: "03/03",
    },
  ],
};

export const aiFocus = {
  heading: "Current Focus",
  label: "AI & Workflow Automation",
  description:
    "Currently exploring practical applications of AI automation and workflow automation, particularly how automated systems can integrate with existing software infrastructures to improve efficiency.",
  areas: [
    {
      title: "AI Automation",
      description:
        "Exploring how intelligent systems can be applied to automate operational tasks, from email classification to decision-support workflows.",
      icon: "api",
    },
    {
      title: "Workflow Integration",
      description:
        "Building automated pipelines using tools like n8n that connect services, process data, and reduce manual work across software systems.",
      icon: "flow",
    },
    {
      title: "Full-Stack Development",
      description:
        "Continuing to develop frontend and full-stack development skills to build usable interfaces for technical systems.",
      icon: "prompt",
    },
  ],
};

export const education = {
  heading: "Education",
  items: [
    {
      degree: "B.Sc. Computer Engineering",
      institution: "Universidad Alfonso X El Sabio, Madrid",
      period: "2022 – Present",
      year: "3rd year",
      description:
        "Coursework in algorithms, data structures, operating systems, databases, software engineering, computer architecture, and network infrastructure.",
    },
  ],
};

export const contact = {
  heading: "Let's connect",
  description:
    "Open to internships, collaborations, and interesting conversations.",
  email: "llansoanleo.mario@email.com",
  links: {
    linkedin: "https://www.linkedin.com/in/mario-llansó-78a6433a8/",
    github: "https://github.com/mllangon",
    cv: "/cv-mario-llanso.pdf",
  },
};
