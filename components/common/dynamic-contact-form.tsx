'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

// Dynamically import the contact form with no SSR
const ContactForm = dynamic(() => import('./contact-form').then(mod => ({ default: mod.ContactForm })), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="w-6 h-6 animate-spin" />
      <span className="ml-2">Formular wird geladen...</span>
    </div>
  ),
});

export const DynamicContactForm = () => {
  return <ContactForm />;
}; 