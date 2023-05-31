import { PromiseLikeOfReactNode, ReactNode } from 'react'

import cn from '@/utils/cn'

export default function ScrollbarColumn({
  children,
  className,
  rootClassName,
}: {
  children?: ReactNode | PromiseLikeOfReactNode
  className?: string
  rootClassName?: string
}) {
  return (
    <div
      className={cn(
        'lg:overflow-y-scroll lg:pr-1 lg:scrollbar lg:scrollbar-thumb-primary-100',
        rootClassName,
      )}
    >
      <div
        className={cn(
          'lg:min-h-full lg:border-r lg:border-r-primary-500',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
