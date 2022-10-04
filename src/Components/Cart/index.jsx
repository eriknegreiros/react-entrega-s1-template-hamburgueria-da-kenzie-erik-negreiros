import './styles.css' 
import CartProduct from '../CartProduct'
import CartTotal from '../CartTotal'

const Cart = ({currentSale, setCurrentSale, product}) => {
    return(
        <aside>
            
            <CartProduct currentSale={currentSale} setCurrentSale= {setCurrentSale} product={product}/>
            {
                currentSale.length > 0 ? (
                <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale}/>
                ) : ''
            }   

        
        </aside>
    )
}

export default Cart