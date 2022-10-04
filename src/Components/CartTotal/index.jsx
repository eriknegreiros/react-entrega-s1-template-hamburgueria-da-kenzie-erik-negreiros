import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartTotal = ({ currentSale, setCurrentSale }) => {
  const removeAll = () => {
    setCurrentSale([]);

    toast.error("Todos os produtos foram removidos", {
      position: "top-center",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="all_div_cart_total">
      <div className="div_total_cart">
        <p className="total_cartTotal">Total</p>

        <span className="value_total">
          {currentSale
            .map((element) => element.price)
            .reduce((acc, va) => acc + va, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </div>
      <div className="div_btn_remove_all_products">
        <button onClick={removeAll} className="btn_remove_all_products">
          Remover Todos
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
