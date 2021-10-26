<template>
  <q-card-section>
    <span class="text-h6">画布设置</span>
    <div class="row q-gutter-xs">
      <q-select
        filled
        clearable
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        label="宽"
        class="col"
        dense
        options-dense
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
      <q-select
        filled
        clearable
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        label="高"
        class="col"
        dense
        options-dense
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey"> No results </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    <q-toggle label="允许换行" left-label />
  </q-card-section>
  <q-separator />
  <q-card-section>
    <span class="text-h6">字体设置</span>
    <q-select
      filled
      clearable
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      label="字体"
      dense
      options-dense
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-select
      filled
      clearable
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      label="标签大小"
      dense
      options-dense
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
    <q-select
      filled
      clearable
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      label="日期大小"
      dense
      options-dense
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey"> No results </q-item-section>
        </q-item>
      </template>
    </q-select>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimeLineMakerSideBar',
  props: {},
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
