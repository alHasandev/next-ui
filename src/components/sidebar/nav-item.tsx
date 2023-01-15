import Link from 'next/link'
import { MaterialIcon } from '../ui/MaterialIcon'

export type NavItemProps = {
  link: string
  label: string
  icon: string
  onClick?: (item: { link: string; label: string; icon: string }) => void
}
export function NavItem(props: NavItemProps) {
  return (
    <Link
      href={props.link}
      className="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
      onClick={(e) => {
        e.preventDefault()
        props.onClick?.(props)
      }}
    >
      <MaterialIcon name={props.icon} />
      <div className="mt-[2px] line-clamp-1">{props.label}</div>
    </Link>
  )
}
