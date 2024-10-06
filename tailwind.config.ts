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
        neutral: '#F7F9FC', // Off White
        dark: '#1F2937', // Charcoal Grey
        success: '#10B981', // Emerald Green
      },
    },
  },
  plugins: [],
};
export default config;
