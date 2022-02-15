import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
// import { HashRouter, Routes, Route } from "react-router-dom";
import "src/layout/_style.scss";

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("src/layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("src/views/pages/login/Login"));
const Register = React.lazy(() => import("src/views/pages/register/Register"));
const Page404 = React.lazy(() => import("src/views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("src/views/pages/page500/Page500"));

class App extends Component {
	render() {
		return (
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
		);
	}
}

// class App extends Component {
// 	render() {
// 		return (
// 			<HashRouter>
// 				<React.Suspense fallback={loading}>
// 					<Routes>
// 						<Route path="/" element={<DefaultLayout />} />
// 						<Route path="/register" element={<Register/>} />
// 						<Route path="/404" element={<Page404 />} />
// 						<Route path="/500" element={<Page500 />} />
// 						<Route path="/login" element={<Login />} />
// 					</Routes>
// 				</React.Suspense>
// 			</HashRouter>
// 		);
// 	}
// }

export default App;
