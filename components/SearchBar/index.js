import styles from "./Search.module.css";

const SearchBar = ({ rest }) => {
  return (
    <div className={styles.coin_search}>
      <input
        type="text"
        className={styles.coin_input}
        {...rest}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
