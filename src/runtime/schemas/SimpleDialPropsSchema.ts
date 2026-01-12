import * as z from "zod"
import type { ISimpleDialProps } from "../types";
import BaseDialPropsSchema from "./BaseDialPropsSchema";

export const SimpleDialPropsSchema = BaseDialPropsSchema.extend({

}) satisfies z.ZodType<ISimpleDialProps>;

export default SimpleDialPropsSchema;
