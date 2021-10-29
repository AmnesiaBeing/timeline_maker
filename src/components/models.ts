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

export interface MarkerMeta {
  url: string;
  size: number;
  borderColor: string;
  fillColor: string;
}

export interface MarkersMeta {
  normal: MarkerMeta;
  import: MarkerMeta;
  urgent: MarkerMeta;
  minor: MarkerMeta;
}
