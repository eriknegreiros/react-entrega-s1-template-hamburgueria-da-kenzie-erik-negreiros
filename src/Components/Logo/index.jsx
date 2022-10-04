import styles from './styles.module.css' 
import img from '../../assets/logo.png'

const Logo = () => {
  return (
    <div>
      <img className={styles.imgLogo}  src={img} alt="Logo Burger Kenzie" />
    </div>
  );
};

export default Logo;
