
export interface JoblistProps {
  img_src: string;
  role: string;
  company: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  date: string;
  categories: string[];
}

export const jobs: JoblistProps[] = [
  {
    img_src: "/logos/google.png",
    role: "Frontend Developer",
    company: "Google",
    location: "Nairobi, Kenya",
    description:
      "Work with a cross-functional team to build intuitive UI components, optimize web performance, and deliver user-friendly experiences.",
    responsibilities: [
      "Develop new user-facing features using React.js and TypeScript",
      "Build reusable code and libraries for future use",
      "Optimize application for maximum speed and scalability",
      "Collaborate with other team members and stakeholders",
      "Ensure the technical feasibility of UI/UX designs"
    ],
    requirements: [
      "Education: BS/MS degree in Computer Science, Engineering or a related subject",
      "Experience: Proven work experience as a Front-end developer",
      "Technical Knowledge: Strong understanding of server-side CSS pre-processing platforms, such as LESS and SASS",
      "Proficiency: Proficient understanding of client-side scripting and JavaScript frameworks"
    ],
    skills: ["React", "TypeScript", "CSS", "Git", "Accessibility"],
    date: "Aug 15, 2023",
    categories: ["Engineering", "Full Time"]
  },
  {
    img_src: "/logos/microsoft.png",
    role: "Cloud Engineer",
    company: "Microsoft",
    location: "Kampala, Uganda",
    description:
      "Design and deploy cloud solutions on Azure, improve system reliability, and collaborate on scalable infrastructure.",
    responsibilities: [
      "Manage and monitor all installed systems and infrastructure",
      "Install, configure, test and maintain operating systems, application software and system management tools",
      "Proactively ensure the highest levels of systems and infrastructure availability",
      "Monitor and test application performance for potential bottlenecks",
      "Maintain security, backup, and redundancy strategies"
    ],
    requirements: [
      "Education: BS/MS degree in Computer Science, Engineering or a related subject",
      "System Administration: Proven working experience in installing, configuring and troubleshooting UNIX /Linux based environments",
      "Virtualization: Experience with virtualization and containerization (e.g., VMware, Virtual Box)",
      "Cloud Expertise: Experience with Cloud computing (specifically Azure)"
    ],
    skills: ["Azure", "Kubernetes", "Docker", "CI/CD", "Linux"],
    date: "Sep 01, 2023",
    categories: ["Engineering", "Cloud"]
  },
  {
    img_src: "/globe.svg",
    role: "Junior Full-Stack Developer",
    company: "Andela",
    location: "Remote",
    description:
      "Assist in building full-stack applications, maintain clean code, fix bugs, and participate in code reviews with senior developers.",
    responsibilities: [
      "Participate in the entire application lifecycle, focusing on coding and debugging",
      "Write clean code to develop functional web applications",
      "Troubleshoot and debug applications",
      "Perform UI tests to optimize performance",
      "Manage cutting-edge technologies to improve legacy applications"
    ],
    requirements: [
      "Experience: Proven work experience as a Back-end developer",
      "Core Concepts: In-depth understanding of the entire web development process (design, development and deployment)",
      "Languages: Hands on experience with programming languages like Java, Ruby, PHP and Python",
      "Soft Skills: Excellent analytical and time management skills"
    ],
    skills: ["JavaScript", "Node.js", "MongoDB", "Express", "React"],
    date: "Jul 20, 2023",
    categories: ["Remote", "Junior Level"]
  },
  {
    img_src: "/logos/safaricom.png",
    role: "Data Analyst Intern",
    company: "Safaricom",
    location: "Kigali, Rwanda",
    description:
      "Support the analytics team by preparing dashboards, analyzing datasets, and helping drive data-driven decisions.",
    responsibilities: [
      "Interpret data, analyze results using statistical techniques and provide ongoing reports",
      "Develop and implement databases, data collection systems, data analytics and other strategies that optimize statistical efficiency and quality",
      "Acquire data from primary or secondary data sources and maintain databases/data systems",
      "Identify, analyze, and interpret trends or patterns in complex data sets",
      "Filter and clean data by reviewing computer reports and printouts"
    ],
    requirements: [
      "Education: Current student or recent graduate in Mathematics, Economics, Computer Science, Information Management or Statistics",
      "Statistical Knowledge: Knowledge of statistics and experience using statistical packages for analyzing datasets (Excel, SPSS, SAS etc)",
      "Analytical Skills: Ability to collect, organize, analyze, and disseminate significant amounts of information with attention to detail and accuracy",
      "Reporting: Adept at queries, report writing and presenting findings"
    ],
    skills: ["Excel", "SQL", "PowerBI", "Python", "Statistics"],
    date: "Aug 10, 2023",
    categories: ["Internship", "Data"]
  }
];