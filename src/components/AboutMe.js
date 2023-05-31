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
      I'm advised by <Link href={pageData.aboutMe.advisor1.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.name}</Link> and  <Link href={pageData.aboutMe.advisor2.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor2.name}</Link>. I run the GWiCS+ group at Brown and have somehow become a plant person - artificial and of the sort.
      <p></p>
      My primary research interests are in <BoldText txt="human-centric systems that augment people's ability to process visual information"/> particularly in the realms of AR/VR. I also work on long-term behavioral computing for sleep data. 
      
      <p></p>
    </Typography>
    </div>
  );
}
