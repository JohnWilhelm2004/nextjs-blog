import Head from "next/head";
import Link from "next/link";
import Design from "../../components/design";
import box from "../../components/design";
import styles from "../../components/design.module.css";

export default function reactapp() {
  return (
    <Design>
      <Head>Meine React App</Head>
      <div className={styles.box}>
        <h1>In progress</h1>
      </div>
      <h2>
        Please visit the other pages too:
        <br />
        <Link href="/posts/reactpages/underpage1">Calculator</Link>
        <Link href="/posts/reactpages/underpage2">Underpage 2</Link>
        <Link href="/posts/reactpages/underpage3">Underpage 3</Link>
      </h2>
    </Design>
  );
}
