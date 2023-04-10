import styles from "./design.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Design({ children }) {
  return (
    <div>
      <Head>
        <title>In progress</title>
      </Head>
      <div className={styles.box}>
        <h1 className={styles.title}>In progress</h1>
      </div>
      <div className={styles.container}>
        <h2>
          Please visit the other pages too:
          <br />
          <Link href="/posts/reactpages/underpage1">Underpage 1</Link>
          <Link href="/posts/reactpages/underpage2">Underpage 2</Link>
          <Link href="/posts/reactpages/underpage3">Underpage 3</Link>
        </h2>
      </div>
      <div className={styles.footer}>
        <h2>
          Here you can go back:
          <Link href="/">Homescreen</Link>
        </h2>
      </div>
    </div>
  );
}
