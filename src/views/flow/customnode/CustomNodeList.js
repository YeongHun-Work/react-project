import React from "react";
import Image from "react-bootstrap/Image";
import ReactFlow, { Handle, addEdge, Position, Controls } from "react-flow-renderer";
import { CAvatar } from "@coreui/react";

import nodeValve from "../nodetype/nodes/Valve";

import "./CustomNode.scss";

const nodeCompressorType02 = {
	border: "#d50000",
	borderRadius: 10,
	color: "#000",
	padding: 10,
};

const customNodeTwo = {
	background: "#ff80ab",
	color: "#FFF",
	padding: 10,
};

const CustomNodeCompressorType02 = ({ data }) => {
	return (
		<div className="border border-primary" style={nodeCompressorType02}>
			<Handle type="target" position={Position.Left} style={{ left: "-1%", borderRadius: 0 }} />
			<div className="d-inline">{data.text}</div>
			<Handle type="source" position={Position.Right} id="a" style={{ top: "30%", right: "-1%", borderRadius: 0 }} />
			<Handle type="source" position={Position.Right} id="b" style={{ top: "50%", right: "-1%", borderRadius: 0 }} />
			<Handle type="source" position={Position.Right} id="C" style={{ top: "70%", right: "-1%", borderRadius: 0 }} />
		</div>
	);
};

const CustomNodeComponentTwo = ({ data }) => {
	return (
		<div style={customNodeTwo}>
			<Handle type="target" position={Position.Left} style={{ borderRadius: 0 }} />
			<div>{data.text}</div>
			<div>{data.column}</div>
			<Handle type="source" position={Position.Right} id="a" style={{ top: "30%", borderRadius: 0 }} />
			<Handle type="source" position={Position.Right} id="b" style={{ top: "70%", borderRadius: 0 }} />
		</div>
	);
};

const nodeTypes = {
	compressorType02: CustomNodeCompressorType02,
	crazy: CustomNodeComponentTwo,
};

export default nodeTypes;
