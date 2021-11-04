import { Avatar } from '@material-ui/core'
import React from 'react'

function Sidebar({avatar,title}) {
    return (
        <div class="sticky top-20 flex flex-col text-center items-center border-b-0 pb-2.5 bg-white-900 rounded-tl-xl rounded-tr-xl">
            <div class="flex flex-col items-center">
                <img class="-mb-8 w-full h-14 rounded-tl-lg rounded-tr-lg" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/12/Gradient_builder_2.jpg?auto=format&q=60&fit=max&w=930" alt="" />
                {avatar && <Avatar class="h-10 w-10 mt-2.5" src={avatar}/>}
                <h2>{title}</h2>
                <h4>tahmidislam73@gmail.com</h4>
            </div>
            <div class="">
                <div class="mt-2.5 flex space-x-10">
                    <p>Who viewed you</p>
                    <p>200</p>
                </div>
                <div class="mt-2.5 flex space-x-14">
                    <p>Views on post</p>
                    <p font-bold>2000</p>
                </div>
            </div>    
            <div>
                <p>Recent</p>
            </div>  
        </div>
    )
}

export default Sidebar