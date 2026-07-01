import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faCode, faAtom } from '@fortawesome/free-solid-svg-icons'; 
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Unreal Engine 5",
    "Unity",
    "Blueprints",
    "Unity Shader Graph"
];

const labelsSecond = [
    
    "Blender",
    "Git LFS",
];

const labelsThird = [
    "C#",
    "C++",
    "C",
    "Python",
    "GLSL",
    "Git",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faAtom as any} size="3x"/>
                    <h3>Game Engines</h3>
                    <p>I develop immersive interactive environments and real-time 3D applications using industry-leading engines like Unity and Unreal Engine.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGamepad as any} size="3x"/>
                    <h3>3D & Game Development Pipeline</h3>
                    <p>I manage the end-to-end technical art workflow, bridging the gap between raw 3D models and fully integrated engine environments. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode as any} size="3x"/>
                    <h3>Coding Languages</h3>
                    <p>I write clean, optimized logic to drive gameplay mechanics and interactive systems. I use both native object-oriented programming in C# and C++ alongside visual scripting frameworks like Unreal Blueprints to ensure scalable and performant code across projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;