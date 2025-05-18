import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { BrainCircuit, TrendingUp, Users } from 'lucide-react';

export function AIInsights() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">AI Insights</h1>
        <p className="text-gray-400 mt-1">AI-powered recommendations and predictions</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard 
          title="Predictions" 
          value="89%"
          icon={BrainCircuit}
          trend={5}
        />
        <StatCard 
          title="Opportunities" 
          value="12"
          icon={TrendingUp}
          trend={8}
        />
        <StatCard 
          title="Patterns" 
          value="7"
          icon={Users}
          trend={15}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <DashboardCard title="AI Recommendations">
          <div className="space-y-4">
            <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <p className="text-purple-400">🎯 Consider extending happy hour by 1 hour on Thursdays based on customer demand patterns.</p>
            </div>
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-400">📊 Ticket pre-sales are trending 15% below last month. Consider running an early-bird promotion.</p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-green-400">🎵 Based on music preferences, scheduling more House music events could increase attendance by 23%.</p>
            </div>
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <p className="text-yellow-400">⚡ Peak bar traffic predicted for next Saturday. Consider adding 2 more bartenders to maintain service quality.</p>
            </div>
          </div>
        </DashboardCard>

        <DashboardCard title="Predictive Analytics">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Attendance Prediction Chart</p>
          </div>
        </DashboardCard>
      </div>
    </>
  );
}