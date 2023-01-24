import styles from "../../styles/Staff.module.css"
import Link from "next/link"
import Head from "next/head"

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()

  return {
    props: { staff: data },
  }
}

const Ninjas = ({ staff }) => {
  return (
    <>
      <Head>
        <title>Office List | Staff</title>
        <meta name="keywords" content="office-staff" />
      </Head>

      <div>
        <h1>Staff</h1>
        {staff.map((staffItem) => (
          <Link legacyBehavior href={`/staff/${staffItem.id}`} key={staffItem.id}>
            <a className={styles.single}>
              <h3>{staffItem.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Ninjas
