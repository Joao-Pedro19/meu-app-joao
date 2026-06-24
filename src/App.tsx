import {Title, Contador, Hero, Docs, Social} from './Componentes/Componentes.tsx'
import './App.css'




function App() {
  

  return (
    <>
      <section id="center">
        <Hero />
        <Title />
        <Contador />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <Docs />
        <Social />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App