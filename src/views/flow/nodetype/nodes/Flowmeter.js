import React from "react";
import { Handle, Position } from "react-flow-renderer";

import imgFlowmeterCircle from "src/assets/node/node-flowmeter-circle.png";
import imgFlowmeterBar from "src/assets/node/node-flowmeter-bar.png";

const style = {
	// border: "#d50000",
	// borderRadius: 10,
	// background: "#FFF",
	color: "#000",
	// padding: 10,
};

const FlowmeterCircle = ({ data }) => {
	return (
		<div className="" style={style}>
			<Handle type="target" position={Position.Left} style={{ top: "85%", left: "-3%", borderRadius: 0 }} />
			<img src={imgFlowmeterCircle} alt="" draggable="false" style={{ width: "3vw", height: "4vh" }}></img>
			<Handle type="source" position={Position.Right} id="A" style={{ top: "85%", right: "-3%", borderRadius: 0 }} />
		</div>
	);
};

const FlowmeterBar = ({ data }) => {
	return (
		<div className="" style={style}>
			<Handle type="target" position={Position.Left} style={{ top: "60%", left: "-3%", borderRadius: 0 }} />
			<img src={imgFlowmeterBar} alt="" draggable="false" style={{ width: "4vw", height: "2vh" }}></img>
			<Handle type="source" position={Position.Right} id="A" style={{ top: "60%", right: "-3%", borderRadius: 0 }} />
		</div>
	);
};

const FlowmeterCircleIcon = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgFlowmeterCircle} alt="" draggable="false" style={{ width: "3vw", height: "4vh" }}></img>
		</div>
	);
};

const FlowmeterBarIcon = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgFlowmeterBar} alt="" draggable="false" style={{ width: "4vw", height: "2vh" }}></img>
		</div>
	);
};

export { FlowmeterCircle, FlowmeterBar, FlowmeterCircleIcon, FlowmeterBarIcon };
