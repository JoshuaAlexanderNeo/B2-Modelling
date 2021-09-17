import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div>
            <div className="wrapper">
                <div className="content">
                        <Header />
                        {props.children}
                </div>
                    <Footer  />
            </div>
        </div>
    )
}

export default Layout