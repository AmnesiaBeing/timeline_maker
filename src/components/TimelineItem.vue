<template>
  <li class="mousearea">
    <div class="axis" />
    <div class="caption">{{ caption }}<br />{{ extra }}</div>
    <triangle class="mark" theme="filled" size="12" fill="#333" />
    <div class="datetime">{{ datetime }}</div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Triangle } from '@icon-park/vue-next';

export default defineComponent({
  name: 'TimeLineItem',
  props: {
    caption: String,
    datetime: String,
    value: Number,
    extra: String,
  },
  components: { Triangle },
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
  display: block;
  flex: v-bind(value);
  position: relative;
}
.timeline .caption {
  text-align: center;
  font-size: 12px;
  left: 50%;
  bottom: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.timeline .datetime {
  text-align: center;
  font-size: 12px;
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.timeline .axis {
  width: 100%;
  height: 2px;
  background: black;
  top: 50%;
  position: absolute;
}
.timeline .mark {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
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
.timeline .mousearea:hover {
  cursor: pointer;
  background: yellow;
}
</style>
