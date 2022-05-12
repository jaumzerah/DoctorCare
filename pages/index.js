import Head from 'next/head'
import React, { useEffect, useState} from 'react'
import About from './api/components/about'
import BackToTop from './api/components/BackTop'
import Contact from './api/components/Contact'
import Footer from './api/components/Footer'
import Navigation from './api/components/navigation'
import Services from './api/components/Services'
import Starts from './api/components/Starts'

function Home() {
    const [ Scroll, setScroll] = useState(false)
    const [ Show, setShow] = useState(false)

    useEffect (function(){
      function ShowNavOnScroll(){
        if (scrollY > 0) {
          setScroll(true);
        } else {
          setScroll(false)
        }}
      
      function ShowBackToTopButtonOnScroll(){
        if (scrollY > 500) {
          setShow(true);
        } else {
          setShow(false)
        }}

      function onScroll() {
          ShowNavOnScroll()
          ShowBackToTopButtonOnScroll()
        }

      window.addEventListener('scroll', onScroll);
    }, []);
  
  return (
    <div>
      <Head>
        <title>DoctorCare</title>

      </Head>
      <Navigation onscroll={Scroll} />
      <Starts/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
      <BackToTop onscroll={Show}/>
    </div>
  )
}

export default Home;
