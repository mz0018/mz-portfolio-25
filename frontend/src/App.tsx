import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero, About, Projects, Contact } from './components/sections';

const App = () => {

  return (
    <>
    <Navbar />
      <Container>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Container>
    <Footer />
    </>
  )
}

export default App
