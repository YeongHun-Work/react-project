import React, { Component } from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
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

class App extends Component {
	render() {
		return (
			<HashRouter>
				<React.Suspense fallback={loading}>
					<Routes>
						<Route path="/" element={<DefaultLayout />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</React.Suspense>
			</HashRouter>
		);
	}
}
export default App;
