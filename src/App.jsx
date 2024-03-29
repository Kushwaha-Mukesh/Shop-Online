import { useDispatch } from "react-redux";
import { setProductItem } from "./store/index";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import { Outlet } from "react-router-dom";

function App() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setProductItem(data.products));
        setLoader(false);
      });
  }, []);
  return (
    <>
      <Header />
      {loader && <Loader />}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
