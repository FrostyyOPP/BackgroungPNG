import { Header } from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Wallpapers } from "./Pages/Wallpapers/Wallpapers";


function App() {

  return (
   
    <div className="App">
      <Header />   


      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/wallpapers" element={<Wallpapers />}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
