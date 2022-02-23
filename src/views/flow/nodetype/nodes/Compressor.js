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
			<g id="group_23" visibility="visible">
				{/* <image id="image_24" x="730" y="200" width="254" height="172" xlink:href="img/Asset%2024_001.png" opacity="1" preserveAspectRatio="none" visibility="inherit" transform="rotate(0 0 0)" /> */}
				<img src={imgCompressorLabel} alt="" draggable="false" style={{ width: "730", height: "254" }}></img>
				<g id="text_102" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="27" x="773" y="229">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="15.08357pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="20">
								전류
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_103" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="27" x="773" y="270">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="15.08357pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="20">
								전압
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_104" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="27" x="773" y="310">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="15.08357pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="20">
								공압
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_105" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="18" height="19" x="913" y="235">
						<text x="9" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="10.6717pt" font-style="normal" font-weight="bold">
							<tspan x="9" y="13">
								V
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_106" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="18" height="19" x="913" y="276">
						<text x="9" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="10.6717pt" font-style="normal" font-weight="bold">
							<tspan x="9" y="13">
								A
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_107" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="19" x="898" y="316">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="10.6717pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="13">
								Bar
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_108" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="27" x="852" y="229">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="15.50189pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="20">
								###
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_109" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="27" x="852" y="270">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="15.50189pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="20">
								###
							</tspan>
						</text>
					</svg>
				</g>
				<g id="text_110" visibility="inherit" transform="rotate(0 0 0)">
					<svg width="49" height="27" x="852" y="310">
						<text x="24.5" transform="translate(0, 0) " text-anchor="middle" font-family="Arial" font-size="15.50189pt" font-style="normal" font-weight="bold">
							<tspan x="24.5" y="20">
								###
							</tspan>
						</text>
					</svg>
				</g>
			</g>
		</div>
	);
};

export { Compressor, CompressorIcon, CompressorLabel };
