import cn from '@/utils/cn'

type SpacerProps = {
  className?: string
}
export default function Spacer({ className }: SpacerProps) {
  return <div className={cn('flex-1', className)} />
}
