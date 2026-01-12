import * as z from "zod"
import type { IBaseDialProps } from "../types";

export const BaseDialPropsSchema = z.object({
  disabled: z.boolean().optional().default(false),
  readonly: z.boolean().optional().default(false)
}) satisfies z.ZodType<IBaseDialProps>;

export default BaseDialPropsSchema;
