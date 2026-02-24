import { IconAward, IconBriefcase, IconCode, IconUsers } from '@tabler/icons-react';
import type { Project, Experience, Education } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Enhanced Account Receivables Management System',
    description: 'A web-based application for internal use to streamline the management of docket cases, collection tasks, and receivable monitoring from registered individuals and businesses with outstanding tax obligations.',
    images: ['/public/arms_project.png', '/public/arms_project-2.png'],
    tags: ['VUE.JS', '.NET', 'MySQL'],
    liveUrl: '/maintenance',
    codeUrl: '/maintenance'
  },
  {
    id: '2',
    title: 'Financial Management Information System',
    description: 'A Web-based application for Metropolitan Water & Sewerage System to streamline financial management Information Process',
    images: ['/public/fmis_project.png', '/public/fmis_project-2.png'],
    tags: ['React.ts', '.NET', 'MSSQL'],
    liveUrl: '/maintenance',
    codeUrl: '/maintenance'
  },
  {
    id: '3',
    title: 'MKT-Group Web Application',
    description: 'A web-based application for MKT-Group to streamline the management of their business. It is a platform for MKT-Group to manage their business and customers.',
    images: ['/public/mktgroup-1.png', '/public/mktgroup-2.png', '/public/mktgroup-3.png', '/public/mktgroup-4.png'],
    tags: ['.NET', 'React.ts', 'MSSQL'],
    liveUrl: '/maintenance',
    codeUrl: '/maintenance'
  },
  {
    id: '4',
    title: 'OMMS-Next',
    description: 'A web-based platform for OMMS-Next that serves as an accounting and merchandising system, helping manage sales, customers, and business operations in a streamlined way.',
    images: ['/public/omms-1.png', '/public/omms-2.png', '/public/omms-3.png'],
    tags: ['.NET', 'React.ts', 'MSSQL'],
    liveUrl: '/maintenance',
    codeUrl: '/maintenance'
  },
];

export const experiences: Experience[] = [
  {
    id: '4',
    title: 'API Developer',
    company: 'Information Professionals, Inc.',
    period: ' 2025 - Present',
    description: 'I was an API developer at Information Professionals, Inc.',
    achievements: [
      'Created the API project/module from scratch and deployed it',
      'Fixed and debugged the API issues and errors',
      'Collaborated with BA, front-end, and QA teams to deliver sprint features with high acceptance and minimal rework',
      'Debugged the API issues and errors using Postman',
    ]
  },
  {
    id: '3',
    title: 'Software Engineer',
    company: 'Simplevia Technologies Inc.',
    period: ' 2023 - 2025',
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
    title: 'Rider and Delivery Assistant',
    company: 'Lalamove',
    period: ' 2022 - 2023',
    description: 'I was a rider and delivery assistant at Lalamove, a delivery service that allows users to request a ride and delivery service from their phone.',
    achievements: [
      'Delivered packages and goods to customers in a timely and efficient manner',
      'Maintained a clean and organized delivery vehicle',
      'Communicated with customers to ensure delivery satisfaction',
      'Handled cash transactions and provided change to customers',
      'Maintained a safe and secure delivery environment'
    ]
  },
  {
    id: '1',
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

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    school: 'Pamantasan ng Lungsod ng Maynila',
    location: 'Manila',
    period: '2020 - 2025',
  },
];

export const skills = [
  'JavaScript', 'React.js', 'Basic Type Script',
  'Dotnet', 'C#', 'Java', 'Python', 
  'T-SQL', 'SQL', 'SQL Server', 'MySQL'
];

export const quickFacts = [
  {
    icon: IconCode,
    startDate: new Date(2023, 7),
    description: 'Software Engineering Experience',
  },
  {
    icon: IconBriefcase,
    startDate: new Date(2019, 8),
    description: 'Other Work Field Experience',
  },
  {
    icon: IconUsers,
    title: '5 Teams',
    description: 'Worked on Collaborative Projects',
  },
  {
    icon: IconAward,
    title: '3 Awards',
    description: 'Industry Recognition',
  }
];
