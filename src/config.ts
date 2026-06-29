export const Category = {
    Utility: 'Utility',
    Arcade: 'Arcade',
    Products: 'Products',
} as const;

export type Category = typeof Category[keyof typeof Category];

export const CONFIG = {
    name: "Shakthi Sagar.",
    tagline: "Software Developer. I build tools, games and anything that I find interesting.",
    footerText: "© 2026 Shakthi Sagar.",
    tabs: ['All', Category.Utility, Category.Arcade, Category.Products] as const,
    socials: {
        github: "https://github.com/shakthi-sagar",
        linkedin: "https://www.linkedin.com/in/shakthi-sagar-m/",
        archive: "https://archive.shakthisagar.dev",
    }
};

export type ProjectCategory = typeof CONFIG.tabs[number];

export interface Project {
    id: number;
    title: string;
    description: string;
    category: Category;
    emoji?: string;
    url?: string;
    imageUrl?: string;
    iframeUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Tradeoff',
        description: 'Decision-making tool for comparing options using weighted criteria.',
        category: Category.Utility,
        url: 'https://tradeoff.shakthisagar.dev',
        iframeUrl: 'https://tradeoff.shakthisagar.dev'
    },
    {
        id: 2,
        title: 'Markdown Editor',
        description: 'Fast markdown editor with live preview and Mermaid.js support.',
        category: Category.Utility,
        url: 'https://md.shakthisagar.dev',
        iframeUrl: 'https://md.shakthisagar.dev'
    },
    {
        id: 3,
        title: 'Particlism',
        description: 'A fun physics-based particle simulation playground.',
        category: Category.Arcade,
        url: 'https://particlism.shakthisagar.dev',
        iframeUrl: 'https://particlism.shakthisagar.dev'
    },
    {
        id: 7,
        title: 'CubeMonke',
        description: 'Speedcubing timer with a virtual cube, custom scrambles, replays, and leaderboards.',
        category: Category.Arcade,
        url: 'https://cubemonke.com',
        iframeUrl: 'https://cubemonke.com'
    },
    {
        id: 6,
        title: 'SwiftGPT',
        description: 'AI assistant in your menu bar for quick writing and prompt workflows.',
        category: Category.Products,
        url: 'https://swiftgpt.shakthisagar.dev',
        iframeUrl: 'https://swiftgpt.shakthisagar.dev'
    },
];
