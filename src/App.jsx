import { Route, Routes } from "react-router-dom";
import { assets } from "./assets/assets";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} ></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
