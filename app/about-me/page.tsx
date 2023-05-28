import Link from 'next/link'

export default function AboutMe() {
  return (
    <>
      <aside className="hidden w-78 lg:flex">aside</aside>
      <main className="flex-1">
        <h1>main</h1>
        <Link href="/about-me/bio">go to bio</Link>
      </main>
    </>
  )
}
