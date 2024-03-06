import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./stores/pages/LandingPage.jsx";
import SpeakerPage from "./stores/pages/SpeakerPage.jsx";
import MobilesPage from "./stores/pages/MobilesPage.jsx";
import WatchesPage from "./stores/pages/WatchesPage.jsx";
import MenfashionPage from "./stores/pages/MenfashionPage.jsx";
import WomenfashionPage from "./stores/pages/WomenfashionPage.jsx";
import TvPage from "./stores/pages/TvPage.jsx";
import FridgePage from "./stores/pages/FridgePage.jsx";
import MobilesSingle from "./singles/MobilesSingle.jsx";
import UserCart from "./stores/UserCart.jsx";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilesPage />} />
        <Route path="/watches" element={<WatchesPage />} />
        <Route path="/menfashion" element={<MenfashionPage />} />
        <Route path="/womenfashion" element={<WomenfashionPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path='/mobiles/:id' element={<MobilesSingle/>}/>
        <Route path='/cart' element={<UserCart/>}/>
      </Routes>
    </div>
  );
}
