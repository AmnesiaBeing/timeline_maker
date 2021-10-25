<template>
  <defs>
    <marker
      id="triangle"
      markerUnits="strokeWidth"
      markerWidth="5"
      markerHeight="4"
      refX="0"
      refY="2"
      orient="auto"
    >
      <path d="M 0 0 L 3 2 L 0 4 z" />
    </marker>
  </defs>
  <g>
    <path
      d="M 0,0 L 100%,0"
      stroke="black"
      stroke-width="1"
      fill="none"
      style="marker-end: url(#triangle)"
    />
  </g>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Axis',
  props: {
  },
  setup() {
    return {};
  },
});
</script>
