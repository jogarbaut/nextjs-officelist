import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
  // Method to redirect user
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      // Invoke router to push the user to a specified route
      router.push("/")
      // Amount of time to wait until firing function is 3000 ms in this case
    }, 3000)
  }, [])

  return (
    <div className="not-found">
      <h1>Sorry</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link legacyBehavior href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
