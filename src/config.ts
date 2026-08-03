export const Category = {
    Utility: 'Utility',
    Arcade: 'Arcade',
    Products: 'Products',
} as const;

export type Category = typeof Category[keyof typeof Category];

export const CONFIG = {
    name: "Shadster.",
    tagline: "Software Developer. I build tools, games and anything that I find interesting.",
    footerText: "© 2026 Shadster.",
    tabs: ['All', Category.Utility, Category.Arcade, Category.Products] as const,
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
        id: 9,
        title: 'F1 Race Sim',
        description: 'Interactive Formula 1 race replay from real historical telemetry.',
        category: Category.Arcade,
        url: 'https://f1-sim.shadster.dev',
        iframeUrl: 'https://f1-sim.shadster.dev'
    },
    {
        id: 3,
        title: 'Particlism',
        description: 'A fun physics-based particle simulation playground.',
        category: Category.Arcade,
        url: 'https://particlism.shadster.dev',
        iframeUrl: 'https://particlism.shadster.dev'
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
        id: 1,
        title: 'Tradeoff',
        description: 'Decision-making tool for comparing options using weighted criteria.',
        category: Category.Utility,
        url: 'https://tradeoff.shadster.dev',
        iframeUrl: 'https://tradeoff.shadster.dev'
    },
    {
        id: 2,
        title: 'Markdown Editor',
        description: 'Fast markdown editor with live preview and Mermaid.js support.',
        category: Category.Utility,
        url: 'https://md.shadster.dev',
        iframeUrl: 'https://md.shadster.dev'
    },
    {
        id: 6,
        title: 'SwiftGPT',
        description: 'Menu bar browser for AI chatbots — add ChatGPT, Claude, or any site as tabs and summon them with a hotkey.',
        category: Category.Products,
        url: 'https://swiftgpt.shadster.dev',
        iframeUrl: 'https://swiftgpt.shadster.dev'
    },
    {
        id: 8,
        title: 'Recall',
        description: 'Reminders that call you back as voice calls, video, TTS, or full-screen alarms.',
        category: Category.Products,
        url: 'https://recall.shadster.dev',
        iframeUrl: 'https://recall.shadster.dev'
    },
];
