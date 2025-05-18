import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { Ticket, Users, Clock, TrendingUp } from 'lucide-react';

export function Tickets() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Ticket Sales</h1>
        <p className="text-gray-400 mt-1">Track and analyze ticket sales performance</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Sales" 
          value="1,234"
          icon={Ticket}
          trend={12}
        />
        <StatCard 
          title="Revenue" 
          value="$24,680"
          icon={TrendingUp}
          trend={8}
        />
        <StatCard 
          title="Avg. Price" 
          value="$20"
          icon={Ticket}
        />
        <StatCard 
          title="Peak Entry" 
          value="10:30 PM"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Sales Trend">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Daily Sales Chart</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Demographics">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Customer Demographics</p>
          </div>
        </DashboardCard>
      </div>
    </>
  );
}