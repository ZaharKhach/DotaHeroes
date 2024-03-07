import HomePage from "./layout/HomePage";
import HeroesPage from "./layout/HeroesPage";
import SingleHeroPage from "./layout/SingleHeroPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/heroes" element={<HeroesPage />}></Route>
                <Route path="/heroes/:id" element={<SingleHeroPage/>}></Route>
            </Routes>
    )
}
export default App;