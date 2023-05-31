import BreadcrumbHeader from './BreadcrumbHeader.js';

import { Typography,  Divider} from '@mui/material';

import pageData from "../assets/pageData.json"
import platypusSvg from "../images/platypus.svg";

export default function TitleHeader({title, isProjectTitle}) {
  return (
        <div>
        <div className="header-container">
          <Typography color={isProjectTitle ? "#A26769": "orange"} variant="h2">
           {  title }
          </Typography>
          <img src={platypusSvg} width="30%" height="75%"></img>
          <BreadcrumbHeader/>  
        </div>
        <Divider variant="left"/>  
        </div>
  );
}