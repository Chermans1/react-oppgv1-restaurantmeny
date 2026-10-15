import styles from "./Dish.module.css";

export default function Dish({ tittel, pris, ingredienser, kategori }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.category}>{kategori}</span>
        <span className={styles.price}>{pris}</span>
      </div>

      <div className={styles.content}>
        <h3>{tittel}</h3>
        <p className={styles.ingredients}>{ingredienser}</p>
      </div>

      <div className={styles.bottom}>
        <span>✦</span>
        <p>Laget med kjærlighet</p>
      </div>
    </article>
  );
}
