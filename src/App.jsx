
import About from "./src/About"
import Contacts from "./src/Contacts"
import Footer from "./src/Footer"
import NavBar from "./src/NavBar"
import Plans from "./src/Plans"
import Prices from "./src/Prices"


function App() {

  return (
    <div className="container">
      <NavBar/>
      <About/>
      <Plans/>
      <Prices/>
      <Contacts/>
      <Footer/>
  </div>
  )
}

export default App
