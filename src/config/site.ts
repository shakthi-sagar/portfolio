export const siteConfig = {
  // Site Info
  name: 'Shakthi Sagar',

  // Personal Info
  contact: {
    name: 'Shakthi Sagar',
    email: 'shakthisagarm5918@gmail.com',
    twitter: '@shakthisagar',
    github: 'shakthi-sagar',
    linkedin: 'shakthi-sagar-m'
  },

  footer: {
    description: 'Crafted cause I can'
  },

  // Hero Section
  hero: {
    title: 'I\'m Shakthi Sagar',
    subtitle: 'I build web tools and experiences',
    description: "Sometimes it's to solve a real problem. Sometimes it's just to satisfy my boredom. Either way, I kinda like making my ideas real.",
    cta: {
      primary: 'Explore Work',
      secondary: 'Get in Touch'
    },
    stats: [
      { label: 'Products', value: '1' },
      { label: 'Fun Projects', value: '3' }
    ]
  },

  // Products Section
  products_section: {
    title: 'Products',
    description: 'SaaS tools solving real problems',
  },

  // Fun Projects Section
  fun_section: {
    title: 'Fun Projects',
    description: 'Experiments and creative explorations',
  },

  // Contact Section
  contact_section: {
    title: 'Let\'s Connect',
    description: 'Have feedback? Want to collaborate? Or just want to say hi?',
    cta: 'Send Email'
  },

  // Products Data
  products: [
    {
      id: 'flow2chat',
      name: 'Flow2Chat',
      slug: 'flow2chat',
      tagline: 'Render diagrams directly in ChatGPT.',
      status: 'live' as const,
      pricing: 'free' as const,
      brandColor: '#22c55e',
      featured: true,
      launchDate: '2025',
      category: 'Productivity Tools',
      tech: ['ChatGPT', 'Chrome Extension', 'Mermaid.js'],
      link: 'https://www.flow2chat.com',
    },
    {
        id: 'quickgpt',
        name: 'QuickGPT',
        tagline: 'MacOS Menubar app for easy LLM interactions',
        status: 'building' as const,
        pricing: 'paid' as const,
        brandColor: '#0ea5e9',
        featured: true,
        category: 'Productivity Tools',
        tech: ['MacOS', 'Menubar' , 'AI Chat'],
        // link: 'https://www.quickgpt.com',
    },
    {
        id: 'quickpeek',
        name: 'QuickPeek',
        tagline: 'MacOS Menubar app for quick browsing',
        status: 'building' as const,
        pricing: 'paid' as const,
        brandColor: '#ec4899',
        featured: true,
        category: 'Productivity Tools',
        tech: ['MacOS', 'Menubar', 'Browser'],
        // link: 'https://www.quickpeek.com',
    }
  ],

  funProjects: [
    {
      id: 'hurdle',
      name: 'Hurdle',
      tagline: 'Wordle with harder modes.',
      status: 'live' as const,
      pricing: 'free' as const,
      brandColor: '#f59e0b',
      featured: true,
      category: 'Game',
      tech: ['Wordle', 'Game'],
      link: 'https://shakthi-sagar.github.io/hurdle/',
      github: 'https://github.com/shakthi-sagar/hurdle',
    },
    {
        id: 'procedural-creature',
        name: 'Procedural Creature',
        tagline: 'Procedurally generated and animated creatures',
        status: 'live' as const,
        pricing: 'free' as const,
        brandColor: '#8b5cf6',
        featured: true,
        category: 'Simulator',
        tech: ['Procedural Generation', 'Animation'],
        link: 'https://shakthi-sagar.github.io/procedural-creature/',
        github: 'https://github.com/shakthi-sagar/procedural-creature',
    },
    {
        id: 'particlism',
        name: 'Particlism',
        tagline: 'Physics based particle simulation.',
        status: 'live' as const,
        pricing: 'free' as const,
        brandColor: '#0ea5e9',
        featured: true,
        category: 'Simulator',
        tech: ['Particle Simulation', 'Physics'],
        link: 'https://shakthi-sagar.github.io/particlism/',
        github: 'https://github.com/shakthi-sagar/particlism',
    }

  ]
} as const;