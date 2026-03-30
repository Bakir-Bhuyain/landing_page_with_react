import { Suspense} from 'react'
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


const fetchedCardInfo = async () => {
  const res = await fetch('/Features.json');
  return res.json();
}
const promiseCardInfo = fetchedCardInfo();


function App() {

  

  return (
    <>
      <Navbar />
      <Banner />
      <State />
      <DigitalTools promiseCardInfo={promiseCardInfo}/>

      {/* <Suspense fallback={<div className="flex justify-center py-20"><span className="$$loading $$loading-spinner $$loading-xl"></span></div>}>
        <Cards promiseCardInfo={promiseCardInfo} />
      </Suspense> */}


      <GetStarted />
      <Subscription />
      <Transform />
      <Footer />
    </>
  )
}

export default App
