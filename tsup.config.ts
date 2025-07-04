import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],     // adjust if your entry point is different
  outDir: 'dist',
  format: ['esm'],             // optional: build both ESM and CommonJS
  clean: true,                 // clean ./dist before building
  dts: true,                   // generate .d.ts files
  target: 'node20',            // adjust based on your Node version
  splitting: false,            // disable code splitting for Node apps
  sourcemap: true,             // helpful for debugging
  ignoreWatch: ['**/*.test.ts', '**/*.spec.ts'],
});