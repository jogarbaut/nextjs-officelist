export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json()

  const paths = data.map(staffItem => {
    // Array of objects each representing a route with parameters
    return {
      params: { id: staffItem.id.toString() } // String version of 'id'
    }
  })

  return {
    paths,
    fallback: false
  }
}

// Next.js runs getStaticProps for each path (i.e. 10 times for this dataset)
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { staffItem: data }
  }
}

const Details = ({ staffItem }) => {
  return (
    <div>
      <h1>{ staffItem.name }</h1>
      <p> { staffItem.email } </p>
      <p> { staffItem.website } </p>
      <p> { staffItem.address.city } </p>
    </div>
  )
}

export default Details