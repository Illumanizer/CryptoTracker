import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
// import "./styles/App.css"


const App = () => {
    return(
      <Router>
      <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/>
        <Route path='/coins/:id' element={<CoinDetails/>}/>
        <Route path='/exchanges' element={<Exchanges/>}/>
        </Routes>
        <Footer/>
      </Router>
    )
  
};

export default App;
