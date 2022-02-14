import React from "react";
// import Dashboard from "src/views/dashboard/Dashboard";
// import DragNDrop from "src/views/DragNDrop/DragNDrop";
// import Layouting from "src/views/Layouting/Layouting";

const Dashboard = React.lazy(() => import("src/views/dashboard/Dashboard"));
const DragNDrop = React.lazy(() => import("src/views/DragNDrop/DragNDrop"));
const Layouting = React.lazy(() => import("src/views/Layouting/Layouting"))

const routes = [
	{ path: "/Dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/DragNDrop", name: "DragNDrop", component: DragNDrop },
	{ path: "/Layouting", name: "Layouting", component: Layouting },
];

// const routes = [
// 	{ path: "/", name: "Home" },
// 	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
// 	{ path: "/DragNDrop", name: "DragNDrop", component: DragNDrop },
// 	{ path: "/Layouting", name: "Layouting", component: Layouting },
// ];

export default routes;
