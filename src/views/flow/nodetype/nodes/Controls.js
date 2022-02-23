import React from "react";
import { Handle, Position } from "react-flow-renderer";

import imgLabel from "src/assets/node/label/Asset 14.png";

const style = {
	// border: "#d50000",
	// borderRadius: 10,
	//background: "#FFF",
	// color: "#000",
	// padding: 10,
};

const ControlsLabel = ({ data }) => {
	return (
		<div className="" style={style}>
			<div id="group_23" visibility="visible" >
				{/* <image id="image_24" x="730" y="200" width="254" height="172" xlink:href="img/Asset%2024_001.png" opacity="1" preserveAspectRatio="none" visibility="inherit" transform="rotate(0 0 0)" /> */}
				<img src={imgLabel} alt="" draggable="false" style={{ width: "8vw", height: "10vh" }}></img>
			</div>
		</div>
	);
};


export { ControlsLabel };
