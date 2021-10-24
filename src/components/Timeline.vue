<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    height="100"
    width="600"
    viewBox="0 -50 600 100"
  >
    <Axis />
    <g>
      <Marker :title="abc" :value="123" />
      <Marker :title="abc" :value="123" />
      <Marker :title="abc" :value="123" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Axis from './Axis.vue';
import Marker from './Marker.vue';

export default defineComponent({
  name: 'TimeLine',
  props: {},
  components: { Axis, Marker },
  setup() {
    return {};
  },
});
</script>
