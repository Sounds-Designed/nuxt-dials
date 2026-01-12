import * as z from "zod";
import type { BaseDialPropsSchema, SimpleDialPropsSchema } from "../schemas";

export type ValueTemplateFunction = (value: number | string) => string;

export interface IBaseDialProps {
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  invalid?: boolean;
  fullWidth?: boolean;
  showValue?: boolean;
  defaultValue?: string | number;
  modelValue?: string | number;
  size: number;
  step: number;
  min: number;
  max: number;
  tabindex?: number;
  ariaLabel?: string;
  ariaLabelledby?: string;
  rangeColor?: string;
  rangeWidth?: number;
  textColor?: string;
  valueColor?: string;
  valueTemplate?: string | ValueTemplateFunction;
}

export interface ISimpleDialProps extends IBaseDialProps {

}

export type BaseDialProps = z.output<typeof BaseDialPropsSchema>
export type SimpleDialProps = z.output<typeof SimpleDialPropsSchema>
