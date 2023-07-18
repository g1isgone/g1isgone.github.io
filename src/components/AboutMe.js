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
      I'm advised by <Link href={pageData.aboutMe.advisor1.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.name}</Link> and <Link href={pageData.aboutMe.advisor2.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor2.name}</Link>. I run the GWiCS+ group at Brown and have somehow become a plant person - artificial and of the sort.
      <p></p>
      My primary research interests are in <BoldText txt="creating long-term, human-centric systems that adapt to changing human behaviors"/> particularly in the visual realms of AR/VR. I also work on long-term behavioral computing for sleep data. A bit of an odd mash, but they fit under the same umbrella - I'll only reveal over a cup of coffee.
      <p></p> 
      I am always on the look for collaborations and mentoring students interested in purusing research; e-mail is the best form of contact. 
      <p></p>
      Currently I'm interning at Adobe Research with Ryan Rossi. Per recent updates, I presented a <Link href={"https://jeffhuang.com/papers/ARAgency_DIS23.pdf"} color="#53599A" underline="hover"> paper at DIS'23 </Link> in Pittsburgh for the first time on how the presence of AR glasses and basic face filters affect power dynamics between the user and the secondary actor, a term we coined for people who don't wear AR glasses but are active co-creators of the mixed reality space. 
    </Typography>
    </div>
  );
}
