import { useDispatch } from "react-redux";
import { setProductItem } from "./store/index";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeItems from "./components/HomeItems";
import Loader from "./components/Loader";

function App() {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoader(true);
    fetch("https://dummyjson.com/products")
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
      <HomeItems />
      <Footer />
    </>
  );
}

export default App;
