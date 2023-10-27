import React from 'react'
import Navbar from '../../components/layout-components/navbar'
import NewsSlider from '../../components/news-components/NewsSlider'
import NewsTabArea from '../../components/news-components/NewsTabArea'
import Footer from '../../components/layout-components/footer'
import TopNews from '../../components/news-components/TopNews'

function Home() {
  return (
    <>
    <Navbar/>
    <NewsSlider/>
    <NewsTabArea/>
    <TopNews/>
    <Footer />
    </>
  )
}

export default Home