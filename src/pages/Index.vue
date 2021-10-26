<template>
  <q-page class="relative-position">
    <q-splitter v-model="lrModel" class="absolute-full" :limits="[70, 80]">
      <template v-slot:before>
        <q-splitter v-model="tbModel" horizontal :limits="[70, 80]">
          <template v-slot:before>
            <timeline-maker-canvas />
          </template>
          <template v-slot:after>
            <timeline-maker-datasheet />
          </template>
        </q-splitter>
      </template>
      <template v-slot:after>
        <timeline-maker-sidebar />
      </template>
    </q-splitter>
  </q-page>
</template>

<script lang="ts">
import { CanvasMeta, TextMeta } from 'components/models';
import TimelineMakerCanvas from 'src/components/TimelineMakerCanvas.vue';
import TimelineMakerSidebar from 'src/components/TimelineMakerSidebar.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { TimelineMakerSidebar, TimelineMakerCanvas },
  setup() {
    const canvasMeta = ref<CanvasMeta>({
      width: 480,
      height: 270,
      zoom: 1,
      isHeightAuto: true,
      isWrap: false,
    });
    const textMeta = ref<TextMeta>({
      font: '',
      captionSize: 12,
      datetimeSize: 12,
    });

    return { canvasMeta, textMeta, lrModel: ref(70), tbModel: ref(20) };
  },
});
</script>

<style scoped></style>
