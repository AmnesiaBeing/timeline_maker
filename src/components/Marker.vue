<template>
  <g class="light" style="cursor: pointer">
    <g style="transform: translateX(10)">
    <path
      d="M 0,-4 L -4,-4 L -2,0 Z"
      stroke="black"
      stroke-width="1"
      fill="white"
    />
    </g>
    <text x="10" y="12" text-anchor="middle" style="font-size: 2">
      10/17
    </text>
    <text x="10" y="-6" text-anchor="middle" style="font-size: 2">
      {{ title }}
    </text>
  </g>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Marker',
  props: {
    value: { type: Number },
    title: { type: String },
  },
  setup() {
    return {};
  },
});
</script>
