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

export class NodeInfo {
  caption: string;
  marker!: MarkerMeta;
  font!: FontMeta;
  datetime: string;

  constructor(caption: string, datetime: string) {
    this.caption = caption;
    this.datetime = datetime;
  }
}

export class NodeInfos {
  nodes: Array<NodeInfo>;
  curNode: NodeInfo | null;

  constructor() {
    this.nodes = new Array<NodeInfo>();
    this.curNode = null;
  }

  add(caption: string, datetime: string) {
    this.nodes.push(new NodeInfo(caption, datetime));
  }

  active(cur: NodeInfo) {
    this.curNode = cur;
  }
}
