import type { TimelineEvent } from '../types';

export const timeline: TimelineEvent[] = [
  {
    id: 'university-start',
    date: 'Sep 2019',
    title: 'Started Computer Science at Helwan University',
    description:
      'Enrolled in the Software Engineering major at the Faculty of Computers and Artificial Intelligence.',
    category: 'education',
  },
  {
    id: 'dressify',
    date: 'Sep 2022 – May 2023',
    title: 'Graduation project: Dressify recommendation engine',
    description:
      'Built the end-to-end ML pipeline for a fashion recommender — a two-tower deep neural network trained on 800K+ Amazon reviews.',
    category: 'project',
  },
  {
    id: 'graduation',
    date: 'Jun 2023',
    title: 'Graduated — B.Sc. Computer Science',
    description: 'GPA 3.63 / 4.0, Software Engineering major, Helwan University.',
    category: 'education',
  },
  {
    id: 'military',
    date: '2023 – 2025',
    title: 'Military service',
    description:
      'Completed mandatory military service in Egypt — a fixed national obligation, served after graduation before returning to full-time software engineering work.',
    category: 'military',
  },
  {
    id: 'skinet',
    date: 'Feb 2025 – Jun 2025',
    title: 'Skinet — pattern-focused e-commerce build',
    description:
      'Deliberately practiced Repository, Unit of Work, and Specification patterns on a realistic .NET 8 / Angular 18 project, picking backend engineering back up right after military service.',
    category: 'project',
  },
  {
    id: 'depi-start',
    date: 'Jun 2025',
    title: 'Joined DEPI — Full Stack Web Development',
    description:
      'Started the Digital Egypt Pioneers Initiative program to deepen production-grade backend and full-stack skills.',
    category: 'training',
  },
  {
    id: 'atm-task',
    date: '2025',
    title: 'Bank ATM System & Task Management API',
    description:
      'Built two personal backend systems applying DDD/CQRS and Clean Architecture with Redis caching and background processing, respectively.',
    category: 'project',
  },
  {
    id: 'freelance-ai',
    date: 'Aug 2025 – Sep 2025',
    title: 'Freelance: AI image-generation platform backend',
    description:
      'First paid freelance engagement — built a credit-metered, Stripe-integrated backend orchestrating a self-hosted AI inference engine.',
    category: 'freelance',
  },
  {
    id: 'erp-role',
    date: 'Aug 2025 – Present',
    title: 'Full Stack Developer — Modular ERP System',
    description:
      'Took on backend and Angular development for a multi-tenant ERP and accounting platform — current role.',
    category: 'work',
  },
  {
    id: 'depi-awards',
    date: 'Dec 2025',
    title: 'DEPI: 4th nationally, Top Performer, Certificate of Distinction',
    description:
      'Closed out the DEPI program ranked 4th in the Software Engineering track and recognized as a Top Performer across all tracks.',
    category: 'award',
  },
];
