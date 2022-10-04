import "./styles.modules.css";
import Products from "../Product";

const ProductsList = ({id, product, setProduct, filteredProducts, setCurrentSale, currentSale }) => {
  return (
    <main>
      {product.map((element, index) => (
        <Products
          product={product}
          id={element.id}
          key={index}
          img={element.img}
          name={element.name}
          category={element.category}
          price={element.price}
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        />
      ))}
    </main>
  );
};

export default ProductsList;
