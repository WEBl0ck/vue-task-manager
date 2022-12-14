<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#34c759",
  },
  progress: {
    type: Number,
    default: 10,
  },
});

const circleDynamicStyles = computed(() => {
  const size = 32;
  const strokeWidth = 5;
  const center = size / 2;
  const radius = 13.2;
  const arcLength = 2 * Math.PI * radius;
  const arcOffset = arcLength * ((100 - props.progress) / 100);

  const dynamicStyles = {
    strokeDasharray: arcLength,
    strokeDashoffset: arcOffset,
    cx: `${center}px`,
    cy: `${center}px`,
    r: radius,
    strokeWidth: strokeWidth,
  };

  return dynamicStyles;
});
</script>

<template>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="svg-indicator" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_iii_82_2)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16ZM5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16Z"
        fill="black"
        fill-opacity="0.05"
      />
    </g>
    <circle :style="circleDynamicStyles" class="svg-indicator-indication" :stroke="props.color" />
    <defs>
      <filter
        id="filter0_iii_82_2"
        x="0"
        y="0"
        width="32"
        height="32"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_82_2" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
        <feBlend mode="normal" in2="effect1_innerShadow_82_2" result="effect2_innerShadow_82_2" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0" />
        <feBlend mode="normal" in2="effect2_innerShadow_82_2" result="effect3_innerShadow_82_2" />
      </filter>
    </defs>
  </svg>
</template>

<style scoped>
.svg-indicator {
  transform: rotate(-90deg);
}
.svg-indicator-indication {
  fill: transparent;
  stroke-linecap: round;
}
</style>
