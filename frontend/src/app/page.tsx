import styles from "./page.module.css";

export async function generateMetadata() {
  return {
    title: "Boiler Plate",
    description: "Description here",
  };
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <div>Home Page</div>
      </main>
    </div>
  );
}
