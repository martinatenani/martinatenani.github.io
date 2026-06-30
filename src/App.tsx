import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//case studies
import FilmateCaseStudy from './components/cases/FilmateCaseStudy';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <Router>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            {/* Navigation stays outside Routes */}
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            
            <FadeIn transitionDuration={700}>
                <Routes>
                    {/* ROUTE 1: Main Landing Page */}
                    <Route path="/" element={
                        <>
                            <Main />
                            <Project />
                            <Expertise />
                            <Timeline />
                            <Contact />
                        </>
                    } />

                    {/* ROUTE 2: standalone Case Study Page */}
                    <Route path="/project/filmate-ai" element={<FilmateCaseStudy />} />
                    {/* Add more routes here */}
                </Routes>
            </FadeIn>
            
            <Footer />
        </div>
    </Router>
    );
}

export default App;