import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { Wine, Clock, DollarSign, TrendingUp } from 'lucide-react';

export function Bar() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Bar Management</h1>
        <p className="text-gray-400 mt-1">Monitor bar operations and sales</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Orders" 
          value="867"
          icon={Wine}
          trend={15}
        />
        <StatCard 
          title="Revenue" 
          value="$12,450"
          icon={DollarSign}
          trend={10}
        />
        <StatCard 
          title="Avg. Wait" 
          value="4 min"
          icon={Clock}
          trend={-2}
        />
        <StatCard 
          title="Avg. Spend" 
          value="$47"
          icon={TrendingUp}
          trend={5}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Popular Drinks">
          <div className="space-y-4">
            {['Vodka Soda', 'Moscow Mule', 'Old Fashioned', 'Margarita', 'Gin & Tonic'].map((drink) => (
              <div key={drink} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                <span className="text-gray-300">{drink}</span>
                <span className="text-purple-400">
                  {Math.floor(Math.random() * 100)} orders
                </span>
              </div>
            ))}
          </div>
        </DashboardCard>

        <DashboardCard title="Hourly Sales">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Hourly Sales Chart</p>
          </div>
        </DashboardCard>
      </div>
    </>
  );
}