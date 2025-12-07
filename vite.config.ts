import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // New v4 plugin

// Rolldown-Vite: Keep experimental if you chose "yes" earlier
export default defineConfig({
  plugins: [react(), tailwindcss()],
  experimental: {
    renderBuiltUrl: (filename, { hostId, hostType }) => {
      if (hostType === 'js') return `"${filename}"`
      return `"./${filename}"`
    },
  },
})