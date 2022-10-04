import styles from "./styles.module.css";

const InputSearch = ({ filteredProducts, setFilteredProducts, products }) => {
  

  return (
    <form className={styles.divInput}>
      <input
        value={filteredProducts}
        onChange={(event) => setFilteredProducts(event.target.value)}
        className={styles.inputSearch}
        type="text"
        placeholder="Digitar Pesquisa"
      />
      <button className={styles.btnSearch}>Pesquisar</button>
    </form>
  );
};

export default InputSearch;
