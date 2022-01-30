import { Outlet } from "react-router-dom";
import { Signin } from "../pages";
import { useAuthListener } from "../hooks";

export default function ProtectedRoutes() {
	const { user } = useAuthListener();
	return user ? <Outlet /> : <Signin />;
}
