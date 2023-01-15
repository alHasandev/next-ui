import { NextApiRequest, NextApiResponse } from 'next'

const html = `<div class="group w-full sm:w-[20rem]"
><aside
    class="h-screen flex-col overflow-auto shadow-md scrollbar-thin group-hover:scrollbar-track-indigo-600/10 group-hover:scrollbar-thumb-indigo-600/20"
    ><header class="flex flex-wrap items-center gap-4 bg-white px-4 py-4"
        ><figure class="overflow-hidden rounded-full"
            ><img
                alt="sidebar-header-image"
                srcset="
                    https://picsum.photos/seed/picsum/100/100?w=64&amp;q=75  1x,
                    https://picsum.photos/seed/picsum/100/100?w=128&amp;q=75 2x
                "
                src="https://picsum.photos/seed/picsum/100/100?w=128&amp;q=75"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                class="object-cover"
                style="" /></figure
        ><section
            ><h2
                class="text-lg font-semibold tracking-wide text-slate-700 line-clamp-1"
                >Hello World</h2
            ><p class="text-sm text-gray-500 line-clamp-1"
                >hello@world.com</p
            ></section
        ></header
    ><hr /><nav class="flex-1 text-slate-600"
        ><section class="flex flex-col gap-2 px-2 py-2"
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">folder</span
                ><div class="mt-[2px] line-clamp-1">My Files</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">people</span
                ><div class="mt-[2px] line-clamp-1">Shared With Me</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">star</span
                ><div class="mt-[2px] line-clamp-1">Starred</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">schedule</span
                ><div class="mt-[2px] line-clamp-1">Recent</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">offline_pin</span
                ><div class="mt-[2px] line-clamp-1">Offline</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">file_upload</span
                ><div class="mt-[2px] line-clamp-1">Uploads</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">cloud_upload</span
                ><div class="mt-[2px] line-clamp-1">Backups</div></a
            ></section
        ><hr class="last-of-type:border-0" /><section
            class="flex flex-col gap-2 px-2 py-2"
            ><p class="px-2 py-2 text-sm text-gray-600">Labels</p
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">folder</span
                ><div class="mt-[2px] line-clamp-1">My Files</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">people</span
                ><div class="mt-[2px] line-clamp-1">Shared With Me</div></a
            ><a
                class="ml-2 mr-2 flex items-center gap-7 rounded-md px-3 py-2 transition-colors hover:bg-indigo-600/10 hover:text-indigo-600"
                href="/#"
                ><span class="material-icons">star</span
                ><div class="mt-[2px] line-clamp-1">Starred</div></a
            ></section
        ><hr class="last-of-type:border-0" /></nav></aside
></div>
`

export function handle(req: NextApiRequest, res: NextApiResponse) {}
