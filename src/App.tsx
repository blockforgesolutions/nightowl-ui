import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Overview } from './pages/Overview';
import { CoatCheck } from './pages/CoatCheck';
import { Tickets } from './pages/Tickets';
import { Bar } from './pages/Bar';
import { Marketing } from './pages/Marketing';
import { SearchTrends } from './pages/SearchTrends';
import { AIInsights } from './pages/AIInsights';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="ml-20 p-8">
        <div className="max-w-[1600px] mx-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/coat-check" element={<CoatCheck />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/search" element={<SearchTrends />} />
            <Route path="/ai-insights" element={<AIInsights />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;