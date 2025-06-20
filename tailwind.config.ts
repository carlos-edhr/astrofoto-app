import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config = withUt({
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      gridTemplateColumns: {
        "5": "repeat(5, minmax(0, 1fr))",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(12px)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        robotoCondensed: ["var(--font-robotoCondensed)", "sans-serif"],
        bebas: ["var(--font-bebas-neue)", "sans-serif"],
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-medium", "sans-serif"],
      },
      colors: {
        blackBackgroundNew: "#191919",
        blackSpace: "#0D0D0D",
        azulAstro: "#01B9FF",
        azulMar: "#0075AFm",
        plata: "#B7B7B7",
        carbon: "#232323",
        amarillo: "#FFC200",
        magenta: "#FF3386",
        blue: {
          "50": "#DFDFF0",
          "75": "#DFDFF2",
          "100": "#F0F2FA",
          "200": "#010101",
          "300": "#4FB7DD",
        },
        violet: {
          "300": "#5724FF",
        },
        yellow: {
          "100": "#8E983F",
          "300": "#EDFF66",
        },
        bunkerBlue: "#05070A",
        primaryLanding: "#04BDFC",
        secondaryLanding: "#FB3783",
        lightPurpleLanding: "#361DFC",
        darkPurpleLanding: "#2614B0",
        darkPinkLanding: "#AB3190",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        animatedgradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        gradient: "animatedgradient 9s ease infinite alternate",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-filters")],
} satisfies Config);

export default config;
