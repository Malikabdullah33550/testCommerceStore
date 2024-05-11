import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Computers from "./components/Computers/Computers";
import Monitors from "./components/Monitors/Monitors";
import Productdetail from "./components/Productdetail/Productdetail";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Computers" element={<Computers />} />
          <Route path="/Monitors" element={<Monitors />} />
          <Route path="/product/:productName" element={<Productdetail />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
