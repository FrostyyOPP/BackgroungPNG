import { Header } from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";

function App() {
  return (
    
    <div className="App">
      <Header />   


      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
