import React from 'react'
import Navbar from '../../../components/layout-components/Navbar'
import Footer from '../../../components/layout-components/footer'
import BusinessNews from '../../../components/news-components/categories/BusinessNews'

function Home() {
  return (
    <>
    <Navbar/>
    <BusinessNews/>
    <Footer />
    </>
  )
}

export default Home