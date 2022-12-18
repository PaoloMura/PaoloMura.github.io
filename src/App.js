import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import './App.css';
import About from './About';
import Header from './Header';
import PDF from './PDF';
import ProjectPage from './ProjectPage';
import Projects from './Projects';
import Footer from './Footer';
import RenderFarm from './Projects/RenderFarm';
import TradingAlgorithms from './Projects/TradingAlgorithms';
import EducationalResources from './Projects/EducationalResources';
import MultiplayerGame from './Projects/MultiplayerGame';
import SignDetector from './Projects/SignDetector';
import RenderingEngine from './Projects/RenderingEngine';
import VoronoiAR from './Projects/VoronoiAR';
import ParallelisedSimulation from './Projects/ParallelisedSimulation';
import BookingSystem from './Projects/BookingSystem';
import Animation from './Projects/Animation';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
            <Route exact path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/cv' element={<PDF link='/Paolo-Mura-CV.pdf' />} />
            <Route path='/render-farm' element={<ProjectPage project='/render-farm' description=<RenderFarm/> />} />
            <Route path='/trading-algorithms' element={<ProjectPage project='/trading-algorithms' description=<TradingAlgorithms/> />} />
            <Route path='/educational-resources' element={<ProjectPage project='/educational-resources' description=<EducationalResources/> />} />
            <Route path='/multiplayer-game' element={<ProjectPage project='/multiplayer-game' description=<MultiplayerGame/> />} />
            <Route path='/sign-detector' element={<ProjectPage project='/sign-detector' description=<SignDetector/> />} />
            <Route path='/rendering-engine' element={<ProjectPage project='/rendering-engine' description=<RenderingEngine/> />} />
            <Route path='/ar-app' element={<ProjectPage project='/ar-app' description=<VoronoiAR/> />} />
            <Route path='/parallelised-simulation' element={<ProjectPage project='/parallelised-simulation' description=<ParallelisedSimulation/> />} />
            <Route path='/booking-system' element={<ProjectPage project='/booking-system' description=<BookingSystem/> />} />
            <Route path='/animation' element={<ProjectPage project='/animation' description=<Animation/> />} />
        </Routes>
        <div className='padding'/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
