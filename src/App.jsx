import Header from "./components/Header"
import Hero from "./components/Hero"
import ListadoProductos from "./components/ListadoProductos"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="mx-auto p-4 border-b-4 border-b-black">
        <Header/>
      </div>
      
      <div className="heroH bg-black">
        <Hero/>
      </div>
      
      <ListadoProductos
        saludo={'Welcome to our best selling products'}
      />
      <Footer/>
    </>
    
  )
}

export default App
