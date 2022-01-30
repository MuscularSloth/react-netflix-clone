import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import ProtectedRoutes from "./helpers/ProtectedRoutes";
import { Home, Browse, Signin, Signup } from "./pages";

export default function App() {
	// console.log(user);

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={ROUTES.ROUTE_HOME} element={<Home />} />
				<Route exact path={ROUTES.ROUTE_SIGN_IN} element={<Signin />} />
				<Route exact path={ROUTES.ROUTE_SIGN_UP} element={<Signup />} />
				<Route element={<ProtectedRoutes />}>
					<Route exact path={ROUTES.ROUTE_BROWSE} element={<Browse />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
