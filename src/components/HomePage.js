import TitleHeader from "./TitleHeader.js";
import AboutMe from './AboutMe.js';
import Publications from './Publications.js';
import Posters from './Posters';
import ProjectList from './ProjectList.js';
import platypusSvg from "../images/platypus.svg";

import pageData from "../assets/pageData.json"

export default function HomePage() {
  return(
      <div className="app-container"> 
        <TitleHeader title={pageData.title} isProjectTitle={false}/>
        <AboutMe/>
        <ProjectList/>
        <Publications/>
        <p></p>
        <Posters/>
      </div>
  );
}