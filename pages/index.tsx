import Head from "next/head";
import { ComingSoon } from "../components/ComingSoon";
import styles from "../styles/Home.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JY Fernandez | Portfolio</title>
        <meta name="description" content="JY Fernandez | Portfolio" />
        <link rel="icon" href="/images/logo-white.png" />
      </Head>

      <main className={styles.main}>
        <ComingSoon />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
