import './App.css'
import Header from './components/header'
import Slide from './components/slide'
import Cataloge from './components/cataloge/cataloge'
import Benefits from './components/benefits/benefits'
import Discounts from './components/discounts/discounts'
import Contact from './components/contact/contact'
function App() {
  return (
    <div className="app">
      <div className="content-inset">
        <Header />
      </div>
      <Slide />
      <Cataloge />
      <Benefits />
      <Discounts />
      <Contact />
    </div>
  )
}

export default App
