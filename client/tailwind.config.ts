import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#f97316",
        },
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top right, rgba(249,115,22,0.35), transparent 60%)",
      },
      boxShadow: {
        soft: "0 20px 50px rgba(0,0,0,0.6)",
      },
    },
  },
};

export default config;