import { Avatar } from '@material-ui/core'
import React from 'react'
function HeaderOptions({avatar,Icon,title}) {
    return (
        <div class="flex flex-col items-center fill-current font-normal text-xs text-gray-500 px-3  hover:fill-current hover:text-black cursor-pointer">
            {Icon && <Icon />}
            {avatar && <Avatar class="h-6 w-6 object-contain rounded-full" src={avatar}/>}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOptions
