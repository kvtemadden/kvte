const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#46B5D1",
          foreground: "hsl(var(--primary-foreground))",
          // https://hihayk.github.io/scale/#4/5/40/92/-12/4/19/14/46B5D1/70/181/209/white
          50: "#245D83",
          100: "#2C7297",
          200: "#3487AB",
          300: "#3D9EBE",
          400: "#46B5D1",
          500: "#66C6DC",
          600: "#87D5E5",
          700: "#A9E3EE",
          800: "#CBEFF6",
          900: "#EFFBFC",
        },
        secondary: {
          DEFAULT: "#EE4540",
          foreground: "hsl(var(--secondary-foreground))",
          // https://hihayk.github.io/scale/#4/5/40/92/-12/4/19/14/EE4540/238/69/64/white
          50: "#963A1F",
          100: "#AD3F26",
          200: "#C3422E",
          300: "#D94437",
          400: "#EE4540",
          500: "#F46360",
          600: "#F88282",
          700: "#FCA5A6",
          800: "#FEC9CA",
          900: "#FFEEEF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
      maxWidth: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "3/4": "75%",
      },
      spacing: {
        26: "6.5rem",
      },
      backgroundImage: {
        kate: "url('/k8.png')",
        ABjob: "url('/AB-Job.png')",
        ABAG: "url('/AB-AG.png')",
        W2BM: "url('/W2BM.png')",
        LW: "url('/LW.png')",
        CBMB: "url('/CBMB.png')",
        meter: "url('/meter.jpg')",
        KTT: "url('/ktt.jpeg')",
        wed: "url('/wedding.jpg')",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
