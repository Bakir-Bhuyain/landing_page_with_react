import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Cards from './components/cards/Cards'
import DigitalTools from './components/digitalTools/DigitalTools'
import Footer from './components/footer/Footer'
import GetStarted from './components/getstarted/Getstarted'
import Navbar from './components/navbar/Navbar'
import Transform from './components/readytotransform/Transform'
import State from './components/state/State'
import Subscription from './components/subscription/Subscription'


function App() {

  const fetchedCardInfo = async() =>{
    const res = await fetch('/Features.json');
    return res.json();
  }

const promiseCardInfo = fetchedCardInfo();

  return (
    <>
      <Navbar/>
      <Banner/>
      <State/>
      <DigitalTools/>
      
      <Suspense fallback={<span className="$$loading $$loading-spinner $$loading-xl"></span>}>
        <Cards promiseCardInfo={promiseCardInfo} />
      </Suspense>


      <GetStarted/>
      <Subscription/>
      <Transform/>
      <Footer/>
    </>
  )
}

export default App
