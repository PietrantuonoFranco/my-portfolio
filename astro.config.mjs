import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercelAdapter from '@astrojs/vercel';

export default defineConfig({
  output: 'server',
  adapter: vercelAdapter(),
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      MAIL: envField.string({ context: 'server', access: 'public' }),
      GITHUB: envField.string({ context: 'server', access: 'public' }),
      LINKEDIN: envField.string({ context: 'server', access: 'public' }),
      TEL: envField.string({ context: 'server', access: 'public' }),

      CLOUDINARY_URL: envField.string({context: 'server', access: 'secret' }),
      CLOUDINARY_API_KEY: envField.string({context: 'server', access: 'secret' }),
      CLOUDINARY_API_SECRET: envField.string({context: 'server', access: 'secret' }),
      CLOUD_NAME: envField.string({context: 'server', access: 'secret' })
    }
  }
});