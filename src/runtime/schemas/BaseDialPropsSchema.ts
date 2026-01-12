import * as z from "zod"
import type { IBaseDialProps } from "../types";

export const BaseDialPropsSchema = z.object({
  disabled: z.boolean().optional(),
  readonly: z.boolean().optional(),
  invalid: z.boolean().optional(),
  fullWidth: z.boolean().optional(),
  showValue: z.boolean(),
  name: z.string().optional(),
  defaultValue: z.union([z.string(), z.number()]).optional(),
  modelValue: z.union([z.string(), z.number()]).optional(),
  size: z.number(),
  step: z.number(),
  min: z.number(),
  max: z.number(),
  tabindex: z.number().optional(),
  ariaLabel: z.string().optional(),
  ariaLabelledby: z.string().optional(),
  rangeColor: z.string(),
  rangeWidth: z.number(),
  textColor: z.string(),
  valueColor: z.string(),
  valueTemplate: z.union([z.string(), z.function({
    input: [z.union([z.string(), z.number()])], // parameters (must be an array or a ZodTuple)
    output: z.string()  // return type
  })]),
}) satisfies z.ZodType<IBaseDialProps>;

export default BaseDialPropsSchema;
