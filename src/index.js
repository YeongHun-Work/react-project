import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

// import App from "./App";
// import routes from "./config/routes"
import reportWebVitals from './reportWebVitals';

import DragNDrop from "./views/DragNDrop/DragNDrop";
import Layouting from "./views/Layouting/Layouting";

import "./index.css";

const routes = [
	{ path: "/drag-and-drop", component: DragNDrop },
	{ path: "/layouting", component: Layouting },
];

ReactDOM.render(
	<React.StrictMode>
		<Layouting/>
	</React.StrictMode>,
	document.getElementById('root')
);


// const Header = withRouter(({ history, location }) => {
// 	const onChange = (event) => history.push(event.target.value);

// 	return (
// 		<header>
// 			<a className="logo" href="https://github.com/wbkd/react-flow"> React Flow Dev </a>
// 			<select defaultValue={location.pathname} onChange={onChange}>
// 				{routes.map((route) => (
// 					<option value={route.path} key={route.path}>
// 						{route.path === "/" ? "overview" : route.path.substr(1, route.path.length)}
// 					</option>
// 				))}
// 			</select>
// 		</header>
// 	);
// });

// ReactDOM.render(
// 	<Router forceRefresh={true}>
// 		<Header />
// 		<Switch>
// 			{routes.map((route) => (
// 				<Route exact path={route.path} render={() => <route.component />} key={route.path} />
// 			))}
// 		</Switch>
// 	</Router>,
// 	document.getElementById("root")
// );

// ReactDOM.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
