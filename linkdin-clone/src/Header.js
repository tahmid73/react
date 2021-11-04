import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './App.css';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header" class="flex border-2 border-solid justify-between sticky top-0 bg-white-0 border-gray-200 w-full pt-2 pb-2">
            <div className="header__left" class="flex h-10 object-contain">
                <img 
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
                alt="Linkdin Logo" 
                class="mr-2"
                />
                <div className="header__search" class="p-2 flex items-center rounded h-10 bg-white-0 fill-current text-gray-500">
                    <SearchIcon/>
                    <input type="text" class="outline-none border-0 bg-transparent"/>
                </div>

            </div>
            <div className="header__right" class="flex h-10 ">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={ChatIcon} title="Messaging"/>
                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOptions avatar="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/131243672_1314493388925746_197719383945329023_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DdelShrhfXMAX-vnIbQ&tn=Psso7tf-T0sqS74K&_nc_ht=scontent.fdac11-1.fna&oh=3be4eb06e87e270e76295e88b44b9228&oe=61A9A0B0" title="Tahmid"/>
            </div>
            <div>
                
            </div>
            <div></div>
        </div>
    )
}

export default Header
