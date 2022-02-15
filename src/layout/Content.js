import React, { Suspense } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
// import { Routes, Route, Navigate } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "src/config/routes";

const Content = () => {
	return (
		<Suspense fallback={<CSpinner color="primary" />}>
			<Switch>
				{routes.map((route, idx) => {
					return (
						route.component && (
							<Route
								key={idx}
								path={route.path}
								exact={route.exact}
								name={route.name}
								render={(props) => (
									<>
										<route.component {...props} />
									</>
								)}
							/>
						)
					);
				})}
				<Redirect from="/" to="/dashboard" />
			</Switch>
		</Suspense>
	);
};

// const Content = () => {
// 	return (
// 		<CContainer lg>
// 			<Suspense fallback={<CSpinner color="primary" />}>
// 				<Routes>
// 					{routes.map((route, idx) => {
// 						return route.component && <Route key={idx} path={route.path} name={route.name} element={<route.component />} />;
// 					})}
// 					<Route path="/" element={<Navigate to="/dashboard" replace />} />
// 				</Routes>
// 			</Suspense>
// 		</CContainer>
// 	);
// };

export default React.memo(Content);
