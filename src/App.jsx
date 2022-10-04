import "./index.css";
import Header from "./Components/Header";
import ProductsList from "./Components/ProductsList";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import api from "./services/api";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState('');

  const [currentSale, setCurrentSale] = useState([]);
  
  const [cartTotal, setCartTotal] = useState(0);


  useEffect(() => {
    const params = {}
    if(filteredProducts) {
      params.name_like = filteredProducts
    }
    api.get(``, {params}).then((res) => setProducts(res.data));
  }, [filteredProducts]);

  return (
    <>
      <Header
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
        products={products}
      />
      <div className="display">
        <ProductsList setCurrentSale={setCurrentSale} product={products} setProduct={setProducts} filteredProducts={filteredProducts} currentSale={currentSale}  />
        <Cart product={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </div>
    </>
  );
};

export default App;
