import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import StructurePage from "./pages/StructurePage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/map" element={<LocationPage />} />
                    <Route path="/struktur" element={<StructurePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
