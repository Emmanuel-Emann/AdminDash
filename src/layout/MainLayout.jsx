import React from 'react'
import Footer from './component/Footer'
import Main from './component/Head/Header'

export const MainLayout = () => {
    const { isAuthenticated, children } = props
  return (
    <React.Fragment>
        <Main/>
        {children}
        <Footer/>
    </React.Fragment>
  )
}

