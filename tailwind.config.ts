import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B008B", // Main primary color (Reddish Purple)
          dark: "#4B0082", // Darker shade for gradient
        },
        secondary: "#D3D3D3", // Light Grey for secondary elements
        accent: "#FFA500", // Bright Orange for accents
        neutral: "#333333", // Dark Grey for neutral text
        base: "#FFFFFF", // White for background
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, #7C00FF 2.11%, #CC13CC 90%)",
        "dark-gradient": "linear-gradient(90deg, #390176 2.11%, #5B0B5B 90%)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8B008B",
          "primary-dark": "#4B0082",
          secondary: "#D3D3D3",
          accent: "#FFA500",
          neutral: "#333333",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
