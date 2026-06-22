/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        text: "var(--color-text)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        glass: "var(--bg-glass)",
        status: {
          pending: "#F59E0B",
          confirmed: "#3B82F6",
          active: "#8B5CF6",
          completed: "#10B981",
          cancelled: "#EF4444",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-playfair)'],
        mono: ['var(--font-jetbrains)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      }
    },
  },
  plugins: [],
};
