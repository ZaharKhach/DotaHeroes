import HomePage from "./layout/HomePage";
import HeroesPage from "./layout/HeroesPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/heroes" element={<HeroesPage />}></Route>
            </Routes>
        </Router>
    )
}
export default App;