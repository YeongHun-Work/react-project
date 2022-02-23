import React from "react";
import { Handle, Position } from "react-flow-renderer";

import imgCylinderLeft from "src/assets/node/node-cylinder-left.png";
import imgCylinderRight from "src/assets/node/node-cylinder-right.png";

const style = {
	// border: "#d50000",
	// borderRadius: 10,
	//background: "#FFF",
	// color: "#000",
	// padding: 10,
};

const CylinderLeft = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgCylinderLeft} alt="" draggable="false" style={{ width: "4vw", height: "2vh" }}></img>
			<Handle type="target" position={Position.Right} id="A" style={{ top: "60%", right: "-3.5%", borderRadius: 0 }} />
		</div>
	);
};

const CylinderRight = ({ data }) => {
	return (
		<div className="" style={style}>
			<Handle type="target" position={Position.Left} style={{ top: "60%", left: "-3.5%", borderRadius: 0 }} />
			<img src={imgCylinderRight} alt="" draggable="false" style={{ width: "4vw", height: "2vh" }}></img>
		</div>
	);
};

const CylinderLeftIcon = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgCylinderLeft} alt="" draggable="false" style={{ width: "4vw", height: "2vh" }}></img>
		</div>
	);
};

const CylinderRightIcon = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgCylinderRight} alt="" draggable="false" style={{ width: "4vw", height: "2vh" }}></img>
		</div>
	);
};

export { CylinderLeft, CylinderRight, CylinderLeftIcon, CylinderRightIcon };
