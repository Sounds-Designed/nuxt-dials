import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import type { ModuleOptions } from 'nuxt/schema';

export type * from './runtime/types'

// Module options TypeScript interface definition
export interface NuxtDialsOptions extends ModuleOptions {
  debug?: boolean;
  enabled?: boolean;
}

export default defineNuxtModule<NuxtDialsOptions>({
  meta: {
    name: 'nuxt-dials',
    configKey: 'dials',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    debug: false,
    enabled: true
  },
  setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
