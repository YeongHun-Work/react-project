import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, Controls } from "react-flow-renderer";

import Sidebar from "./Sidebar";

import "./DragNDrop.css";

const initialElements = [{ id: "1", type: "input", data: { label: "input node" }, position: { x: 250, y: 5 } }];

const onDragOver = (event) => {
	event.preventDefault();
	event.dataTransfer.dropEffect = "move";
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const DragNDrop = () => {
	const [reactFlowInstance, setReactFlowInstance] = useState();
	const [elements, setElements] = useState(initialElements);

	const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
	const onLoad = (_reactFlowInstance) => setReactFlowInstance(_reactFlowInstance);

	const onDrop = (event) => {
		event.preventDefault();

		if (reactFlowInstance) {
			const type = event.dataTransfer.getData("application/reactflow");
			const position = reactFlowInstance.project({ x: event.clientX, y: event.clientY });
			const newNode = {
				id: getId(),
				type,
				position,
				data: { label: `${type} node` },
			};

			setElements((es) => es.concat(newNode));
		}
	};

	return (
		<div className="dndflow">
			<ReactFlowProvider>
				<Sidebar />
				<div className="reactflow-wrapper" style={{height:800}}>
					<ReactFlow elements={elements} onConnect={onConnect} onElementsRemove={onElementsRemove} onLoad={onLoad} onDrop={onDrop} onDragOver={onDragOver}>
						<Controls />
					</ReactFlow>
				</div>
			</ReactFlowProvider>
		</div>
	);
};

export default DragNDrop;
