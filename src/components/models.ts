export interface CanvasMeta {
  width: number;
  height: number;
  zoom: number;
  isHeightAuto: boolean;
  isWrap: boolean;
}

export interface AxisMeta {
  axisWidth: number;
  markerWidth: number;
  markerHeight: number;
}

export interface TextMeta {
  font: string;
  captionSize: number;
  datetimeSize: number;
}
