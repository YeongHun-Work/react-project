import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "src/config/routes";

const Content = () => {
	return (
		<CContainer lg>
			<Suspense fallback={<CSpinner color="primary" />}>
				<Routes>
					{routes.map((route, idx) => {
						return (
							route.component && (
								<Route key={idx}
									path={route.path}
									name={route.name}
									element={ <route.component />}
								/>
							)
						);
					})}
					<Route path="/path" element={ <Navigate to="/dashboard" />} />
				</Routes>
			</Suspense>
		</CContainer>
	);
};

export default React.memo(Content);
