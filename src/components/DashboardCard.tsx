import React, { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DashboardCard({ title, children, className = '' }: DashboardCardProps) {
  return (
    <div className={`bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-100 mb-4">{title}</h3>
      {children}
    </div>
  );
}