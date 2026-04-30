/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Activar dark mode con clase "dark" en <html>
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // 🟢 Paleta EcoTrust Pro
        eco: {
          primary: '#2ECC71',        // Verde CTA principal
          'primary-dark': '#1B5E20', // Verde autoridad (headers/footer)
          'primary-light': '#A5D6A7',// Verde menta (fondos/hover)
          'primary-hover': '#27AE60',// Verde hover para CTAs
        },
        amber: {
          urgent: '#FFB300',         // Ámbar persuasivo (urgencia)
          'urgent-hover': '#FFA726', // Hover ámbar
          'urgent-glow': 'rgba(255, 179, 0, 0.4)', // Glow para animaciones
        },
        neutral: {
          bg: '#F5F7FA',             // Fondo suave
          'bg-dark': '#121212',      // Fondo dark mode
          text: '#1A1A2E',           // Texto principal
          'text-dark': '#F0F4F8',    // Texto dark mode
          'text-muted': '#64748B',   // Texto secundario
        }
      },
      animation: {
        // ✨ Animaciones de urgencia con "sensación de auto-interacción"
        'pulse-urgent': 'pulseUrgent 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-urgent-fast': 'pulseUrgent 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shine': 'shine 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        pulseUrgent: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(255, 179, 0, 0.4)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 0 12px rgba(255, 179, 0, 0)',
            transform: 'scale(1.02)'
          },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      backgroundImage: {
        'gradient-cta': 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
        'gradient-header': 'linear-gradient(180deg, #1B5E20 0%, #2E7D32 100%)',
        'gradient-amber': 'linear-gradient(90deg, #FFB300 0%, #FFA726 100%)',
        'shine-effect': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      },
      boxShadow: {
        'eco-glow': '0 0 20px rgba(46, 204, 113, 0.3)',
        'amber-glow': '0 0 15px rgba(255, 179, 0, 0.5)',
        'eco-glow-dark': '0 0 20px rgba(46, 204, 113, 0.6)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}