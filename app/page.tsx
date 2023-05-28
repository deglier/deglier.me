import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="flex flex-1 lg:divide-x lg:divide-primary-500">
        <main className="flex-1 bg-graph-paper">main</main>
      </div>
      <Footer className="hidden lg:flex" />
    </>
  )
}
