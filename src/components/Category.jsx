/* The code is defining a React functional component called `Category`. */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";

function Category() {
  const products = useSelector((store) => store.ProductItem);
  const { category } = useParams();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    if (category === "men") {
      const menCategories = products.filter(
        (product) =>
          product.category === "mens-shirts" ||
          product.category === "mens-shoes" ||
          product.category === "mens-watches"
      );
      setCategories(menCategories);
    }
    if (category === "women") {
      const womenCategories = products.filter(
        (product) =>
          product.category === "tops" ||
          product.category === "womens-dresses" ||
          product.category === "womens-shoes" ||
          product.category === "womens-watches" ||
          product.category === "womens-bags"
      );
      setCategories(womenCategories);
    }
    if (category === "automotive") {
      const automotiveCategories = products.filter(
        (product) =>
          product.category === "automotive" || product.category === "motorcycle"
      );
      setCategories(automotiveCategories);
    }
    if (category === "homeLiving") {
      const homeLivingCategories = products.filter(
        (product) =>
          product.category === "home-decoration" ||
          product.category === "furniture" ||
          product.category === "lighting"
      );
      setCategories(homeLivingCategories);
    }
    if (category === "beauty") {
      const beautyCategories = products.filter(
        (product) =>
          product.category === "fragrances" ||
          product.category === "skincare" ||
          product.category === "sunglasses" ||
          product.category === "womens-jewellery"
      );
      setCategories(beautyCategories);
    }
    if (category === "electronics") {
      const electronicsCategories = products.filter(
        (product) =>
          product.category === "smartphones" || product.category === "laptops"
      );
      setCategories(electronicsCategories);
    }
  }, [category]);
  return (
    <div className="homeItems">
      {categories.map((categorie) => (
        <HomeItem key={categorie.id} product={categorie} />
      ))}
    </div>
  );
}

export default Category;
