'use client';

import { useEffect, useState } from 'react';

interface CalScriptLoaderProps {
  children: React.ReactNode;
}

export const CalScriptLoader: React.FC<CalScriptLoaderProps> = ({ children }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if Cal.com script is already loaded
    if (typeof window !== 'undefined' && (window as any).Cal) {
      setIsScriptLoaded(true);
      return;
    }

    // Load Cal.com script if not already present
    const loadCalScript = () => {
      return new Promise<void>((resolve, reject) => {
        // Check if script is already loading
        if (document.querySelector('script[src*="cal.com"]')) {
          // Script is already loading, wait for it
          const checkCal = () => {
            if ((window as any).Cal) {
              setIsScriptLoaded(true);
              resolve();
            } else {
              setTimeout(checkCal, 100);
            }
          };
          checkCal();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://cal.com/embed.js';
        script.async = true;
        script.defer = true;
        
        script.onload = () => {
          // Wait a bit for Cal to initialize
          setTimeout(() => {
            if ((window as any).Cal) {
              setIsScriptLoaded(true);
              resolve();
            } else {
              reject(new Error('Cal.com script loaded but API not available'));
            }
          }, 1000);
        };
        
        script.onerror = () => {
          reject(new Error('Failed to load Cal.com script'));
        };

        document.head.appendChild(script);
      });
    };

    loadCalScript().catch((error) => {
      console.error('Failed to load Cal.com script:', error);
      // Even if script fails to load, we can still show the component
      // It will fall back to direct links
      setIsScriptLoaded(true);
    });
  }, []);

  return (
    <div className={isScriptLoaded ? '' : 'opacity-50 pointer-events-none'}>
      {children}
    </div>
  );
}; 