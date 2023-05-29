import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <div className="flex flex-1 lg:divide-x lg:divide-primary-500">
        {/* lg:blur-[100px]" */}
        {/* blur-[50px] */}
        <main className="flex flex-1 items-center justify-center bg-graph-paper">
          <div className="absolute aspect-video h-auto w-full max-w-[100%] animate-spin-slow rounded-br-[10rem] rounded-tl-[10rem] bg-gradient-conic from-lime-500 via-orange-500 to-purple-500 opacity-10 blur-[70px] lg:right-[5%] lg:max-w-4xl lg:opacity-5 4xl:max-w-6xl" />
          <div className="absolute aspect-video h-auto w-full max-w-[100%] animate-spin-slow-reverse rounded-br-[10rem] rounded-tl-[10rem] bg-gradient-conic from-lime-500 via-orange-500 to-purple-500 opacity-10 blur-[70px] lg:right-[5%] lg:max-w-4xl lg:opacity-5 4xl:max-w-6xl" />
        </main>
      </div>
      <Footer className="hidden lg:flex" />
    </>
  )
}
