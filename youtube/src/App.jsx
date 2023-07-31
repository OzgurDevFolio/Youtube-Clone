import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
