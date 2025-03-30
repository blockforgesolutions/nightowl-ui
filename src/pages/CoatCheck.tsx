import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { Brackets as Jacket, Clock, Ticket } from 'lucide-react';

export function CoatCheck() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Coat Check Management</h1>
        <p className="text-gray-400 mt-1">Monitor and manage coat check operations</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard 
          title="Items Stored" 
          value="342"
          icon={Jacket}
          trend={5}
        />
        <StatCard 
          title="Lost Tickets" 
          value="2%"
          icon={Ticket}
          trend={-1}
        />
        <StatCard 
          title="Peak Time" 
          value="11 PM"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Hourly Usage">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Hourly Usage Chart</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Item Types">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Item Types Distribution</p>
          </div>
        </DashboardCard>
      </div>
    </>
  );
}