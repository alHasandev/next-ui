export type MaterialIconProps = {
  name: string
  variant?: 'filled' | 'rounded' | 'sharp' | 'two-tone' | 'outlined'
}

export function MaterialIcon(props: MaterialIconProps) {
  const variant =
    !props.variant || props.variant === 'filled' ? '' : `-${props.variant}`
  return <span className={`material-icons${variant}`}>{props.name}</span>
}
