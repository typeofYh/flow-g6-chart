import G6 from "@antv/g6";
import datas from "./data";
// 实际开发中把 window.AntVUtil 换成从 @antv/util 引入的相关模块
// replace window.AntVUtil.isObject with
// import { isObject } from "@antv/util";
// const isObject = window.AntVUtil.isObject;

const getItem = ({ id, stageName, nodeRole, status }) => ({
  id: `${id}`,
  stageName,
  nodeRole,
  status
});
const formatCharData = ({ data }) => {
  const res = {
    nodes: [{ ...getItem(data), parent: null }],
    edges: []
  };
  function addNodes({ id, flowChartList }) {
    Array.isArray(flowChartList) &&
      flowChartList.forEach((item) => {
        const edgesItem = { source: `${item.parentId}` };
        res.nodes.push(getItem(item));
        edgesItem.target = `${item.id}`;
        edgesItem.data = { status: item.status };
        res.edges.push(edgesItem);
        addNodes(item);
      });
  }
  addNodes(data);

  return res;
};

const data = formatCharData(datas);
const statusColorMap = {
  0: "rgb(170, 170, 170)",
  1: "#58b99e"
};
// 自定义节点
G6.registerNode(
  "round-rect",
  {
    drawShape: function drawShape(cfg, group) {
      const color = statusColorMap[cfg.status];
      const width = cfg.style.width;
      const stroke = color;
      const height = 60;
      // 节点
      const rect = group.addShape("rect", {
        attrs: {
          x: -width / 2,
          y: -15,
          width,
          height,
          radius: 2,
          stroke,
          lineWidth: 1.2,
          fillOpacity: 1
        },
        name: "rect-shape"
      });
      // 节点顶部
      group.addShape("rect", {
        attrs: {
          x: -width / 2,
          y: -15,
          width,
          height: 26,
          radius: 2,
          fill: stroke,
          fillOpacity: 1
        },
        name: "rect-shape"
      });
      // 节点顶部文字
      group.addShape("text", {
        attrs: {
          x: 0,
          y: -2,
          textAlign: "center",
          textBaseline: "middle",
          text: cfg.stageName,
          fill: "#fff"
        },
        name: "text-shape"
      });
      // 节点中心文字
      group.addShape("text", {
        attrs: {
          x: 0,
          y: height - 30,
          textAlign: "center",
          textBaseline: "middle",
          text: cfg.nodeRole,
          fill: stroke
        },
        name: "text-shape"
      });
      return rect;
    }
  },
  "single-node"
);
// 自定义线
G6.registerEdge("fund-polyline", {
  itemType: "edge",
  draw: function draw(cfg, group) {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;
    const Ydiff = endPoint.y - startPoint.y;

    const slope = Ydiff !== 0 ? Math.min(500 / Math.abs(Ydiff), 20) : 0;

    const cpOffset = slope > 15 ? 0 : 16;
    const offset = Ydiff < 0 ? cpOffset : -cpOffset;

    const line1EndPoint = {
      x: startPoint.x + slope,
      y: endPoint.y + offset
    };
    const line2StartPoint = {
      x: line1EndPoint.x + cpOffset,
      y: endPoint.y
    };

    // 控制点坐标
    const controlPoint = {
      x:
        ((line1EndPoint.x - startPoint.x) * (endPoint.y - startPoint.y)) /
          (line1EndPoint.y - startPoint.y) +
        startPoint.x,
      y: endPoint.y
    };

    let path = [
      ["M", startPoint.x, startPoint.y],
      ["L", line1EndPoint.x, line1EndPoint.y],
      [
        "Q",
        controlPoint.x,
        controlPoint.y,
        line2StartPoint.x,
        line2StartPoint.y
      ],
      ["L", endPoint.x, endPoint.y]
    ];

    if (Math.abs(Ydiff) <= 5) {
      path = [
        ["M", startPoint.x, startPoint.y],
        ["L", endPoint.x, endPoint.y]
      ];
    }
    // console.log(cfg, path);
    const line = group.addShape("path", {
      attrs: {
        path,
        stroke: statusColorMap[cfg.data.status],
        lineWidth: 1.2,
        endArrow: true
      },
      name: "path-shape"
    });

    return line;
  }
});

const width = 800;
const height = 300;
const graph = new G6.Graph({
  container: "container",
  width,
  height,
  layout: {
    type: "dagre",
    rankdir: "LR",
    nodesep: 20,
    ranksep: 40
  },
  fitView: false,
  modes: {
    default: ["drag-canvas"]
  },
  defaultNode: {
    type: "round-rect",
    labelCfg: {
      style: {
        fontSize: 10
      }
    },
    style: {
      width: 110
    }
  },
  defaultEdge: {
    type: "fund-polyline",
    style: {
      endArrow: {}
    }
  }
});

graph.data(data);
graph.render();
