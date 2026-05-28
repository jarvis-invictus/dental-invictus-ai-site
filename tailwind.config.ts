import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                bond: {
                    lime: '#ccff00',    // The signature "Bond" Lime
                    purple: '#d946ef',  // Electric Purple
                    cyan: '#06b6d4',    // Electric Cyan
                    orange: '#f97316',
                    pink: '#ec4899',
                    navy: '#0f172a',    // For strong text
                    gray: '#64748b',    // For body text
                },
                // Keeping original semantic names mapped to new palette for backward compat if needed, 
                // but prefer using 'bond-*' classes explicitly.
                navy: '#0f172a',
                blue: '#2563eb',
                accent: '#06b6d4',
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                handwriting: ["var(--font-handwriting)", "cursive"],
            },
            boxShadow: {
                'sticker': '4px 4px 0px 0px rgba(0,0,0,0.1)',
                'sticker-hover': '8px 8px 0px 0px rgba(0,0,0,0.15)',
                'sticker-lime': '8px 8px 0px 0px #ccff00',
                'sticker-purple': '8px 8px 0px 0px #d946ef',
                'sticker-cyan': '8px 8px 0px 0px #06b6d4',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
