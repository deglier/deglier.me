'use client'

import { useState } from 'react'
import { CheckCircle2 as CheckIcon, Copy as CopyIcon } from 'lucide-react'

interface CodePreviewProps {
  code: string
  raw?: string
}

export default function CodePreview({ code, raw }: CodePreviewProps) {
  const [hasCopiedToClipboard, setCopiedToClipboard] = useState(false)

  const handleCopyToClipboard = () => {
    if (!raw) return
    navigator.clipboard.writeText(raw)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  return (
    <>
      {raw && (
        <button
          onClick={handleCopyToClipboard}
          data-copied={hasCopiedToClipboard}
          className="absolute right-0 z-30 mx-8 flex items-center gap-x-2 rounded-md bg-[#2a273f] px-3 py-2 text-sm font-medium text-[#E0DEF2] ring-2 ring-[#2b283b] data-[copied=true]:ring-emerald-600"
        >
          {hasCopiedToClipboard ? (
            <>
              <CheckIcon size={16} className="text-emerald-400" />
              <span className="w-32">Copied!</span>
            </>
          ) : (
            <>
              <CopyIcon size={16} />
              <span className="w-32">Copy to Clipboard</span>
            </>
          )}
        </button>
      )}
      <div
        id="shiki-code"
        className="leading-relaxed scrollbar scrollbar-track-transparent scrollbar-thumb-[#2B283B]"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </>
  )
}
