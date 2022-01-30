import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, Signin, Signup } from "./pages";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path={ROUTES.ROUTE_HOME} element={<Home />} />
				<Route exact path={ROUTES.ROUTE_SIGN_IN} element={<Signin />} />
				<Route exact path={ROUTES.ROUTE_SIGN_UP} element={<Signup />} />
				<Route exact path={ROUTES.ROUTE_BROWSE} element={<Browse />} />
			</Routes>
		</BrowserRouter>
	);
}
