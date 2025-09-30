import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import bgCoding from './assets/background-coding.jpg';
// import Slider from './Slider';
import SectionDivider from "./SectionDivider";
import Technologies from "./Technologies";

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
       <div
    className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center filter blur-sm opacity-40"
    style={{ backgroundImage: `url(${bgCoding})` }}
  ></div>
      
     <Header />
     <AboutMe />
     <SectionDivider className="my-10" />
     <Projects />
     {/* <Slider /> */}
     <SectionDivider className="my-10" />
     <Technologies />
    </div>
  )
}

export default App
