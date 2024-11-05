import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Indigo Blue
        accent: '#6366F1', // Vibrant Purple
        light: '#F7F9FC', // Off White
        dark: '#1F2937', // Charcoal Gray
        success: '#10B981', // Emerald Green
        mutedIndigo: '#CBD5E1', // Light Gray Indigo
        lightGray: '#E5E7EB', // Light Gray
        accentTint: '#E0E7FF', // Light Accent Purple
        lightEmerald: '#D1FAE5', // Very Light Emerald Green
        deepIndigo: '#1A2B59', // Darker Indigo
        darkPurple: '#4B0082', // Dark Purple
        charcoalBlack: '#111827', // Charcoal Black
        forestGreen: '#064E3B', // Deep Forest Green
        darkSlate: '#374151', // Dark Slate
      },
    },
  },
  plugins: [],
};
export default config;
