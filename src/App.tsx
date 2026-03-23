import './App.css'
import Header from './components/header'
import Slide from './components/slide'
import Cataloge from './components/cataloge/cataloge'
import Benefits from './components/benefits/benefits'
import Discounts from './components/discounts/discounts'
import Contact from './components/contact/contact'
import FloatingButton from './components/ui/buttons/floatingButton'
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
      <FloatingButton />
    </div>
  )
}

export default App
