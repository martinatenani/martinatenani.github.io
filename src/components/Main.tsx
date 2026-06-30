import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ProfilePicture } from './Propic';
import { ArtStationIcon } from './ArtstationIcon';

import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <ProfilePicture />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/martinatenani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/martina-tenani-70aa30223/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.artstation.com/arsgrimori" target="_blank" rel="noreferrer"><ArtStationIcon/></a>
            <a href="https://www.instagram.com/arsgrimori/" target="_blank" rel="noreferrer"><InstagramIcon/></a>

          </div>
          <h1>Martina Tenani</h1>
          <p>Technical Artist / Gameplay Programmer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/martinatenani" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/martina-tenani-70aa30223/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://www.artstation.com/arsgrimori" target="_blank" rel="noreferrer"><ArtStationIcon/></a>
            <a href="https://www.instagram.com/arsgrimori/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;