import React from 'react'
import Footer from '../components/Footer'
import Group from '../components/Group'
import Navbar from '../components/Navbar'

function MainLayout({children}) {
    return (
        <div>
            <Navbar />
            <Group />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
