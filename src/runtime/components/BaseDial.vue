<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import { type BaseDialProps, type IBaseDialProps } from '../types';

const props: BaseDialProps = withDefaults(defineProps<Partial<IBaseDialProps>>(), { min: 0, max: 100, rangeColor: "#333333", rangeWidth: 14, step: 1, size: 100, textColor: "#1D1D1D", valueColor: "#1D1D1D", valueTemplate: "{string}" });

const rangePath = computed(() => {
  // return `M ${this.minX} ${this.minY} A ${this.radius} ${this.radius} 0 1 1 ${this.maxX} ${this.maxY}`;
  return ""
})

const valuePath = computed(() => {
  // return `M ${this.zeroX} ${this.zeroY} A ${this.radius} ${this.radius} 0 ${this.largeArc} ${this.sweep} ${this.valueX} ${this.valueY}`;
  return ""
})

const d_value: Ref<string | number> = ref((props.defaultValue !== undefined ? props.defaultValue : props.modelValue) ?? 50)

const onBlur = () => { }
const onClick = () => { }
const onKeyDown = () => { }
const onMouseDown = () => { }
const onMouseUp = () => { }
const onTouchStart = () => { }
const onTouchEnd = () => { }

const valueToDisplay = computed(() => typeof props.valueTemplate === 'string' ? props.valueTemplate.replace(/{value}/g, d_value.value.toString()) : typeof props.valueTemplate === 'function' ? props.valueTemplate(d_value.value) : d_value.value)

const svgClasses = computed(() => {
  return {
    "w-full h-full": props.fullWidth
  }
})
</script>

<template>
  <div class="dial-wrapper" :style="{ 'aspect-ratio': props.fullWidth ? '1/1' : undefined}">
    <svg :class="svgClasses" viewBox="0 0 100 100" role="slider" :width="size" :height="size"
      :tabindex="readonly || disabled ? -1 : tabindex" :aria-valuemin="min" :aria-valuemax="max"
      :aria-valuenow="d_value" :aria-labelledby="ariaLabelledby" :aria-label="ariaLabel" @click="onClick" @blur="onBlur"
      @keydown="onKeyDown" @mousedown="onMouseDown" @mouseup="onMouseUp" @touchstart="onTouchStart"
      @touchend="onTouchEnd">
      <path :d="rangePath" :stroke-width="rangeWidth" :stroke="rangeColor">
      </path>
      <path :d="valuePath" :stroke-width="rangeWidth" :stroke="valueColor">
      </path>
      <text v-if="showValue" :x="50" :y="57" text-anchor="middle" :fill="textColor">
        {{ valueToDisplay }}
      </text>
    </svg>

  </div>
</template>

<style scoped></style>
