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
    emoji?: string;
    url?: string;
    imageUrl?: string;
    iframeUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Tradeoff App',
        description: 'A tool for making decisions based on weighted criteria and tradeoffs. Compare options systematically.',
        category: Category.Utility,
        url: 'https://tradeoff.shakthisagar.dev',
        iframeUrl: 'https://tradeoff.shakthisagar.dev'
    },
    {
        id: 2,
        title: 'MD Preview',
        description: 'Blazingly fast markdown live previewer with mermaid support.',
        category: Category.Utility,
        url: 'https://md.shakthisagar.dev',
        iframeUrl: 'https://md.shakthisagar.dev'
    }
];
