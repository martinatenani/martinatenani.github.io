import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2024 - present"
            iconStyle={{ background: '#da7502', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as any} />}
          >
            <h3 className="vertical-timeline-element-title">AIV - Game Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rome, IT</h4>
            <p>
              Specialized in Gameplay Programming, Interactive Systems, 3D Development, Technical Art
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2020 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as any} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Analyst for CLAL</h3>
            <h4 className="vertical-timeline-element-subtitle">Modena, IT</h4>
            <p>
              Full-stack development of a web application for the analysis of agricultural data, including backend API development, database management, and frontend UI design.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2023"
            iconStyle={{ background: '#da7502', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap as any} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's Degree in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Ferrara, IT</h4>
            <p>
              Thesis focused on developing a Virtual Reality training environment in Unity (Oculus Quest 2) for the "Hannes" myoelectric prosthesis.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;