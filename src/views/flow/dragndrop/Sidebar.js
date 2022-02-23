import React from "react";
import { Nodes, Icons } from "../nodetype/NodeInfo";

let posX = 0;
let posY = 0;

let originalX = 0;
let originalY = 0;

const dragStartHandler = (event, nodeType, data) => {
	const img = new Image();
	event.dataTransfer.setDragImage(img, 0, 0);

	event.dataTransfer.setData("node/flow", nodeType);
	event.dataTransfer.setData("node/data", data);
	event.dataTransfer.effectAllowed = "move";
};

const dragHandler = (event) => {
	posX = event.clientX;
	posY = event.clientY;

	originalX = event.target.offsetLeft;
	originalY = event.target.offsetTop;
};

const dragEndHandler = (event) => {
	event.target.style.left = `${originalX}px`;
	event.target.style.top = `${originalY}px`;
};

const Sidebar = () => {
	return (
		<aside>
			<div className="react-flow__node-input" onDragStart={(event) => dragStartHandler(event, "input", { label: "input node" })} draggable>
				Input Node
			</div>
			<div className="react-flow__node-default" onDragStart={(event) => dragStartHandler(event, "default", { label: "default node" })} draggable>
				Default Node
			</div>
			<div className="react-flow__node-output" onDragStart={(event) => dragStartHandler(event, "output", { label: "output node" })} draggable>
				Output Node
			</div>
			{Icons.map((Node, index) => {
				// return <div key={index} className={"react-flow__node-"+Node.name}
				return (
					<div key={index} className={"react-flow__node-default"} onDragStart={(event) => dragStartHandler(event, Node.name, { label: Node.name })} draggable>
						<Node.obj key={Node.name} />
					</div>
				);
			})}
		</aside>
	);
};

export default Sidebar;
