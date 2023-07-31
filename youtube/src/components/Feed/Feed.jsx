import React from 'react'
import './Feed.css'
import video1 from '/assets/video1.png'
import video2 from '/assets/video2.png'
import video3 from '/assets/video3.png'
import video4 from '/assets/video4.png'
import video5 from '/assets/video5.png'
import video6 from '/assets/video6.png'
import video7 from '/assets/video7.png'
import video8 from '/assets/video8.png'
import video9 from '/assets/video9.png'
import video10 from '/assets/video10.png'
import video11 from '/assets/video11.png'
import video12 from '/assets/video12.png'
import avatar1 from '/assets/avatar1.jpg'
import avatar2 from '/assets/avatar2.jpg'
import avatar3 from '/assets/avatar3.jpg'
import avatar4 from '/assets/avatar4.jpg'
import avatar5 from '/assets/avatar5.jpg'
import avatar6 from '/assets/avatar6.jpg'
import avatar7 from '/assets/avatar7.jpg'
import avatar8 from '/assets/avatar8.jpg'
import avatar9 from '/assets/avatar9.jpg'
import avatar10 from '/assets/avatar10.jpg'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export default function Feed() {
    return (
        <>
            <div className="feed">
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video1} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Have US been hiding UFO for ages?</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>791K views</span>
                                <p>•</p>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video2} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar7} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Do this to make $10,000 as a student</span>
                            <div className="feed__bottom-text">
                                <span>Iman Gadzhi</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.3M views</span>
                                <p>•</p>
                                <span>1 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video3} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar3} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk killed Twitter bird</span>
                            <div className="feed__bottom-text">
                                <span>Traversy</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>400K views</span>
                                <p>•</p>
                                <span>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video4} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar9} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Mark Zuckerberg and Bill Gates answer questions from Harvard students</span>
                            <div className="feed__bottom-text">
                                <span>Harvard University</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>4.5M views</span>
                                <p>•</p>
                                <span>9 months ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video5} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar2} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>"World-Changing" LK-99 Superconductor explained quickly</span>
                            <div className="feed__bottom-text">
                                <span>Fireship</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>327K views</span>
                                <p>•</p>
                                <span>16 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video6} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar8} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Jeff Bezos talks about Getting rich</span>
                            <div className="feed__bottom-text">
                                <span>BusinessWorld</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>3.1M views</span>
                                <p>•</p>
                                <span>2 years ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video7} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar10} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>10 minute Meditation</span>
                            <div className="feed__bottom-text">
                                <span>Goodful</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1.4M views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video8} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar6} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Elon Musk talks Twitter, Tesla and how his brain works</span>
                            <div className="feed__bottom-text">
                                <span>Ted</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>13M views</span>
                                <p>•</p>
                                <span>1 year ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video9} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Time is just a delusion</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>507K views</span>
                                <p>•</p>
                                <span>3 weeks ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video10} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar1} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are Oppies</span>
                            <div className="feed__bottom-text">
                                <span>Baris Özcan</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>1M views</span>
                                <p>•</p>
                                <span>7 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video11} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar4} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>Is React R.I.P?</span>
                            <div className="feed__bottom-text">
                                <span>WDS</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>200K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feed__video">
                    <img src={video12} alt="Video Image" className="video__image" />
                    <div className="feed__bottom">
                        <img src={avatar5} alt="Channel Picture" />
                        <div className="feed__bottom-texts">
                            <span>We are in NYSE.</span>
                            <div className="feed__bottom-text">
                                <span>Oguz Alper Öktem</span>
                                <CheckCircleIcon className="feed__bottom-text-tick" />
                            </div>
                            <div className="feed__bottom-text">
                                <span>300K views</span>
                                <p>•</p>
                                <span>1 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
