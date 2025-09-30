import { IconAward, IconBriefcase, IconCode, IconUsers } from '@tabler/icons-react';
import type { Project, Experience } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enhanced Account Receivables Management System',
    description: 'A web-based application for internal use to streamline the management of docket cases, collection tasks, and receivable monitoring from registered individuals and businesses with outstanding tax obligations.',
    image: '/public/arms_project.png',
    tags: ['VUE.JS', '.NET', 'MySQL'],
    liveUrl: '/maintenance',
    codeUrl: '/maintenance'
  },
  {
    id: '2',
    title: 'Financial Management Information System',
    description: 'A Web-based application for Metropolitan Water & Sewerage System to streamline financial management Information Process',
    image: '/public/fmis_project.png',
    tags: ['React.ts', '.NET', 'MSSQL'],
    liveUrl: '/maintenance',
    codeUrl: '/maintenance'
  },
  {
    id: '3',
    title: 'Weather API',
    description: 'A RESTful API for fetching weather data for multiple cities using OpenWeatherMap API.',
    image: '',
    tags: ['.NET', 'OpenWeather API'],
    liveUrl: '/maintenance',
    codeUrl: 'https://github.com/alfredo0021/WeatherWebServices'
  },
  {
    id: '4',
    title: 'Window Services',
    description: '.NET Core Windows Service that watches Folder1, moves new files to Folder2, and logs to Event Viewer plus a rolling log file.',
    image: '',
    tags: ['.NET', 'Event Viewer', 'Rolling Log File'],
    liveUrl: '/maintenance',
    codeUrl: 'https://github.com/alfredo0021/WindowService'
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Simplevia Technologies Inc.',
    period: ' 2023 - Present',
    description: 'I specialize in backend development, business analysis, and database administration — helping organizations streamline processes and deliver reliable software solutions..',
    achievements: [
      'Designed and deployed API modules in .NET 8.0 using modular architecture, enhancing scalability and maintainability',
    'Built a centralized API response and logging system, improving auditability and accelerating issue resolution',
    'Developed reusable error-handling and validation classes, reducing downtime and improving system stability',
    'Optimized SQL Server stored procedures with parameterized queries, boosting performance and strengthening security',
    'Collaborated with BA, front-end, and QA teams to deliver sprint features with high acceptance and minimal rework',
    'Introduced coding guidelines and Git workflows, improving collaboration and onboarding speed',
    'Mapped business workflows with UML and wireflows, reducing development rework and clarifying requirements',
    'Gathered and prioritized client requirements, enabling delivery of high-priority features on time',
    'Created interactive performance reports, improving visibility and decision-making for teams',
    'Coordinated UAT and supported end-users, ensuring smooth pilot launches with strong approval'
    ]
  },
  {
    id: '2',
    title: 'Service Crew',
    company: 'McDonalds',
    period: '2019 - 2022',
    description: 'Customer-focused professional with expertise in enhancing customer experiences and supporting team growth through crew training.',
    achievements: [
      'Delivered friendly and efficient customer service in a fast-paced environment',
      'Trained and mentored new employees on operations, service quality, and safety standards',
      'Collaborated with coworkers to maintain cleanliness, uphold safety compliance, and consistently meet quality expectations',
      'Recognized for punctuality, adaptability, and strong team communication during high-volume shifts',
      'Met daily goals in hourly sales while maintaining accurate cash handling',
      'Efficiently processed orders and transactions in a fast-paced environment'
    ]
  }
];

export const skills = [
  'JavaScript', 'React.js', 'Basic Type Script',
  'Dotnet', 'C#', 'Java', 'Python', 
  'T-SQL', 'SQL', 'SQL Server', 'MySQL'
];

export const quickFacts = [
  {
    icon: IconCode,
    title: '2+ Years',
    description: 'Software Engineering Experience',
  },
  {
    icon: IconBriefcase,
    title: '4+ Years',
    description: 'Other Work Field Experience',
  },
  {
    icon: IconUsers,
    title: '2 Teams',
    description: 'Worked on Collaborative Projects',
  },
  {
    icon: IconAward,
    title: '3 Awards',
    description: 'Industry Recognition',
  }
];
