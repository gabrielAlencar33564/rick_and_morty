import { Routes, Route, Navigate } from "react-router-dom";

export const RoutesPage = () => {
    return (
        <Routes>
            <Route path="dashboard" element/>

            <Route path="*" element={<Navigate to="/dashboard"/> }/>
        </Routes>
    );
}