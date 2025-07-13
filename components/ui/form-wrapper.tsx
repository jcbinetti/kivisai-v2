'use client';

import React, { useEffect, useState } from 'react';

interface FormWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({ children, className = '' }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by only rendering on client
  if (!isClient) {
    return (
      <div className={className} suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}; 