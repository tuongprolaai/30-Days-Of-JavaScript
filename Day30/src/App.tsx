import AppRoutes from "./AppRoutes";
import styles from "./global/main.module.scss";

function App() {
  return (
    <>
      <div className={styles.container}>
        <AppRoutes></AppRoutes>
      </div>
    </>
  );
}

export default App;
