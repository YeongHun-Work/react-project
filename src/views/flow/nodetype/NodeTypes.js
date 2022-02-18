import Compressor from "./nodes/Compressor";
import Valve from "./nodes/Valve";
import FlowMeter from "./nodes/Flowmeter";

const NodeTypes = {
	Compressor: Compressor,
	Valve: Valve,
	FlowMeter: FlowMeter
};

export default NodeTypes;
