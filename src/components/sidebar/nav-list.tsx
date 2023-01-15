import { NavItem, NavItemProps } from './nav-item'

export type TNavSection = {
  title?: string
  items: NavItemProps[]
}
export function NavList(props: TNavSection) {
  return (
    <>
      <section className="flex flex-col gap-2 px-2 py-2">
        {props.title && (
          <p className="px-2 py-2 text-sm text-gray-600">{props.title}</p>
        )}

        {props.items.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </section>

      <hr className="last-of-type:border-0" />
    </>
  )
}
