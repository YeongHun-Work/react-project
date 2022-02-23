import React from "react";
import { Handle, Position } from "react-flow-renderer";

import imgValveWhite from "src/assets/node/node-valve-white.png";
import imgValveBlack from "src/assets/node/node-valve-black.png";

const style = {
	// border: "#d50000",
	// borderRadius: 10,
	// background: "#FFF",
	// color: "#000",
	// padding: 10,
};

const Valve = ({ data }) => {
	return (
		<div className="" style={style}>
			<Handle type="target" position={Position.Left} style={{ top: "80%", left: "-5%", borderRadius: 0 }} />
			<img src={imgValveWhite} draggable="false" alt="" style={{ width: "3vw", height: "4.5vh" }}></img>
			<Handle type="source" position={Position.Right} id="A" style={{ top: "80%", right: "-5%", borderRadius: 0 }} />
		</div>
	);
};

const ValveIcon = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgValveBlack} draggable="false" alt="" style={{ width: "2vw", height: "3.5vh" }}></img>
		</div>
	);
};

export { Valve, ValveIcon };
