<template>
  <ul class="timeline">
    <timeline-item caption="abc" value="1" datetime="123"/>
    <timeline-item caption="abc" value="1.25" datetime="123"/>
    <timeline-item caption="abc" value="1" datetime="123"/>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimelineItem from './TimelineItem.vue';

export default defineComponent({
  name: 'TimeLine',
  props: {},
  components: {TimelineItem},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.timeline {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
</style>
