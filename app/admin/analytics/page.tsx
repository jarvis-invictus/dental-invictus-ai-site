"use client";

import React, { useEffect, useState } from 'react';
import { Activity, Users, MousePointerClick, Clock, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AnalyticsDashboard() {
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/clarity')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load analytics');
        return res.json();
      })
      .then(json => {
        if (json.error) throw new Error(json.error);
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getMetric = (name: string) => data?.find(m => m.metricName === name)?.information?.[0] || {};

  const traffic = getMetric('Traffic');
  const engagement = getMetric('EngagementTime');
  const deadClicks = getMetric('DeadClickCount');
  const rageClicks = getMetric('RageClickCount');
  const popularPages = data?.find(m => m.metricName === 'PopularPages')?.information || [];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-[#0f172a] tracking-tight">Live Analytics</h1>
            <p className="text-gray-500 mt-1 font-medium">Powered by Microsoft Clarity (Cached every 4 hrs)</p>
          </div>
          <Link href="/admin/social" className="text-[#0f172a] font-semibold hover:underline flex items-center gap-2">
             <ArrowLeft className="w-4 h-4" /> Back to Tools
          </Link>
        </div>

        {loading && <div className="text-center py-20 text-gray-500 animate-pulse font-semibold">Loading Live Insights...</div>}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-6 rounded-xl font-medium flex items-start gap-3 shadow-sm">
            <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-lg mb-1">Connection Error</p>
              <p>{error}</p>
              <p className="text-sm mt-2 opacity-80 font-bold">Make sure CLARITY_EXPORT_TOKEN is set in your Vercel Environment Variables.</p>
            </div>
          </div>
        )}

        {data && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Traffic Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-blue-500"><Users className="w-24 h-24" /></div>
                <div className="relative z-10">
                  <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2"><Activity className="w-4 h-4 text-blue-500"/> Sessions (24h)</h3>
                  <div className="text-5xl font-black text-[#0f172a]">{traffic.totalSessionCount || 0}</div>
                  <p className="text-gray-500 mt-2 font-medium flex justify-between">
                    <span>Unique Users:</span> <span className="text-[#0f172a] font-bold">{traffic.distinctUserCount || 0}</span>
                  </p>
                </div>
              </div>

              {/* Engagement Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-green-500"><Clock className="w-24 h-24" /></div>
                <div className="relative z-10">
                  <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-green-500"/> Active Time</h3>
                  <div className="text-5xl font-black text-[#0f172a]">{engagement.activeTime || 0}s</div>
                  <p className="text-gray-500 mt-2 font-medium flex justify-between">
                    <span>Total Time:</span> <span className="text-[#0f172a] font-bold">{engagement.totalTime || 0}s</span>
                  </p>
                </div>
              </div>

              {/* Friction Card */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-red-500"><MousePointerClick className="w-24 h-24" /></div>
                <div className="relative z-10">
                  <h3 className="text-gray-500 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-500"/> User Friction</h3>
                  <div className="flex gap-8 mt-2">
                    <div>
                      <p className="text-4xl font-black text-[#0f172a]">{rageClicks.sessionsCount || 0}</p>
                      <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wide">Rage Clicks</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-[#0f172a]">{deadClicks.sessionsCount || 0}</p>
                      <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-wide">Dead Clicks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="text-[#0f172a] font-black text-xl mb-4">Most Popular Pages</h3>
               <div className="divide-y divide-gray-100">
                 {popularPages.slice(0, 5).map((page: any, idx: number) => (
                   <div key={idx} className="py-4 flex justify-between items-center group">
                     <span className="text-gray-700 font-medium truncate pr-4 group-hover:text-[#0f172a] transition-colors">{page.url}</span>
                     <span className="bg-[#ccff00] text-[#0f172a] font-black px-4 py-1.5 rounded-full text-sm shrink-0 shadow-sm">{page.visitsCount} visits</span>
                   </div>
                 ))}
                 {popularPages.length === 0 && <p className="text-gray-500 italic py-4">No page data available yet.</p>}
               </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
