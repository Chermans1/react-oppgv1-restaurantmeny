import Dish from "./Dish";
import styles from "./Menu.module.css";

export default function Menu({ meny }) {
  return (
    <div className={styles.menu}>
      {meny.map((rett) => (
        <Dish key={rett.id} {...rett} />
      ))}
    </div>
  );
}
