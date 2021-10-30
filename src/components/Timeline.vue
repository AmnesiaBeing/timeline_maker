<template>
  <div class="canvas">
    <ul class="timeline">
      <timeline-item caption="abbrfasdfc" value="1" datetime="123" extra="aaaa" />
      <timeline-item caption="ddfasdf" value="1.25" datetime="123hadf" />
      <timeline-item caption="aqtrqwebc" value="1" datetime="13452323" />
      <timeline-item caption="aqtrqwebc" value="1" datetime="13452323" />
      <timeline-item caption="aqtrqwebc" value="1" datetime="13452323" />
      <timeline-item caption="aqtrqwebc" value="1" datetime="13452323" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimelineItem from './TimelineItem.vue';

import '@icon-park/vue-next/styles/index.css';

export default defineComponent({
  name: 'TimeLine',
  props: {},
  components: { TimelineItem },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.canvas {
  width: 680px;
  height: 240px;
  border: solid 1px black;
  margin: 0 auto;
  padding: 20px;
  display: flex;
}
.timeline {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
}
</style>
