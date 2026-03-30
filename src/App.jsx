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

  return (
    <>
      <Navbar/>
      <Banner/>
      <State/>
      <DigitalTools/>
      <Cards/>
      <GetStarted/>
      <Subscription/>
      <Transform/>
      <Footer/>
    </>
  )
}

export default App
