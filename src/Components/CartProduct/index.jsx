import "./styles.css";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const CartProduct = ({ currentSale, setCurrentSale, product, id, amount }) => {

  function removeCart (position){
    setCurrentSale(currentSale.filter(function (element, index){
      if(index !== position){
        return element;
      }
      toast.error('Produto Removido', {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return ''
    }))
  }


  
  return currentSale.length === 0 ? (
    <div className="allCart">
      <div className="divTextCart">
        <h2 className="textCart">Carrinho de Compras</h2>
      </div>
      <div className="div_inside_cart_text">
        <h3 className="text_empty_cart">Sua sacola está vazia</h3>
        <p className="text_empty_cart2">Adicione itens</p>
      </div>
    </div>
  ) : (
    <div className="allCart">
      <div className="divTextCart">
        <h2 className="textCart">Carrinho de Compras</h2>
      </div>
      <div className="divAllProducts">
        {currentSale.map((element, index) => (
          <div className="product" id={element.id} key={index}>
            <div className="bg_image">
              <img className="img_cart" src={element.img} alt="" />
            </div>
            <div className="all_text_cart_product">
              <div className="div_text_cart_description">
                <p className="name_product_cart">{element.name}</p>
                <p onClick={() => {removeCart(index)}} className="remove_product_cart">Remover</p>
              </div>
              <div className="div_remove_product">
                <p className="category_product_cart">{element.category}</p>
                <p className="amount_product_cart">1x</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProduct;
