import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps): React.ReactElement {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        {title}
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
}
