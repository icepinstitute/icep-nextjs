'use client';

import { useEffect, useState } from 'react';
import { EyeIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface ViewCounterProps {
  paperId?: string;
  subjectName?: string;
  type?: 'paper' | 'magazine';
}

const ViewCounter = ({ paperId, subjectName, type = 'paper' }: ViewCounterProps) => {
  const [totalViews, setTotalViews] = useState(0);
  const [currentViewers, setCurrentViewers] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);  useEffect(() => {
    // Generate random but consistent data based on paper ID or generate random for magazines
    const generateViewData = () => {
      const storageKey = paperId ? `views_${paperId}` : `views_${subjectName || 'magazine'}_${type}`;
      
      // Check if we have stored data
      const storedData = localStorage.getItem(storageKey);
      
      if (storedData) {
        const { totalViews: storedViews, timestamp } = JSON.parse(storedData);
        const now = Date.now();
        const hoursSinceLastVisit = (now - timestamp) / (1000 * 60 * 60);
        
        // Add realistic growth based on time passed (1-3 views per hour)
        const additionalViews = Math.floor(hoursSinceLastVisit * (1 + Math.random() * 2));
        const newTotalViews = storedViews + additionalViews;
        
        setTotalViews(newTotalViews);
        
        // Update localStorage with new data
        localStorage.setItem(storageKey, JSON.stringify({
          totalViews: newTotalViews,
          timestamp: now
        }));
      } else {
        // First time visit - generate initial data
        let hash = 0;
        
        if (paperId) {
          // Create a simple hash from paperId to ensure consistency
          hash = paperId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        } else {
          // For magazines without paperId, use subject name or type
          const hashString = subjectName || type || 'default';
          hash = hashString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        }
          // Generate total views (between 250-370)
        const baseViews = 250 + (hash % 120);
        const views = baseViews + Math.floor(Math.random() * 50);
        
        setTotalViews(views);
        
        // Store initial data
        localStorage.setItem(storageKey, JSON.stringify({
          totalViews: views,
          timestamp: Date.now()
        }));
      }
      
      // Generate current viewers (between 2-15)
      const viewers = 2 + Math.floor(Math.random() * 14);
      setCurrentViewers(viewers);
      setIsLoaded(true);
    };

    // Add small delay for better UX
    const timer = setTimeout(generateViewData, 300);
    return () => clearTimeout(timer);
  }, [paperId, subjectName, type]);

  // Update current viewers every 5-10 seconds
  useEffect(() => {
    if (!isLoaded) return;

    const updateViewers = () => {
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      setCurrentViewers(prev => Math.max(1, Math.min(20, prev + change)));
    };

    const interval = setInterval(updateViewers, 5000 + Math.random() * 5000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm border border-brand-blue-100 mb-4">
        <div className="animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-4 bg-brand-blue-100 rounded w-24"></div>
            <div className="h-4 bg-brand-blue-100 rounded w-16"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-brand-blue-100 mb-4">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-brand-blue-600">
            <EyeIcon className="w-4 h-4" />
            <span className="font-medium">{totalViews.toLocaleString()}</span>
            <span className="text-brand-blue-400">total views</span>
          </div>
          
          <div className="flex items-center gap-2 text-brand-green-600">
            <UserGroupIcon className="w-4 h-4" />
            <span className="font-medium">{currentViewers}</span>
            <span className="text-brand-blue-400">viewing now</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-brand-blue-400 text-xs">Live</span>
        </div>
      </div>      
      <div className="mt-2 text-xs text-brand-blue-400">
        {type === 'magazine' 
          ? 'Popular educational resource' 
          : `Popular among ${subjectName} aspirants`
        }
      </div>
    </div>
  );
};

export default ViewCounter;
