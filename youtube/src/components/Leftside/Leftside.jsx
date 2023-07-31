import React from 'react'
import './Leftside.css'
import { useNavigate } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import HistoryIcon from '@mui/icons-material/History'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SensorsIcon from '@mui/icons-material/Sensors'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '/assets/youtube.png'
import Logo1 from '/assets/youtube-logo.png'
import { Avatar } from '@mui/material'
import ChannelPicture1 from '/assets/channel1.jpg'
import ChannelPicture2 from '/assets/channel2.jpg'
import ChannelPicture3 from '/assets/channel3.jpg'
import ChannelPicture4 from '/assets/channel4.jpg'
import ChannelPicture5 from '/assets/channel5.jpg'
import ChannelPicture6 from '/assets/channel6.jpg'
import ChannelPicture7 from '/assets/channel7.jpg'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
import SettingsIcon from '@mui/icons-material/Settings'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import FeedbackIcon from '@mui/icons-material/Feedback'

export default function Leftside() {
    const navigate = useNavigate()

    const overflowDisplay = () => {
        document.querySelector('.leftside').classList.add('overflow__display')
    }

    const navigateToHome = () => {
        navigate('/home')
    }

    return (
        <>
            <div className="leftside">
                <div className="leftside__top">
                    <div className=" h-fit w-fit" onClick={onclickLeftside}>
                        <MenuIcon className="leftside__menuicon" />
                    </div>
                    <img src={Logo} alt="Logo" className="cursor-pointer" onClick={navigateToHome} />
                </div>
                <div className="leftside__content-top">
                    <div className="leftside__content-top__home">
                        <HomeIcon className="leftside__icon" />
                        <span>Home</span>
                    </div>
                    <div className="leftside__content__link">
                        <SlowMotionVideoIcon className="leftside__icon" />
                        <span>Shorts</span>
                    </div>
                    <div className="leftside__content__link">
                        <SubscriptionsIcon className="leftside__icon" />
                        <span>Subscriptions</span>
                    </div>
                </div>
                <hr />
                <div className="leftside__content-middle">
                    <div className="leftside__content__link">
                        <VideoLibraryIcon className="leftside__icon" />
                        <span>Library</span>
                    </div>
                    <div className="leftside__content__link">
                        <HistoryIcon className="leftside__icon" />
                        <span>History</span>
                    </div>
                    <div className="leftside__content__link">
                        <SmartDisplayIcon className="leftside__icon" />
                        <span>Your Videos</span>
                    </div>
                    <div className="leftside__content__link">
                        <AccessTimeIcon className="leftside__icon" />
                        <span>Watch Later</span>
                    </div>
                    <div className="leftside__content__link">
                        <ThumbUpOffAltIcon className="leftside__icon" />
                        <span>Liked Videos</span>
                    </div>
                </div>
                <hr />
                <div className="leftside__content-bottom">
                    <span style={{ color: 'white', fontSize: '20px' }}>Subscriptions</span>
                    <div className="channel">
                        <Avatar src={ChannelPicture1} />
                        <span>Iman Gadzhi</span>
                    </div>
                    <div className="channel">
                        <Avatar src={ChannelPicture2} />
                        <span>Oğuz Alper Öktem</span>
                    </div>
                    <div className="channel">
                        <Avatar src={ChannelPicture3} />
                        <span>Web Dev Simplified</span>
                    </div>
                    <div className="channel">
                        <Avatar src={ChannelPicture4} />
                        <span>Barış Özcan</span>
                    </div>
                    <div className="channel">
                        <Avatar src={ChannelPicture5} />
                        <span>Javascript Mastery</span>
                    </div>
                    <div className="channel">
                        <Avatar src={ChannelPicture6} />
                        <span>Fireship</span>
                    </div>
                    <div className="channel">
                        <Avatar src={ChannelPicture7} />
                        <span>Traversy Media</span>
                    </div>
                </div>
                <hr />
                <div className="leftside__content-explore">
                    <span style={{ color: 'white', fontSize: '20px' }}>Explore</span>
                    <div className="leftside__content__link">
                        <LocalFireDepartmentIcon className="leftside__icon" />
                        <span>Trending</span>
                    </div>
                    <div className="leftside__content__link">
                        <MusicNoteIcon className="leftside__icon" />
                        <span>Music</span>
                    </div>
                    <div className="leftside__content__link">
                        <SensorsIcon className="leftside__icon" />
                        <span>Live</span>
                    </div>
                    <div className="leftside__content__link">
                        <SportsEsportsIcon className="leftside__icon" />
                        <span>Gaming</span>
                    </div>
                    <div className="leftside__content__link">
                        <EmojiEventsIcon className="leftside__icon" />
                        <span>Sports</span>
                    </div>
                </div>
                <hr />
                <div className="leftside__content-more">
                    <span style={{ color: 'white', fontSize: '20px' }}>More From Youtube</span>
                    <div className="leftside__content-more__link">
                        <img src={Logo1} alt="Logo" />
                        <span>Youtube Premium</span>
                    </div>
                    <div className="leftside__content-more__link">
                        <img src={Logo1} alt="Logo" />
                        <span>Youtube Studio</span>
                    </div>
                    <div className="leftside__content-more__link">
                        <img src={Logo1} alt="Logo" />
                        <span>Youtube Music</span>
                    </div>
                    <div className="leftside__content-more__link">
                        <img src={Logo1} alt="Logo" />
                        <span>Youtube Kids</span>
                    </div>
                </div>
                <hr />
                <div className="leftside__content-settings">
                    <div className="leftside__content__link">
                        <SettingsIcon className="leftside__icon" />
                        <span>Settings</span>
                    </div>
                    <div className="leftside__content__link">
                        <EmojiFlagsIcon className="leftside__icon" />
                        <span>Report History</span>
                    </div>
                    <div className="leftside__content__link">
                        <HelpOutlineIcon className="leftside__icon" />
                        <span>Help</span>
                    </div>
                    <div className="leftside__content__link">
                        <FeedbackIcon className="leftside__icon" />
                        <span>Send Feedback</span>
                    </div>
                </div>
            </div>
            <div className="onclick__leftside">
                <MenuIcon className="leftside__menuicon items-center justify-center ml-7 mb-6 mt-3" />
                <div className="onclick__leftside-link">
                    <HomeIcon className="leftside__icon-bottom" />
                    <span>Home</span>
                </div>
                <div className="onclick__leftside-link">
                    <SlowMotionVideoIcon className="leftside__icon-bottom" />
                    <span>Shorts</span>
                </div>
                <div className="onclick__leftside-link">
                    <SubscriptionsIcon className="leftside__icon-bottom" />
                    <span>Subscriptions</span>
                </div>
                <div className="onclick__leftside-link">
                    <VideoLibraryIcon className="leftside__icon-bottom" />
                    <span>Library</span>
                </div>
            </div>
        </>
    )
}
