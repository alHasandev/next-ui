import { PropsWithChildren, useState } from 'react'

type DrawerProps = {
  show?: boolean
  static?: boolean
}
export function Drawer(props: DrawerProps & PropsWithChildren) {
  const [transition, transitionSet] = useState(false)
  const dynamicClx = !props.show ? '-translate-x-full' : ''

  const staticClx = !props.static
    ? `fixed w-full sm:w-auto`
    : !props.show
    ? ''
    : 'w-full sm:w-auto duration-300'

  return (
    <div
      className={`${staticClx} overflow-hidden border transition-all ${dynamicClx}`}
      onTransitionEnd={(e) => {
        if (props.static && !transition && !props.show) {
          const el = e.target as HTMLDivElement
          el.classList.add('w-0')
          el.classList.add('sm:w-0')
          el.classList.add('h-0')
          el.classList.add('sm:h-0')
          transitionSet(true)
        } else {
          transitionSet(false)
        }
      }}
    >
      {props.children}
    </div>
  )
}
