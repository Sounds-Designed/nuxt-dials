import * as z from "zod";
import type { BaseDialPropsSchema, SimpleDialPropsSchema } from "../schemas";

export interface IBaseDialProps {
  disabled?: boolean;
  readonly?: boolean;
}

export interface ISimpleDialProps extends IBaseDialProps {

}

export type BaseDialProps = z.output<typeof BaseDialPropsSchema>
export type SimpleDialProps = z.output<typeof SimpleDialPropsSchema>
