import React, { memo, useCallback, Dispatch, FC } from "react";
import { useZoomPanHelper, OnLoadParams, Elements, FlowExportObject } from "react-flow-renderer";

const flowKey = "example-flow";

const ControlBtns = ({ rfInstance, setElements }) => {
	const { transform } = useZoomPanHelper();

	const onSave = useCallback(() => {
		console.log("onSave function");
		// if (rfInstance) {
		const flow = rfInstance.toObject();
		console.log("flowKey: " + flowKey);
		console.log("flow: " + flow);
		// }
	}, [rfInstance]);

	// const onRestore = useCallback(() => {
	// 	const restoreFlow = async () => {
	// 		const flow = await localforage.getItem(flowKey);

	// 		if (flow) {
	// 			const [x = 0, y = 0] = flow.position;
	// 			setElements(flow.elements || []);
	// 			transform({ x, y, zoom: flow.zoom || 0 });
	// 		}
	// 	};

	// 	restoreFlow();
	// }, [setElements, transform]);

	return (
		<div className="save__controls">
			<button onClick={onSave}>save</button>
			<button>restore</button>
			{/* <button onClick={onRestore}>restore</button> */}
		</div>
	);
};

export default memo(ControlBtns);
