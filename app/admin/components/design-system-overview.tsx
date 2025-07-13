"use client";

import { Palette, Type } from 'lucide-react';

const kivisaiColors = {
  'clear-turquoise': '#00D4AA',
  'vibrant-turquoise': '#00B894',
  'deep-dark-blue': '#1E3A8A',
  'moss-green': '#4F7C52',
  'light-cool-gray': '#F8FAFC',
  'pure-white': '#FFFFFF'
};

const ColorSwatch = ({ name, hex }: { name: string; hex: string }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 rounded-full border-2 border-gray-200" style={{ backgroundColor: hex }} />
    <div>
      <p className="font-semibold capitalize">{name.replace(/-/g, ' ')}</p>
      <p className="text-sm text-gray-500 uppercase">{hex}</p>
    </div>
  </div>
);

const FontDisplay = ({ name, stack }: { name: string; stack: string[] | string }) => (
    <div>
        <h4 className="font-semibold capitalize text-lg mb-1">{name}</h4>
        <p className={`text-2xl`} style={{ fontFamily: Array.isArray(stack) ? stack.join(', ') : stack }}>
            The quick brown fox jumps over the lazy dog.
        </p>
    </div>
);


export const DesignSystemOverview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6 flex items-center"><Palette className="w-6 h-6 mr-2 text-purple-500" />Design System</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">Kivisai Brand Colors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(kivisaiColors).map(([name, hex]) => (
              <ColorSwatch key={name} name={name} hex={hex} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2 flex items-center"><Type className="w-5 h-5 mr-2" />Fonts</h3>
           <div className="space-y-4">
            <FontDisplay name="Kivisai" stack={['Inter', 'sans-serif']} />
            <FontDisplay name="Inter" stack="Inter" />
           </div>
        </div>
      </div>
    </div>
  );
}; 