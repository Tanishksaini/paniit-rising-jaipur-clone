import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-8px) rotate(1deg)' },
					'50%': { transform: 'translateY(-15px) rotate(0deg)' },
					'75%': { transform: 'translateY(-8px) rotate(-1deg)' }
				},
				'slide-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(40px) scale(0.95)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'fade-in-scale': {
					from: {
						opacity: '0',
						transform: 'scale(0.9) rotateY(10deg)'
					},
					to: {
						opacity: '1',
						transform: 'scale(1) rotateY(0deg)'
					}
				},
				'bounce-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.5) translateY(50px)'
					},
					'60%': {
						opacity: '1',
						transform: 'scale(1.1) translateY(-10px)'
					},
					'80%': {
						transform: 'scale(0.95) translateY(5px)'
					},
					'100%': {
						transform: 'scale(1) translateY(0)'
					}
				},
				'slide-in-right': {
					from: {
						opacity: '0',
						transform: 'translateX(100px) skewX(-10deg)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0) skewX(0deg)'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(220 91% 65% / 0.3)',
						transform: 'scale(1)'
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(220 91% 65% / 0.6)',
						transform: 'scale(1.02)'
					}
				},
				'rotate-3d': {
					'0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
					'25%': { transform: 'rotateY(90deg) rotateX(5deg)' },
					'50%': { transform: 'rotateY(180deg) rotateX(0deg)' },
					'75%': { transform: 'rotateY(270deg) rotateX(-5deg)' },
					'100%': { transform: 'rotateY(360deg) rotateX(0deg)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'shimmer': {
					'0%': {
						'background-position': '-200px 0',
						transform: 'skewX(-5deg)'
					},
					'50%': {
						transform: 'skewX(0deg)'
					},
					'100%': {
						'background-position': 'calc(200px + 100%) 0',
						transform: 'skewX(5deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'slide-up': 'slide-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-scale': 'fade-in-scale 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'bounce-in': 'bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'slide-right': 'slide-in-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 10s linear infinite',
				'gradient': 'gradient-shift 4s ease infinite',
				'shimmer': 'shimmer 2s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
