import { Container } from './components/Container';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <>
    <Navbar />
      <Container>
        <span>
          Komaen kana lab, ay mess u!
        </span>
        <span
          className="ml-1 inline-block text-red-500 animate-pulse"
          aria-hidden
        >
          ❤
        </span>
      </Container>
    <Footer />
    </>
  )
}

export default App
