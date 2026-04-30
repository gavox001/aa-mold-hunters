import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  // Web app tests
  './apps/web/vitest.config.ts',
  // API tests
  './apps/api/vitest.config.ts',
  // Shared packages tests
  './packages/*/vitest.config.ts',
]);