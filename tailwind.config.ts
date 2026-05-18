import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', '-apple-system', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
        serif: ['"Fraunces"', '"Times New Roman"', 'serif'],
      },
      colors: {
        /* Cillian Studio brand tokens */
        'brand-bg':       '#1a1612',
        'brand-bg-2':     '#241f19',
        'brand-bg-3':     '#2e2822',
        'brand-bg-deep':  '#0f0c09',
        'brand-ink':      '#ece5d4',
        'brand-ink-2':    '#a9a191',
        'brand-ink-3':    '#6b6456',
        'brand-ink-4':    '#d4ccb8',
        'brand-signal':   '#c94a28',
        'brand-signal-dim': '#a83c1f',
        'brand-paper':    '#f0eee9',
        'brand-paper-2':  '#e8e4d8',
        /* shadcn/ui compatibility — HSL-based */
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: '2px',
        md: '2px',
        sm: '2px',
      },
      maxWidth: {
        'brand': '1600px',
        'brand-md': '1200px',
      },
      letterSpacing: {
        'mono': '.08em',
        'mono-wide': '.12em',
        'display': '-.045em',
        'heading': '-.025em',
        'tight-display': '-.035em',
      },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '0.86', letterSpacing: '-0.045em' }],
        'display-l':  ['72px',  { lineHeight: '0.94', letterSpacing: '-0.028em' }],
        'display-m':  ['48px',  { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'title':      ['28px',  { lineHeight: '1.2',  letterSpacing: '-0.02em'  }],
        'body-l':     ['18px',  { lineHeight: '1.6',  letterSpacing: '0'        }],
        'body':       ['15px',  { lineHeight: '1.55', letterSpacing: '0'        }],
        'caption':    ['13px',  { lineHeight: '1.5',  letterSpacing: '0'        }],
        'mono-label': ['11px',  { lineHeight: '1.4',  letterSpacing: '.08em'    }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
