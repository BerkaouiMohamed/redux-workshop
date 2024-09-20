import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import { fetchProducts } from "./redux/products/productsActions";
import { useEffect } from "react";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Admin from "./pages/Admin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={1000} theme="light" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<Admin />} />


      </Routes>
    </div>
  );
}

export default App;
