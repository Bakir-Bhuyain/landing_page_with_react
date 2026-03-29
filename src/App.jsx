import './App.css'
import Banner from './components/banner/Banner'
import Cards from './components/cards/Cards'
import DigitalTools from './components/digitalTools/DigitalTools'
import GetStarted from './components/getstarted/Getstarted'
import Navbar from './components/navbar/Navbar'
import State from './components/state/State'


function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <State/>
      <DigitalTools/>
      <Cards/>
      <GetStarted/>
    </>
  )
}

export default App
