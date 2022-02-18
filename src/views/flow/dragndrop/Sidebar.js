import React from "react";

const onDragStart = (event, nodeType) => {
	event.dataTransfer.setData("application/reactflow", nodeType);
	event.dataTransfer.effectAllowed = "move";
};

const Sidebar = () => {
	return (
		<aside>
			<div className="react-flow__node-input" onDragStart={(event) => onDragStart(event, "input")} draggable> Input Node </div>
			<div className="react-flow__node-default" onDragStart={(event) => onDragStart(event, "default")} draggable> Default Node </div>
			<div className="react-flow__node-output" onDragStart={(event) => onDragStart(event, "output")} draggable> Output Node </div>
			<div className="react-flow__node-compressor" onDragStart={(event) => onDragStart(event, "Compressor")} draggable> Compressor Node </div>
			<div className="react-flow__node-valve" onDragStart={(event) => onDragStart(event, "Valve")} draggable> valve Node </div>
		</aside>
	);
};

export default Sidebar;
