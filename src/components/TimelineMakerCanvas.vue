<template>
  <q-card-section>
    <span class="text-h6">画布</span>
  </q-card-section>
  <div class="canvas">
    <timeline />
  </div>
</template>

<script lang="ts">
import { CanvasMeta, TextMeta } from 'components/models';
import { defineComponent, ref } from 'vue';
import Timeline from 'components/Timeline.vue';

export default defineComponent({
  name: 'TimeLineMakerCanvas',
  props: {
    canvas: {
      type,
    },
  },
  components: { Timeline },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
