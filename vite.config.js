import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    port: 5173, // 원하는 포트 설정 가능
  },
  resolve: {
    alias: {
      '@': '/src', // 기존 @ 경로 유지
    },
  },
});