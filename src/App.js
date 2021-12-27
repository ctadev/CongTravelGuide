import "./styles/app.scss"
import Hero from './components/Hero'
import Body from './components/Body'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Body />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
