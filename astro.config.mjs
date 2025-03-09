// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  env: {
    schema: {
      MAIL: envField.string({ context: 'server', access: 'public' }),
      GITHUB: envField.string({ context: 'server', access: 'public' }),
      LINKEDIN: envField.string({ context: 'server', access: 'public' }),

      LANGUAGE: envField.string({context: 'server', access: 'public' }),

      CLOUDINARY_URL: envField.string({context: 'server', access: 'secret' }),
      CLOUDINARY_API_KEY: envField.string({context: 'server', access: 'secret' }),
      CLOUDINARY_API_SECRET: envField.string({context: 'server', access: 'secret' }),
      CLOUD_NAME: envField.string({context: 'server', access: 'secret' })
    }
  }
});