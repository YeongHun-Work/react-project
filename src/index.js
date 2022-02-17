import "react-app-polyfill/stable";
import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "src/config/serviceWorker";
import store from "src/config/store";
// import App from "src/views/App";

import "src/layout/_style.scss";

// Containers
const DefaultLayout = React.lazy(() => import("src/layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("src/views/pages/login/Login"));
const Register = React.lazy(() => import("src/views/pages/register/Register"));
const Page404 = React.lazy(() => import("src/views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("src/views/pages/page500/Page500"));

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<React.Suspense fallback={loading}>
				<Switch>
					<Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
					<Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
					<Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
					<Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
					<Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
				</Switch>
			</React.Suspense>
		</HashRouter>
	</Provider>,
	document.getElementById("root")
);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
