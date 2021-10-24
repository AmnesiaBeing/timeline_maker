<template>
  <defs>
    <symbol width="10" height="10" viewBox="0,0 10,10" id="mark0">
      <circle cx="5" cy="5" r="5" />
    </symbol>
    <symbol width="10" height="10" viewBox="-2,-2 14,14" id="mark1">
      <path
        d="M 0,10 L 10,10 L 5,0 Z"
        stroke="black"
        stroke-width="2"
        fill="white"
      />
    </symbol>
    <symbol width="10" height="10" viewBox="-2,-2 14,14" id="mark2">
      <path
        d="M 0,0 L 5,10 L 10,0 Z"
        stroke="black"
        stroke-width="2"
        fill="white"
      />
    </symbol>
    <symbol width="10" height="10" viewBox="-2,-2 14,14" id="mark3">
      <path
        d="M 0,10 L 10,10 L 5,0 Z"
        stroke="black"
        stroke-width="2"
        fill="white"
      />
    </symbol>
  </defs>
  <g class="light" style="cursor: pointer">
    <use
      xlink:href="#mark1"
      x="10%"
      y="0"
      style="transform: translate(-5px, -3px)"
    />
    <text x="10%" y="15" text-anchor="middle" style="font-size: 10px">
      10/17
    </text>
    <text x="10%" y="25" text-anchor="middle" style="font-size: 10px">
      {{ title }}
    </text>
  </g>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Marker',
  props: {
    value: Number,
    title: String,
  },
  setup() {
    return {};
  },
});
</script>
