import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import pageData from "../assets/pageData.json"

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left"  variant="subtitle1" sx={{fontWeight:'light'}}>
      Hey, I'm {pageData.title}. I am a {pageData.occupation} at Brown University in the 
      <Link href={pageData.aboutMe.advisor1.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.labName} </Link> and 
      <Link href={pageData.aboutMe.advisor2.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor2.labName}. </Link> 
 
      <p></p>
      I do research and <Typography display="inline" sx={{color:"#A26769"}}> redesign systems for users of varied stakeholders </Typography> to 
      create interfaces that are for <Typography display="inline" sx={{color:"#A26769"}}> social-good and are accessible and natural </Typography> for the users. 
      <p></p>
      Anyway, that's all for me! Feel free to click around and check out my projects! > :)
    </Typography>
    </div>
  );
}
