import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import LocationPage from "./pages/LocationPage.jsx";
import StructurePage from "./pages/StructurePage.jsx";
import LapakPage from "./pages/LapakPage.jsx";
import ProfilPage from "./pages/ProfilPage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/map" element={<LocationPage />} />
                    <Route path="/struktur" element={<StructurePage />}/>
                    <Route path="/lapak" element={<LapakPage />} />
                    <Route path="/profil" element={<ProfilPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
