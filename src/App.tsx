import './App.css'
import Header from './components/header'
import Slide from './components/slide'
import Cataloge from './components/cataloge/cataloge'
import Benefits from './components/benefits/benefits'
function App() {
  return (
    <div className="app">
      <div className="content-inset">
        <Header />
      </div>
      <Slide />
      <Cataloge />
      <Benefits />
    </div>
  )
}

export default App
