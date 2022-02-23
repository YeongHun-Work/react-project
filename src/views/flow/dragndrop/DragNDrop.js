import React, { useState, useCallback } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls, updateEdge } from "react-flow-renderer";
import { Background, MiniMap } from "react-flow-renderer";
import ControlBtns from "./ControlBtns";
import ConnectionLine from "./ConnectionLine";
import $ from "jquery";

import Sidebar from "./Sidebar";
import Provider from "./Provider";
import { Types } from "../nodetype/NodeInfo";

import "./DragNDrop.css";

const initBgColor = "#393939";

const nodeExtent = [
	[0, 0],
	[1000, 1000],
];

const translateExtent = [
	[0, 0],
	[100, 100],
];

const initialElements = [
	// { id: "1", type: "input", data: { label: "input node" }, position: { x: 10, y: 10 } }
];

const onDragOver = (event) => {
	event.preventDefault();
	event.dataTransfer.dropEffect = "move";
};

let id = 0;
const getId = () => `node_${id++}`;

const DragNDrop = () => {
	const [rfInstance, setRfInstance] = useState();
	const [reactFlowInstance, setReactFlowInstance] = useState();
	const [elements, setElements] = useState(initialElements);

	// const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onConnect = useCallback((params) => setElements((els) => addEdge({ ...params, type: "smoothstep", animated: true, style: { stroke: "#FFF", strokeWidth: 5 } }, els)), []);
	const onEdgeUpdate = (oldEdge, newConnection) => setElements((els) => updateEdge(oldEdge, newConnection, els));
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
	const onLoad = (_reactFlowInstance) => {
		setReactFlowInstance(_reactFlowInstance);
		_reactFlowInstance.fitView();
	};

	const onDrop = (event) => {
		event.preventDefault();

		if (reactFlowInstance) {
			const type = event.dataTransfer.getData("node/flow");
			const data = event.dataTransfer.getData("node/data");
			// const position = reactFlowInstance.project({ x: event.clientX, y: event.clientY });
			const position = reactFlowInstance.project({ x: event.clientX - 465, y: event.clientY - 145 });

			// console.log("target offset x: " + $(event.target.elements).offsetWidth + ", y:" + 	$(event.target.elements).offsetHeight);
			// console.log("clinet x: " + event.clientX + ", clinet y: " + event.clientY);
			// console.log("screen x: " + event.screenX + ", screen y: " + event.screenY);

			const newNode = {
				id: `node_${id++}_${type}`,
				type,
				position,
				data,
			};

			if(type === undefined || type === '') { return; }

			setElements((es) => es.concat(newNode));
		}
	};

	const [zoomOnScroll, setZoomOnScroll] = useState(false);

	return (
		<div className="dndflow">
			<ReactFlowProvider>
				<Sidebar />
				<div className="reactflow-wrapper" style={{ height: 850 }}>
					<ReactFlow
						nodeExtent={nodeExtent}
						elements={elements}
						onElementsRemove={onElementsRemove}
						nodeTypes={Types}
						onConnect={onConnect}
						onEdgeUpdate={onEdgeUpdate}
						onLoad={onLoad}
						onDrop={onDrop}
						onDragOver={onDragOver}
						zoomOnScroll={zoomOnScroll}
						style={{ background: initBgColor }}
						// connectionLineComponent={ConnectionLine}
					>
						<Background variant="dots" gap={10} size={0.4} />
						<Controls />
						{/* <ControlBtns rfInstance={rfInstance}/> */}
						<MiniMap />
					</ReactFlow>
				</div>
				<Provider />
			</ReactFlowProvider>
		</div>
	);
};

export default DragNDrop;
