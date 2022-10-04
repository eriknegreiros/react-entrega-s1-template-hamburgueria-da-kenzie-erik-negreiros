import "./styles.modules.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = ({
  product,
  id,
  img,
  name,
  category,
  price,
  setCurrentSale,
  currentSale,
}) => {
  function handleClick(id) {
    const findedProduct = product.find((element) =>
      element.id === id
    );
    currentSale.includes(findedProduct)
    
    setCurrentSale([...currentSale, findedProduct]);
  }

  return (
    <>
      <div className="card" id={id}>
        <div className="container_img">
          <img className="img_zoom" src={img} alt="Hamburguer" />
        </div>
        <div className="container_info">
          <h1 className="name_product">{name}</h1>
          <p className="category_product">{category}</p>
          <p className="price_product">
            {price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            onClick={() => {
              toast.success("Produto Adicionado", {
                position: "top-center",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
              });
              handleClick(id);
            }}
            className="btn_add_cart"
          >
            <ToastContainer
              theme="dark"
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
