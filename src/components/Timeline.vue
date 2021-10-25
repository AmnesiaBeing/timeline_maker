<template>
  <ul class="timeline">
    <li>
      <div class="caption">caption</div>
      <div class="mark" />
      <div class="datetime">datetime</div>
    </li>
    <li>
      <div class="caption">caption</div>
      <div class="mark" />
      <div class="datetime">datetime</div>
    </li>
    <li>
      <div class="caption">caption</div>
      <div class="mark" />
      <div class="datetime">datetime</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Axis from './Axis.vue';
import Marker from './Marker.vue';

export default defineComponent({
  name: 'TimeLine',
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.timeline {
  display: flex;
}
.timeline li {
  display: inline-block;
  flex: 1;
}
.timeline .caption {
  width: 100%;
  text-align: center;
}
.timeline .datetime {
  width: 100%;
  text-align: center;
}
.timeline .mark {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid red;
}
.timeline .mark::before {
  height: 2px;
  left: 0px;
  background: black;
}
.timeline .mark::after {
  height: 2px;
  right: 0px;
  background: black;
}
</style>
