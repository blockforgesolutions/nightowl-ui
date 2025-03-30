import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, Ticket, Wine, Brackets as Jacket, TrendingUp, Search, BrainCircuit } from 'lucide-react';

const navItems = [
  { icon: HomeIcon, label: 'Overview', path: '/' },
  { icon: Jacket, label: 'Coat Check', path: '/coat-check' },
  { icon: Ticket, label: 'Tickets', path: '/tickets' },
  { icon: Wine, label: 'Bar', path: '/bar' },
  { icon: TrendingUp, label: 'Marketing', path: '/marketing' },
  { icon: Search, label: 'Search Trends', path: '/search' },
  { icon: BrainCircuit, label: 'AI Insights', path: '/ai-insights' },
];

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-8">
      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-8">
        <span className="text-white font-bold">NO</span>
      </div>
      <div className="flex flex-col gap-6">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={label}
            onClick={() => navigate(path)}
            className={`w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-800 transition-colors group relative
              ${location.pathname === path ? 'bg-gray-800 text-purple-500' : 'text-gray-400 hover:text-purple-500'}`}
          >
            <Icon size={24} />
            <span className="absolute left-full ml-2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}