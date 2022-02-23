import { Compressor, CompressorIcon, CompressorLabel } from "./nodes/Compressor";
import { Valve, ValveIcon } from "./nodes/Valve";
import { FlowmeterCircle, FlowmeterBar, FlowmeterCircleIcon, FlowmeterBarIcon } from "./nodes/Flowmeter";
import { CylinderLeft, CylinderRight, CylinderLeftIcon, CylinderRightIcon } from "./nodes/Cylinder";

const Nodes = [
	{ name : "Compressor", obj: Compressor },
	{ name : "CompressorLabel", obj: CompressorLabel },
	{ name : "Valve", obj: Valve },
	{ name : "FlowmeterCircle", obj: FlowmeterCircle },
	{ name : "FlowmeterBar", obj: FlowmeterBar },
	{ name : "CylinderLeft", obj: CylinderLeft },
	{ name : "CylinderRight", obj: CylinderRight },
];

const Icons = [
	{ name : "Compressor", obj: CompressorIcon },
	{ name : "CompressorLabel", obj: CompressorLabel },
	{ name : "Valve", obj: ValveIcon },
	{ name : "FlowmeterCircle", obj: FlowmeterCircleIcon },
	{ name : "FlowmeterBar", obj: FlowmeterBarIcon },
	{ name : "CylinderLeft", obj: CylinderLeftIcon },
	{ name : "CylinderRight", obj: CylinderRightIcon },
];

const Types = {
	Compressor: Compressor,
	CompressorLabel: CompressorLabel,
	Valve: Valve,
	FlowmeterCircle: FlowmeterCircle,
	FlowmeterBar: FlowmeterBar,
	CylinderLeft: CylinderLeft,
	CylinderRight: CylinderRight
};

export { Nodes, Icons, Types };
