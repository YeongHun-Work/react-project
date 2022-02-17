import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { CAvatar } from "@coreui/react";

import imgValve from "src/assets/icon/icon-valve-01.png";

const style = {
	border: "#d50000",
	borderRadius: 10,
	background: "#FFF",
	color: "#000",
	padding: 10,
};

const nodeValve = ({ data }) => {
	return (
		<div className="border border-primary no-drag" style={style}>
			<Handle type="target" position={Position.Left} style={{ left: "-1.5%", borderRadius: 0 }} />
			<CAvatar className="me-2 text-center" src={imgValve} size="lg" />
			{/* <div className="d-block text-center">{data.text}</div> */}
			<Handle type="source" position={Position.Right} id="a" style={{ top: "30%", right: "-1.5%", borderRadius: 0 }} />
			<Handle type="source" position={Position.Right} id="C" style={{ top: "70%", right: "-1.5%", borderRadius: 0 }} />
		</div>
	);
};

export default nodeValve;
