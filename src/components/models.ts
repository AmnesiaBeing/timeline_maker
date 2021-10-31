export interface CanvasMeta {
  width: number;
  height: number;
  zoom: number;
  isHeightAuto: boolean;
  isWrap: boolean;
}

export interface AxisMeta {
  axisWidth: number;
}

export interface FontMeta {
  font: string;
  size: number;
}

export interface MarkerMeta {
  url: string;
  borderColor: string;
  fillColor: string;
  width: number;
  height: number;
}

export interface NodeInfo {
  caption: string;
  marker: MarkerMeta;
  font: FontMeta;
  datetime: string;
}
