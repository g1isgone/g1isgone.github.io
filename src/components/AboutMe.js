import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import BoldText from "./BoldText";
import pageData from "../assets/pageData.json";

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left"  variant="subtitle1" sx={{fontWeight:'light'}}>
      Hi, I'm {pageData.title}. I am a {pageData.aboutMe.occupation} at Brown University in the 
      <Link href={pageData.aboutMe.advisor1.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.labName} </Link> and 
      <Link href={pageData.aboutMe.advisor2.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor2.labName}. </Link> 
      <p></p>

      My primary research interests are in <BoldText txt="augmenting people's capabilities with visual information"/>, particularly in the realms of AR/VR.

      <p></p>
      <BoldText txt="This page is currently a work in progress, as I am revamping it,"/> but feel free to click around and check out my projects! > :)
    </Typography>
    </div>
  );
}
