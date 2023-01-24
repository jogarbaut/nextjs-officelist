import Head from "next/head"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Office List | Home</title>
        <meta name="keywords" content="office-staff" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Here is a list of the staff you may know from The Office.</p>
        <Link href="/staff">
          <div className={styles.btn}>See Staff List</div>
        </Link>
      </div>
    </>
  )
}
