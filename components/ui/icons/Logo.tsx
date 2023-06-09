import { IconProps } from '@/types/svg-props'

export default function LogoIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      {...props}
    >
      <path
        d="M4 2H9.65596V21.4824H4V2ZM20.7461 11.755C20.7461 10.4101 20.4873 9.15735 19.9698 7.9967C19.4522 6.7992 18.7499 5.7583 17.8627 4.87399C17.0124 3.98969 15.9773 3.28961 14.7574 2.77377C13.593 2.25792 12.3268 2 10.9591 2V21.51C12.3084 21.51 13.5652 21.2613 14.7297 20.7639C15.9311 20.248 16.9754 19.5479 17.8627 18.6636C18.7499 17.7609 19.4522 16.7292 19.9698 15.5686C20.4873 14.3895 20.7461 13.1183 20.7461 11.755Z"
        fill="currentColor"
      />
    </svg>
  )
}
