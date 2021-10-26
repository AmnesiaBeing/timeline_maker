<template>
  <q-card-section>
    <q-table title="数据" :rows="rows" :columns="columns" row-key="name" dense />
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  {
    name: 'index',
    label: '#',
    align: 'center',
    field: 'index',
    sortable: true,
  },
  {
    name: 'label',
    align: 'left',
    label: '事件名',
    field: 'label',
    sortable: true,
  },
  { name: 'datetime', label: '时间节点', field: 'datetime', sortable: true },
  { name: 'type', label: '类型', field: 'type', sortable: true },
];

const rows = [
  {
    label: '事件1',
    datetime: 123456,
    type: 'abc',
  },
  {
    label: '事件1',
    datetime: 123456,
    type: 'edf',
  },
  {
    label: '事件1',
    datetime: 123456,
    type: 'fasd',
  },
];

export default defineComponent({
  name: 'TimeLineMakerDatasheet',
  props: {},
  components: {},
  setup() {
    return { columns, rows };
  },
});
</script>

<style scoped></style>
