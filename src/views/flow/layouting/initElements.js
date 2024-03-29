const position = { x: 0, y: 0 };

// 파일이든 DB든 외부로 데이터를 빼내는 방법을 찾아야함
// const fs = require('fs');
// const data = fs.readFileSync("node.setting");

const initElements = [
	{ id: "1", type: "input", data: { label: "input" }, position },
	{ id: "2", data: { label: "node 2" }, position },
	{ id: "2a", data: { label: "node 2a" }, position },
	{ id: "2b", data: { label: "node 2b" }, position },
	{ id: "2c", data: { label: "node 2c" }, position },
	{ id: "2d", data: { label: "node 2d" }, position },
	// { id: "3", data: { label: "node 3", text: 'A custom node' }, position },
	{ id: "3", data: { label: "A custom node" }, position },
	{ id: "4", data: { label: "node 4" }, position },
	{ id: "5", data: { label: "node 5" }, position },
	{ id: "6", type: "output", data: { label: "output" }, position },
	{ id: "7", type: "output", data: { label: "output" }, position: { x: 400, y: 450 } },
	{ id: "8", type: "special", data: { text: "A custom node" }, position: { x: 450, y: 500 } },

	{ id: "e12", source: "1", target: "2", type: "smoothstep", animated: true },
	{ id: "e13", source: "1", target: "3", type: "smoothstep", animated: true },
	{ id: "e22a", source: "2", target: "2a", type: "smoothstep", animated: true },
	{ id: "e22b", source: "2", target: "2b", type: "smoothstep", animated: true },
	{ id: "e22c", source: "2", target: "2c", type: "smoothstep", animated: true },
	{ id: "e2c2d", source: "2c", target: "2d", type: "smoothstep", animated: true },
	{ id: "e45", source: "4", target: "5", type: "step", animated: true },
	{ id: "e56", source: "5", target: "6", type: "step", animated: true },
	{ id: "e57", source: "5", target: "7", type: "step", style: { stroke: "red" }, animated: true },
];

export default initElements;
