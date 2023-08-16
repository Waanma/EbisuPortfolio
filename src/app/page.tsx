import WaveBox from "./components/waveBox";
import NavBar from "./components/navbar/navBar";
import styles from "./page.module.css";
import About from "./components/about";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <WaveBox />
      <About />
    </main>
  );
}
