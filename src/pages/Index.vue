<template>
  <q-page class="relative-position">
    <q-splitter v-model="lrModel" class="absolute-full">
      <template v-slot:before>
        <q-splitter v-model="tbModel" horizontal>
          <template v-slot:before>
            <q-card-section>
              <span class="text-h6">画布</span>
            </q-card-section>
            <div class="canvas">
              <ul class="timeline">
                <timeline-item
                  v-for="node in nodes"
                  v-bind:key="node.datetime"
                  :caption="node.caption"
                  value="1"
                  :datetime="node.datetime"
                />
              </ul>
            </div>
          </template>
          <template v-slot:after>
            <q-card-section>
              <span class="text-h6">数据</span>
            </q-card-section>
          </template>
        </q-splitter>
      </template>
      <template v-slot:after>
        <q-card-section>
          <span class="text-h6">画布设置</span>
          <div class="row q-gutter-xs">
            <q-input
              filled
              type="number"
              class="col"
              dense
              v-model="canvasMeta.width"
            >
              <template v-slot:prepend>
                <span class="text-caption">宽</span>
              </template>
              <template v-slot:append>
                <span class="text-caption">px</span>
              </template>
            </q-input>
            <q-input
              filled
              type="number"
              class="col"
              dense
              v-model="canvasMeta.height"
            >
              <template v-slot:prepend
                ><span class="text-caption">高</span>
              </template>
              <template v-slot:append>
                <span class="text-caption">px</span>
              </template>
            </q-input>
          </div>
          <div class="row">
            <q-toggle
              class="col"
              label="允许换行"
              left-label
              v-model="canvasMeta.isWrap"
            />
            <q-toggle
              class="col"
              label="自动高度"
              left-label
              v-model="canvasMeta.isHeightAuto"
            />
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <span class="text-h6">字体设置</span>
          <!-- <q-select
            filled
            clearable
            use-input
            hide-selected
            fill-input
            input-debounce="0"
            label="字体"
            dense
            options-dense
            v-model="textMeta.font"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-input
            filled
            type="number"
            class="col"
            dense
            v-model="textMeta.captionSize"
          >
            <template v-slot:prepend>
              <span class="text-caption">内容大小</span>
            </template>
            <template v-slot:append>
              <span class="text-caption">px</span>
            </template>
          </q-input>
          <q-input
            filled
            type="number"
            class="col"
            dense
            v-model="textMeta.datetimeSize"
          >
            <template v-slot:prepend class="text-h5">
              <span class="text-caption">日期大小</span>
            </template>
            <template v-slot:append>
              <span class="text-caption">px</span>
            </template>
          </q-input> -->
        </q-card-section>
        <q-separator />
        <q-card-section>
          <!-- <span class="text-h6">节点设置</span>
          <q-field filled dense class="cursor-pointer" v-model="model">
            <template v-slot:prepend>
              <span class="text-caption">节点序号</span>
            </template>
          </q-field>
          <q-field filled dense class="cursor-pointer" v-model="model">
            <template v-slot:prepend>
              <span class="text-caption">节点日期</span>
            </template>
            <q-popup-proxy>
              <q-date v-model="model" />
            </q-popup-proxy>
          </q-field>
          <q-select
            filled
            hide-selected
            fill-input
            input-debounce="0"
            dense
            options-dense
          >
            <template v-slot:prepend>
              <span class="text-caption">标志样式</span>
            </template>
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey"> No results </q-item-section>
              </q-item>
            </template>
          </q-select>
          <q-field filled dense class="cursor-pointer" v-model="model">
            <template v-slot:prepend>
              <span class="text-caption">标志颜色</span>
            </template>
            <q-popup-proxy>
              <q-color />
            </q-popup-proxy>
          </q-field> -->
        </q-card-section>
      </template>
    </q-splitter>
  </q-page>
</template>

<script lang="ts">
import { CanvasMeta, NodeInfo } from 'components/models';
import { defineComponent, ref } from 'vue';
import TimelineItem from 'src/components/TimelineItem.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { TimelineItem },
  setup() {
    return {
      canvasMeta: ref<CanvasMeta>({
        width: 480,
        height: 270,
        zoom: 1,
        isHeightAuto: true,
        isWrap: false,
      }),
      nodes: ref<NodeInfo[]>([
        {
          caption: 'abc',
          marker: {
            url: 'string',
            borderColor: '#000',
            fillColor: 'null',
            width: 12,
            height: 12,
          },
          font: {
            font: '',
            size: 12,
          },
          datetime: '2021/10/31',
        },
        {
          caption: 'def',
          marker: {
            url: 'string',
            borderColor: '#000',
            fillColor: 'null',
            width: 12,
            height: 12,
          },
          font: {
            font: '',
            size: 12,
          },
          datetime: '2021/1/18',
        },
      ]),
      lrModel: ref(80),
      tbModel: ref(60),
      myLocale: {
        days: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        daysShort: '日_一_二_三_四_五_六'.split('_'),
        months:
          '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
        monthsShort:
          '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split(
            '_'
          ),
        firstDayOfWeek: 1,
      },
      dateSelectProxy: true,
    };
  },
});
</script>

<style>
.canvas {
  width: calc(v-bind('canvasMeta.width') * 1px);
  height: calc(v-bind('canvasMeta.height') * 1px);
  border: solid 1px black;
  margin: 0 auto;
  padding: 20px;
}
.timeline {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
}
</style>
