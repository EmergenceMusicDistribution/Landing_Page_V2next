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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #212129, #3e2b47 50%, #35222d)',
      },
    screens: {
      'sm': {'min': '320px', 'max': '599px'},
    
      'md': {'min': '600px', 'max': '1023px'},
    
      'lg': {'min': '1024px', 'max': '1581px'},
    
      'xl': {'min': '1280px', 'max': '1535px'},
    
      '2xl': {'min': '1536px'},
    },
    },
  },
  plugins: [],
};
