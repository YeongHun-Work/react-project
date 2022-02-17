import React, { useState, useCallback } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls } from "react-flow-renderer";
import { Background, MiniMap } from "react-flow-renderer";
import ConnectionLine from "./ConnectionLine";
import $ from "jquery";

import Sidebar from "./Sidebar";
import Provider from "./Provider";

import "./DragNDrop.css";

const nodeExtent = [
	[0, 0],
	[100, 100],
];

const initialElements = [{ id: "1", type: "input", data: { label: "input node" }, position: { x: 10, y: 10 } }];

const onDragOver = (event) => {
	event.preventDefault();
	event.dataTransfer.dropEffect = "move";
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const DragNDrop = () => {
	const [reactFlowInstance, setReactFlowInstance] = useState();
	const [elements, setElements] = useState(initialElements);

	// const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onConnect = useCallback((params) => setElements((els) => addEdge({ ...params, animated: true }, els)), []);
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
	const onLoad = (_reactFlowInstance) => {
		setReactFlowInstance(_reactFlowInstance);
		_reactFlowInstance.fitView();
	};

	const onDrop = (event) => {
		event.preventDefault();

		if (reactFlowInstance) {
			const type = event.dataTransfer.getData("application/reactflow");
			// const position = reactFlowInstance.project({ x: event.clientX, y: event.clientY });
			const position = reactFlowInstance.project({ x: event.clientX - 465, y: event.clientY - 145 });

			// console.log("target offset x: " + $(event.target.elements).offsetWidth + ", y:" + $(event.target.elements).offsetHeight);
			// console.log("clinet x: " + event.clientX + ", clinet y: " + event.clientY);
			// console.log("screen x: " + event.screenX + ", screen y: " + event.screenY);

			const newNode = {
				id: getId(),
				type,
				position,
				data: { label: `${type} node` },
			};

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
						onConnect={onConnect}
						onLoad={onLoad}
						onDrop={onDrop}
						onDragOver={onDragOver}
						zoomOnScroll={zoomOnScroll}
						// connectionLineComponent={ConnectionLine}
					>
						<Background variant="dots" gap={10} size={0.4} />
						<Controls />
						<MiniMap
							nodeColor={(node) => {
								switch (node.type) {
									case "input":
										return "#0041d0";
									case "default":
										return "#1a192b";
									case "output":
										return "#ff0072";
									default:
										return "#eee";
								}
							}}
							nodeStrokeWidth={3}
						/>
					</ReactFlow>
				</div>
				<Provider />
			</ReactFlowProvider>
		</div>
	);
};

export default DragNDrop;
