import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import LocationPage from "./pages/LocationPage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/map" element={<LocationPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
