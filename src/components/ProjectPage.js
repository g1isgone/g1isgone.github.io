import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import TitleHeader from './TitleHeader.js';
import ArAgency from './pages/ArAgency.js';
import Sleep from './pages/Sleep.js';

export default function ProjectPage({project}) {
  function renderPage(project){
    if (project.path ==="ArAgency"){
      return <ArAgency/>
    }

    if (project.path == "Sleep"){
      return <Sleep/>
    }
  }

  return (
   
      <div className="app-container"> 
        <TitleHeader title={project.name} isProjectTitle={true}/>
        {renderPage(project)}
      </div>
  );
}