import React from "react";
import { Handle, Position } from "react-flow-renderer";

import imgCompressor from "src/assets/node/node-air-compressor.png";
import imgCompressorLabel from "src/assets/node/label/Asset 24_001.png";

const style = {
	// border: "#d50000",
	// borderRadius: 10,
	//background: "#FFF",
	// color: "#000",
	// padding: 10,
};

const Compressor = ({ data }) => {
	return (
		<div className="" style={style}>
			{/* <Handle type="target" position={Position.Left} style={{ left: "-1.5%", borderRadius: 0 }} /> */}
			<img src={imgCompressor} alt="" draggable="false" style={{ width: "5vw", height: "8vh" }}></img>
			<Handle type="source" position={Position.Right} id="A" style={{ top: "68%", right: "2%", borderRadius: 0 }} />
		</div>
	);
};

const CompressorIcon = ({ data }) => {
	return (
		<div className="" style={style}>
			<img src={imgCompressor} alt="" draggable="false" style={{ width: "3vw", height: "5vh" }}></img>
		</div>
	);
};

const CompressorLabel = ({ data }) => {
	return (
		<div className="" style={style}>
			<div id="group_23" visibility="visible" >
				<img src={imgCompressorLabel} alt="" draggable="false" style={{ width: "8vw", height: "10vh" }}></img>
			</div>
		</div>
	);
};

export { Compressor, CompressorIcon, CompressorLabel };
