import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import FetchData from "./components/fetchData";
import Carts from "./components/Carts";
import Login from "./components/Login";
import { Signup } from "./components/Signup";
import { CheckOut } from "./components/checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<FetchData />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
