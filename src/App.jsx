import { meny } from "./data/meny";
import Menu from "./components/Menu";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <p className={styles.logo}>TRATTORIA 10</p>

        <div className={styles.hero}>
          <p className={styles.subtitle}>VELKOMMEN TIL BORDS</p>

          <h1>Vår meny</h1>

          <p className={styles.description}>
            God mat. Gode øyeblikk. Noe for enhver smak.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.menuHeader}>
          <div>
            <p className={styles.smallTitle}>LAGET MED KJÆRLIGHET</p>
            <h2>Oppdag våre retter</h2>
          </div>

          <p className={styles.menuCount}>10 retter på menyen</p>
        </div>

        <Menu meny={meny} />
      </main>

      <footer className={styles.footer}>
        <p>TRATTORIA 10</p>
        <p>God mat smaker enda bedre sammen.</p>
      </footer>
    </div>
  );
}

export default App;
