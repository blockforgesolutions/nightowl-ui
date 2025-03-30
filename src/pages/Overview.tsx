import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { Ticket, DollarSign, UserMinus, Users, Clock, Brackets as Jacket, Wine, TrendingUp, Star } from 'lucide-react';

export function Overview() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">NightOwl Dashboard</h1>
        <p className="text-gray-400 mt-1">Welcome back! Here's what's happening at your venue.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          title="Total Tickets" 
          value="1,234"
          icon={Ticket}
          trend={12}
        />
        <StatCard 
          title="Revenue" 
          value="$45,678"
          icon={DollarSign}
          trend={8}
        />
        <StatCard 
          title="No Shows" 
          value="87"
          icon={UserMinus}
          trend={-5}
        />
        <StatCard 
          title="Repeat Customers" 
          value="68%"
          icon={Users}
          trend={15}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <DashboardCard title="Coat Check Analytics" className="xl:col-span-2">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Coat Check Usage Chart</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <StatCard 
              title="Items Stored" 
              value="342"
              icon={Jacket}
            />
            <StatCard 
              title="Lost Tickets" 
              value="2%"
              icon={Ticket}
            />
            <StatCard 
              title="Peak Time" 
              value="11 PM"
              icon={Clock}
            />
          </div>
        </DashboardCard>

        <DashboardCard title="Bar Performance">
          <div className="space-y-4">
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-400">Top Drinks</h4>
              <div className="mt-2 space-y-2">
                {['Vodka Soda', 'Moscow Mule', 'Old Fashioned'].map((drink) => (
                  <div key={drink} className="flex items-center justify-between">
                    <span className="text-gray-300">{drink}</span>
                    <span className="text-purple-400">
                      {Math.floor(Math.random() * 100)} orders
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <StatCard 
              title="Avg. Spend" 
              value="$47"
              icon={Wine}
              trend={3}
            />
          </div>
        </DashboardCard>

        <DashboardCard title="Marketing Insights">
          <div className="space-y-4">
            <StatCard 
              title="Campaign ROI" 
              value="+24%"
              icon={TrendingUp}
            />
            <div className="p-4 bg-gray-900/50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-400">Customer Satisfaction</h4>
              <div className="flex items-center mt-2">
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-yellow-400 w-6 h-6" />
                <Star className="text-gray-600 w-6 h-6" />
                <span className="ml-2 text-gray-300">4.2/5</span>
              </div>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="AI Recommendations" className="xl:col-span-2">
          <div className="space-y-3">
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <p className="text-purple-400">🎯 Consider extending happy hour by 1 hour on Thursdays based on customer demand patterns.</p>
            </div>
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-400">📊 Ticket pre-sales are trending 15% below last month. Consider running an early-bird promotion.</p>
            </div>
          </div>
        </DashboardCard>
      </div>
    </>
  );
}