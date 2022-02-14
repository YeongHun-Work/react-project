import React from "react";
import Dashboard from "src/views/dashboard/Dashboard";
import DragNDrop from "src/views/DragNDrop/DragNDrop";
import Layouting from "src/views/Layouting/Layouting";

// const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));

// const routes = [
// 	{ path: "/drag-and-drop", component: DragNDrop },
// 	{ path: "/layouting", component: Layouting },
// ];

const routes = [
	{ path: "/", name: "Home" },
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/DragNDrop", name: "DragNDrop", component: DragNDrop },
	{ path: "/Layouting", name: "Layouting", component: Layouting },
];

export default routes;
