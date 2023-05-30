import Footer from '@/components/Footer'
import { siteData } from '@/app/siteData'

export default function Home() {
  return (
    <>
      <div className="flex flex-1 lg:divide-x lg:divide-primary-500">
        {/* lg:blur-[100px]" */}
        {/* blur-[50px] */}
        <main className="flex flex-1 items-center justify-center bg-graph-paper">
          <div className="absolute aspect-video h-auto w-full max-w-[100%] animate-spin-slow rounded-br-[10rem] rounded-tl-[10rem] bg-gradient-conic from-lime-500 via-orange-500 to-purple-500 opacity-10 blur-[70px] sm:max-w-2xl lg:right-[5%] lg:max-w-4xl lg:opacity-5 4xl:max-w-6xl" />
          <div className="absolute aspect-video h-auto w-full max-w-[100%] animate-spin-slow-reverse rounded-br-[10rem] rounded-tl-[10rem] bg-gradient-conic from-lime-500 via-orange-500 to-purple-500 opacity-10 blur-[70px] sm:max-w-2xl lg:right-[5%] lg:max-w-4xl lg:opacity-5 4xl:max-w-6xl" />
          <div className="flex h-full flex-1 xl:ml-78">
            <div className="flex w-full flex-col items-center justify-center gap-20 px-5 pb-21 pt-24 sm:items-center lg:w-1/2 lg:items-start xl:px-0">
              <div className="text-primary-0 xs:text-center lg:text-left">
                <span className="text-lg leading-snug ">Hi all. I am</span>
                <h1 className="mt-3 text-6xl leading-none lg:mt-0 lg:leading-snug">
                  {siteData.name}
                </h1>
                <h2 className="mt-1 text-xl leading-snug text-accent-green lg:mt-0 lg:text-secondary-purple">{`> ${siteData.role}`}</h2>
              </div>
              <div className="space-y-4 text-sm leading-snug">
                <p>{'// find my profile on Github:'}</p>
                <p className="text-primary-0">
                  <span className="text-secondary-purple">const</span>{' '}
                  <span className="text-accent-green">githubLink</span> ={' '}
                  <span className="relative text-accent-salmon after:absolute after:inset-x-0 after:bottom-[2px] after:h-px after:bg-accent-salmon">
                    “
                    <a href="https://github.com/example/url">
                      https://github.com/example/url
                    </a>
                    ”
                  </span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer className="hidden lg:flex" />
    </>
  )
}
