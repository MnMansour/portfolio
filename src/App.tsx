import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[40%] -right-40 h-[420px] w-[420px] rounded-full bg-accent-violet/10 blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
