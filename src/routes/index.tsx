import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import History from "../pages/History";
import Settings from "../pages/Settings";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}

export default AppRoutes;
