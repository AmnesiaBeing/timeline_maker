<template>
  <li>
    <div class="caption">{{ caption }}</div>
    <div class="axis" />
    <div class="mark" />
    <div class="datetime">{{ datetime }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimeLineItem',
  props: {
    caption: String,
    datetime: String,
    value: Number,
  },
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
.timeline {
  display: flex;
  padding: 0;
}
.timeline li {
  display: inline-block;
  flex: v-bind(value);
  position: relative;
}
.timeline .caption {
  width: 100%;
  text-align: center;
  margin-bottom: 8px;
  font-size: 8px;
}
.timeline .datetime {
  width: 100%;
  text-align: center;
  margin-top: -10px;
  font-size: 8px;
}
.timeline .axis {
  width: 100%;
  height: 2px;
  background: black;
  position: relative;
}
.timeline .mark {
  position: relative;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid black;
  content: '';
  left: 50%;
  margin-left: -6px;
  top: 0%;
  transform: translateY(-9px);
}
.timeline .mark::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 4px solid white;
  content: '';
  left: 50%;
  margin-left: -3px;
  top: 50%;
  transform: translateY(-6.5px);
}
.timeline li:last-child .axis::after {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid black;
  content: '';
  right: -6px;
  bottom: -5px;
}
</style>
