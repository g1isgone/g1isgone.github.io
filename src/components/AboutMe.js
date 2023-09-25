import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import BoldText from "./BoldText";
import pageData from "../assets/pageData.json";
import dis23PresentationPdf from '../presentations/dis2023PublishablePresentation.pdf';

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left"  variant="subtitle1" sx={{fontWeight:'light'}}>
      Hi, I'm {pageData.title}. I am a {pageData.aboutMe.occupation} at Brown University in the 
      <Link href={pageData.aboutMe.advisor1.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.labName} </Link> and 
      <Link href={pageData.aboutMe.advisor2.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor2.labName}. </Link> 
      I'm advised by <Link href={pageData.aboutMe.advisor1.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.name}</Link> and <Link href={pageData.aboutMe.advisor2.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor2.name}</Link>. I run the GWiCS+ group at Brown and have somehow become a plant person - artificial and of the sort.
      <p></p>
      My primary research interests are in <BoldText txt="creating long-term, human-centric systems that adapt to changing human behaviors."/> 
      Here's my take: Technology changes how we interact with others. It affects our behavior and ultimately redefines our social relationships.      
      Within the realms of AR/VR, the visual overlays and form factor change the behavior of individuals and the way they interact with each other 
      <code>&#8212;</code> think of TikTok challenges and Snapchat filters and how users move around the mobile screen and wit the filters. 
      With various tracking systems, like mobile sleep health tracking, we can observe people changing to new realities and new expectations. 
      So how do we learn from these systems, look forward into the future, and design systems that are built to last? 
      What does it mean to last? And what kind of long-term impact will these systems have? 
      <p></p>
      For more discussions, please feel free to email me. Will work for coffee.
      <p></p> 
      For recent news and updates, I recently interned at Adobe Research to work on Mobile AR Visualizations... details impending. 
      I also presented a <Link href={"https://jeffhuang.com/papers/ARAgency_DIS23.pdf"} color="#53599A" underline="hover"> paper at DIS'23 </Link> in Pittsburgh for the first time! 
      The <Link href={dis23PresentationPdf} color="#53599A" underline="hover"> presentation </Link> was on how the presence of AR glasses and rudimentary face filters affect power dynamics between the user and the secondary actor, 
      a term we coined for people who don't wear AR glasses but are active co-creators of the mixed reality space. It recently got some <Link href={"https://spectrum.ieee.org/ar-glasses"} color="#53599A" underline="hover">press</Link> - woohoo.
    </Typography>
    </div>
  );
}
