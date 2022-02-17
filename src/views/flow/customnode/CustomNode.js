import React, { useState, useCallback } from "react";
import Image from "react-bootstrap/Image";

import ReactFlow, { Handle, addEdge, Position, Controls } from "react-flow-renderer";

import nodeTypes from "./CustomNodeList.js";

const initialElements = [
	{ id: "1", type: "Compressor", data: { text: "compressor 1" }, position: { x: 100, y: 100 } },
	{ id: "5", type: "Valve", data: { text: "valve" }, position: { x: 100, y: 100 } },
	{ id: "2", type: "crazy", data: { text: "A custom node", column: "test" }, position: { x: 150, y: 150 } },
	{ id: "3", type: "compressorType02", data: { text: "compressor 2" }, position: { x: 200, y: 200 } },
	{ id: "4", type: "input", data: { label: "input", text: "test" }, position: { x: 120, y: 120 } },
];

const CustomNode = () => {
	const [elements, setElements] = useState(initialElements);
	// const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onConnect = useCallback((params) => setElements((els) => addEdge({ ...params, type: "step", animated: true, arrowHeadType: "arrow" }, els)), []);

	return (
		<div name="test" style={{ height: "400px", width: "400px" }}>
			<div style={{ height: "70vh", width: "70vw" }}>
				<ReactFlow elements={elements} nodeTypes={nodeTypes} onConnect={onConnect}>
					<Controls />
				</ReactFlow>
			</div>
		</div>
	);
};
export default CustomNode;
