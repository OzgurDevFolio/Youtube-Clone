import React from 'react'
import Leftside from '../components/Leftside/Leftside'
import Navbar from '../components/Navbar/Navbar'
import Feed from '../components/Feed/Feed'

export default function Home() {
    return (
        <>
            <Leftside />
            <Navbar />
            <Feed />
        </>
    )
}
