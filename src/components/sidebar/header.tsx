import Image, { type StaticImageData } from 'next/image'

export type TSidebarHeader = {
  title: string
  subtitle?: string
  image?: string | StaticImageData
}
export function SidebarHeader(props: TSidebarHeader) {
  return (
    <>
      <header className="flex flex-wrap items-center gap-4 bg-white px-4 py-4">
        {props.image !== undefined && (
          <figure className="overflow-hidden rounded-full">
            <Image
              src={props.image}
              width={50}
              height={50}
              alt="sidebar-header-image"
              className="object-cover"
              priority
            />
          </figure>
        )}
        <section>
          <h2 className="text-lg font-semibold tracking-wide text-slate-700 line-clamp-1">
            {props.title}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-1">{props.subtitle}</p>
        </section>
      </header>

      <hr />
    </>
  )
}
