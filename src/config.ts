export const Category = {
    Utility: 'Utility',
    Arcade: 'Arcade',
    SaaS: 'SaaS',
} as const;

export type Category = typeof Category[keyof typeof Category];

export const CONFIG = {
    name: "Shakthi Sagar.",
    tagline: "Software Developer. I build what I find interesting.",
    footerText: "© 2026 Shakthi Sagar.",
    tabs: ['All', Category.Utility, Category.Arcade, Category.SaaS] as const,
};

export type ProjectCategory = typeof CONFIG.tabs[number];

export interface Project {
    id: number;
    title: string;
    description: string;
    category: Category;
    emoji: string;
    type: string;
    imageUrl?: string;
    iframeUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Markdown Site',
        description: 'A custom, blazingly fast markdown site generator. Designed so I never have to write HTML documentation by hand again.',
        category: Category.Utility,
        emoji: '📄',
        type: 'Documentation',
        imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 2,
        title: 'Taskmaster',
        description: 'Workflow automation utility built to handle mundane daily operations in a super sleek interface.',
        category: Category.Utility,
        emoji: '🛠️',
        type: 'CLI Tool'
    },
    {
        id: 3,
        title: 'Custom Wordle',
        description: 'The viral word game, completely reverse-engineered and rebuilt with custom themes, difficulties, and insane multi-language support.',
        category: Category.Arcade,
        emoji: '🔠',
        type: 'Web Game',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 4,
        title: 'Parallax Website',
        description: 'An exploration of deep-scrolling website layers built purely to test the limits of CSS 3D transforms.',
        category: Category.Arcade,
        emoji: '🌌',
        type: 'Visual Experiemnt'
    },
    {
        id: 5,
        title: 'SaaS Builder',
        description: 'My complete framework for launching web applications. It handles auth, db, and billing so I can focus on features.',
        category: Category.SaaS,
        emoji: '💼',
        type: 'Starter Kit',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: 6,
        title: 'Insight Engine',
        description: 'An analytical dashboard designed to provide fast, highly visual metric reports.',
        category: Category.SaaS,
        emoji: '📈',
        type: 'Dashboard'
    }
];
