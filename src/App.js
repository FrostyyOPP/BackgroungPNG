import { Header } from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Wallpapers } from "./Pages/Wallpapers/Wallpapers";
import { Backgrounds } from "./Pages/Backgrounds/Backgrounds";
import { Pngs } from "./Pages/PNGs/Pngs";



function App() {

  return (
   
    <>
      <Header />   
      <div className="slugs">


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/wallpapers" element={<Wallpapers />}/>
        <Route path="/backgrounds" element={<Backgrounds />}/>
        <Route path="/pngs" element={<Pngs />} />
      </Routes>
      </BrowserRouter>
      </div>
    
      </>
  );
}

export default App;
