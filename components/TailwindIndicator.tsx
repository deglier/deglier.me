export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null

  return (
    <div className="fixed bottom-0 left-0 z-50 flex items-center justify-center rounded-full bg-gray-800 px-1 py-1 font-mono text-xxs leading-none text-white">
      <div className="block xs:hidden">xxs (max-width: 480px)</div>
      <div className="hidden xs:block sm:hidden">xs (max-width: 640px)</div>
      <div className="hidden sm:block md:hidden">sm (max-width: 768px)</div>
      <div className="hidden md:block lg:hidden">md (max-width: 1024px)</div>
      <div className="hidden lg:block xl:hidden">lg (max-width: 1280px)</div>
      <div className="hidden xl:block 2xl:hidden">xl (max-width: 1536px)</div>
      <div className="hidden 2xl:block 3xl:hidden">2xl (max-width: 1792px)</div>
      <div className="hidden 3xl:xl:block 4xl:hidden">
        3xl (max-width: 2048px)
      </div>
      <div className="hidden 4xl:xl:block">4xl (min-width: 2048px)</div>
    </div>
  )
}
