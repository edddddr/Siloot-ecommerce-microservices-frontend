import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export const StatCard = ({ icon, title, subtitle }: StatCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 border border-brand-light rounded transition-all duration-300 group cursor-default hover:bg-brand-accent hover:border-brand-accent">
      
      {/* Nested Circle Icon Container */}
      <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors mb-6">
        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
          {icon}
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-1 group-hover:text-white transition-colors">
        {title}
      </h2>
      <p className="text-sm text-center group-hover:text-white transition-colors">
        {subtitle}
      </p>
    </div>
  );
};