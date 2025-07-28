// app/blog/[slug]/page.js
export default function Services({ params }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <p>This is the content for post {params.slug}</p>
    </div>
  )
}