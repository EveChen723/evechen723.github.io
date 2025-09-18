import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/YourRepositoryName/' // <-- ‼️ 非常重要：請將 'YourRepositoryName' 換成您 GitHub 專案的名稱！
})
