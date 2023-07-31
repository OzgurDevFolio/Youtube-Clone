import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import './Navbar.css'
import MicIcon from '@mui/icons-material/Mic'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import { Avatar } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ProfilePhoto from '/assets/profile.jpeg'

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar__top">
                    <div className="navbar__search">
                        <input type="text" placeholder="Search" />
                        <section className="navbar__searchIcon">
                            <SearchIcon />
                        </section>
                    </div>
                    <section className="navbar__mic">
                        <MicIcon />
                    </section>
                    <div className="navbar__right-icons">
                        <VideoCameraBackIcon className="navbar__right-icon" />
                        <NotificationsNoneIcon className="navbar__right-icon" />
                        <Avatar src={ProfilePhoto} className=" ml-5 cursor-pointer" />
                    </div>
                </div>
                <div className="navbar__bottom">
                    <button className="navbar__bottom-button">All</button>
                    <button className="navbar__bottom-button">Game</button>
                    <button className="navbar__bottom-button">Music</button>
                    <button className="navbar__bottom-button">Live</button>
                    <button className="navbar__bottom-button">Math</button>
                    <button className="navbar__bottom-button">Football</button>
                    <button className="navbar__bottom-button">Latest</button>
                    <button className="navbar__bottom-button">Watched</button>
                    <button className="navbar__bottom-button">Recommended</button>
                </div>
            </div>
        </>
    )
}
