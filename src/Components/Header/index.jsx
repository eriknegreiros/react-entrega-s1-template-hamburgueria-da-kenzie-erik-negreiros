import styles from './styles.module.css' 
import '../../styles/globalStyles.css'
import InputSearch from '../InputSearch';
import Logo from '../Logo';



const Header = ({filteredProducts, setFilteredProducts, products}) => {

    return(
        <header className={styles.headerContainer}>
            <Logo/>
            <InputSearch filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} products={products} />
        </header>
    )


};


export default Header
