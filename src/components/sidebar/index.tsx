import { SidebarHeader, TSidebarHeader } from './header'
import { NavList, TNavSection } from './nav-list'

export type SidebarProps = {
  header?: TSidebarHeader
  navs: TNavSection[]
}

export function Sidebar(props: SidebarProps) {
  return (
    <div className="group w-full sm:w-[20rem]">
      <aside className="h-screen flex-col overflow-auto shadow-md scrollbar-thin group-hover:scrollbar-track-indigo-600/10 group-hover:scrollbar-thumb-indigo-600/20">
        {props.header && <SidebarHeader {...props.header} />}

        <nav className="flex-1 text-slate-600">
          {props.navs.map((nav, i) => (
            <NavList key={i} title={nav.title} items={nav.items} />
          ))}
        </nav>
      </aside>
    </div>
  )
}
