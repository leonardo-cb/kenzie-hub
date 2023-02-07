import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
            <Route path="*" element={<LoginPage />}/>
        </Routes>
    )
}