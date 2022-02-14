import React, { useState } from "react";
import ReactFlow, { ReactFlowProvider, addEdge, removeElements, isNode, Position } from "react-flow-renderer";
import { Controls, ControlButton } from "react-flow-renderer";
import dagre from "dagre";

import initElements from "./initElements";
import "./Layouting.css";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeExtent = [
	[0, 0],
	[1000, 1000],
];

const Layouting = () => {
	const [elements, setElements] = useState(initElements);
	const onConnect = (params) => setElements((els) => addEdge(params, els));
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

	const onLayout = (direction) => {
		const isHorizontal = direction === "TB";
		dagreGraph.setGraph({ rankdir: direction });

		elements.forEach((el) => {
			if (isNode(el)) {
				dagreGraph.setNode(el.id, { width: 150, height: 50 });
			} else {
				dagreGraph.setEdge(el.source, el.target);
			}
		});

		dagre.layout(dagreGraph);

		const layoutedElements = elements.map((el) => {
			if (isNode(el)) {
				const nodeWithPosition = dagreGraph.node(el.id);
				el.targetPosition = Position.Left;
				el.sourcePosition = Position.Right;
				el.position = { x: nodeWithPosition.x + Math.random() / 1000, y: nodeWithPosition.y };
			}
			return el;
		});

		setElements(layoutedElements);
	};

	return (
		<div className="layoutflow" style={{ height: 1000 }}>
			<ReactFlowProvider>
				<ReactFlow
					elements={elements}
					onConnect={onConnect}
					onElementsRemove={onElementsRemove}
					nodeExtent={nodeExtent}
					onLoad={() => {
						onLayout("LR");
					}}
				>
					<Controls>
						<ControlButton onClick={() => console.log("action")}>
						</ControlButton>
						<ControlButton onClick={() => console.log("another action")}>
						</ControlButton>
					</Controls>
				</ReactFlow>
				{/* <div className="controls">
					<button onClick={() => onLayout("TB")} style={{ marginRight: 10 }}>
						vertical layout
					</button>
					<button onClick={() => onLayout("LR")}>horizontal layout</button>
				</div> */}
			</ReactFlowProvider>
		</div>
	);
};

export default Layouting;
