import * as z from 'zod'

export interface INuxtDialsCustomizationOptions {
  [key: string]: unknown
}

export const NuxtDialsCustomizationOptionsSchema = z.object({

}) satisfies z.ZodType<INuxtDialsCustomizationOptions>

export type NuxtDialsCustomizationOptions = z.output<typeof NuxtDialsCustomizationOptionsSchema>
