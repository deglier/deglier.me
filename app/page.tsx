import Image from 'next/image'

import cn from '@/utils/cn'

import Footer from '@/components/Footer'
import { siteData } from '@/app/siteData'

import favicon from './icon.png'

export default function Home() {
  return (
    <>
      <div className="flex h-full">
        {/* lg:blur-[100px]" */}
        {/* blur-[50px] */}
        <main className="relative flex flex-1 items-center justify-center  bg-graph-paper">
          <div className="relative flex h-full flex-1 flex-col items-center justify-center xl:flex-row-reverse xl:justify-start 2xl:ml-78 3xl:mr-78">
            <div className="absolute w-full xl:w-1/2">
              <BlurringObject className="mx-auto hidden lg:top-0 lg:block xl:right-0 2xl:right-auto" />
              <BlurringObject className="mx-auto lg:bottom-0 xl:right-0 2xl:right-auto" />
            </div>
            {/* <div className="absolute aspect-square h-auto w-full max-w-[100%] rounded-br-[10rem] rounded-tl-[10rem] bg-gradient-conic from-lime-500 via-orange-500 to-purple-500 opacity-10 blur-[70px] sm:max-w-2xl md:animate-spin-slow lg:-right-10 lg:-top-14 lg:max-w-4xl lg:rounded-full lg:opacity-5 4xl:right-0 " />
            <div className="lg-blur-0 absolute hidden aspect-square h-auto w-full max-w-[100%] rounded-br-[10rem] rounded-tl-[10rem] bg-gradient-conic from-purple-500 via-orange-500 to-lime-500 opacity-10 blur-[70px] sm:max-w-2xl md:block md:animate-spin-slow lg:-bottom-12 lg:-right-10 lg:max-w-4xl lg:rounded-full lg:opacity-5 4xl:right-0" /> */}
            <div className="relative hidden px-5 md:flex md:items-center md:justify-center xl:h-full xl:w-1/2 2xl:px-0">
              <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-primary-500/40 bg-primary-0 bg-opacity-[0.02] backdrop-blur-xs lg:h-80 lg:w-80 xl:h-96 xl:w-96 2xl:h-[32rem] 2xl:w-[32rem]">
                <Image
                  src={favicon}
                  alt=""
                  className="h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-full object-cover xl:h-[calc(100%-2rem)] xl:w-[calc(100%-2rem)]"
                />
              </div>
            </div>
            <div className="2x:py-0  relative flex w-full flex-col items-center justify-center gap-20 px-5 pb-21 pt-24 sm:items-center md:py-10 xl:w-1/2 xl:items-start 2xl:px-0">
              <div className="text-primary-0 xs:text-center xl:text-left">
                <Image
                  src={favicon}
                  height={48}
                  width={48}
                  alt=""
                  className="rounded-full object-cover xs:mx-auto md:hidden"
                />

                <span className="mt-3 block text-lg leading-snug">
                  Hi all. I am
                </span>
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

function BlurringObject({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        '',
        'aspect-square animate-spin-slow blur-3xl xl:blur-[90px]',
        // 'bg-gradient-to-tr from-lime-400 via-yellow-400 to-purple-600',
        'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%',
        'rounded-bl-[2rem] rounded-br-[12rem] rounded-tl-[12rem] rounded-tr-[2rem] xl:rounded-full',
        'h-auto w-full max-w-[100%] md:max-w-xl lg:max-w-2xl xl:max-w-3xl',
        'opacity-10 lg:opacity-5 xl:opacity-[0.08]',
        className,
      )}
    />
  )
}
