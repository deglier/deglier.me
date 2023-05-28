'use client'

import Script from 'next/script'

export default function UpdateViewport() {
  return (
    <Script
      id="dynamic-viewport"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
    function updateViewport() {
      let vh = window.innerHeight * 0.01;
      document.body.style.setProperty('--vh', \`\${vh}px\`);
    }
    updateViewport()
    window.addEventListener('resize', updateViewport);
`,
      }}
    />
  )
}
