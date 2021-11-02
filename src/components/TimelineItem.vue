<template>
  <q-item clickable :active="true" active-class="active" class="actionarea">
    <div class="axis" />
    <div class="caption">{{ caption }}</div>
    <Marker class="mark" type="triangle" :size="12" fill="#000" stroke="#eee"/>
    <div class="datetime">{{ datetime }}</div>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Marker from 'src/components/Marker.vue'

export default defineComponent({
  name: 'TimeLineItem',
  props: {
    caption: String,
    datetime: String,
    value: Number,
    active: Boolean,
  },
  components: { Marker },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.timeline .actionarea {
  color: white;
  display: block;
  flex-grow: v-bind(value);
  position: relative;
  padding: 0;
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
  transform: translateX(-50%) translateY(12px);
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
  transform: translateX(-50%) translateY(-50%);
}
.timeline .actionarea:last-child .axis::after {
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
.active {
  background: gray;
}
</style>
