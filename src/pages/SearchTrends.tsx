import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { Search, Map, Music } from 'lucide-react';

export function SearchTrends() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Search Trends</h1>
        <p className="text-gray-400 mt-1">Analyze how people find and interact with your venue</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard 
          title="Total Searches" 
          value="2,345"
          icon={Search}
          trend={12}
        />
        <StatCard 
          title="Local Reach" 
          value="5 mile"
          icon={Map}
          trend={8}
        />
        <StatCard 
          title="Genre Interest" 
          value="House"
          icon={Music}
          trend={15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Popular Search Terms">
          <div className="space-y-4">
            {[
              { term: "House Music Night", count: 245 },
              { term: "VIP Tables", count: 189 },
              { term: "Ladies Night", count: 156 },
              { term: "Weekend Events", count: 134 }
            ].map((item) => (
              <div key={item.term} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                <span className="text-gray-300">{item.term}</span>
                <span className="text-purple-400">{item.count} searches</span>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Search Location Heat Map">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Location Heat Map</p>
          </div>
        </DashboardCard>
      </div>
    </>
  );
}