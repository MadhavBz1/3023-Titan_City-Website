import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Courses, Hero, Navbar, Tech, Projects, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

      </div>
      <div className="relative z-0">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Experience />
      
      <Projects />

      
      
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
