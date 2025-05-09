import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
//import GameRoom from "./components/game";
import './index.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="/game" element={<GameRoom />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App
