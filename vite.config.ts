import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pet/',   // 👉 新手注意：添加这行！前后都有斜杠，名字必须和仓库名一模一样！
  plugins: [react()],
})
