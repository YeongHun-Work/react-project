import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { CAvatar } from "@coreui/react";

import imgCompressor from "src/assets/icon/icons-compressor.png";

const style = {
	border: "#d50000",
	borderRadius: 10,
	background: "#FFF",
	color: "#000",
	padding: 10,
};

const nodeCompressor = ({ data }) => {
	return (
		<div className="border border-primary no-drag" style={style}>
			<Handle type="target" position={Position.Left} style={{ left: "-1.5%", borderRadius: 0 }} />
			<CAvatar className="me-2" src={imgCompressor} size="lg" />
			{/* <div className="d-inline">{data.text}</div> */}
			<Handle type="source" position={Position.Right} id="a" style={{ top: "30%", right: "-1.5%", borderRadius: 0 }} />
			<Handle type="source" position={Position.Right} id="C" style={{ top: "70%", right: "-1.5%", borderRadius: 0 }} />
		</div>
	);
};

export default nodeCompressor;