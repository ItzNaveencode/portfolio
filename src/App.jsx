import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import AiTools from './components/AiTools'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <AiTools />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
