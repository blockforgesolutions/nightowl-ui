import React from 'react';
import { DashboardCard } from '../components/DashboardCard';
import { StatCard } from '../components/StatCard';
import { TrendingUp, Users, Star } from 'lucide-react';

export function Marketing() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Marketing Analytics</h1>
        <p className="text-gray-400 mt-1">Track marketing performance and engagement</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard 
          title="Campaign ROI" 
          value="+24%"
          icon={TrendingUp}
          trend={8}
        />
        <StatCard 
          title="Social Reach" 
          value="45.2K"
          icon={Users}
          trend={15}
        />
        <StatCard 
          title="Rating" 
          value="4.2/5"
          icon={Star}
          trend={3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard title="Campaign Performance">
          <div className="h-[300px] flex items-center justify-center border border-gray-800 rounded-lg bg-gray-900/50">
            <p className="text-gray-400">Campaign Performance Chart</p>
          </div>
        </DashboardCard>

        <DashboardCard title="Customer Feedback">
          <div className="space-y-4">
            {[
              { text: "Great atmosphere and music selection!", rating: 5 },
              { text: "Excellent service at the bar", rating: 4 },
              { text: "Love the themed nights!", rating: 5 }
            ].map((feedback, index) => (
              <div key={index} className="p-4 bg-gray-900/50 rounded-lg">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-300">{feedback.text}</p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </>
  );
}