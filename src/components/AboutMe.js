import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

import BoldText from "./BoldText";
import pageData from "../assets/pageData.json";
import dis23PresentationPdf from '../presentations/dis2023PublishablePresentation.pdf';

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left"  variant="subtitle1" sx={{fontWeight:'light'}}>
      Hi, I'm Ji Won and I'm a {pageData.aboutMe.occupation} at Brown University.
      I'm advised by <Link href={pageData.aboutMe.advisor1.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.name}</Link> in the <Link href={pageData.aboutMe.advisor1.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.labName}. </Link> 
      <p></p>
      <BoldText txt="I research and design systems for long-term routine management and sensemaking"/> <span>&#8212;</span> a.k.a. helping people understand their personal data over time.
      Through my research, I want to answer questions like: Why do some people find value in self-tracking, but not others? How can we help individuals find value in their own data over time? 
      I've been looking at this for women's health recently, and will add some updates in my ponderings soon...
      <p></p>
      If you're wondering what the green blob is... that's a platypus next to some animated plants. Yes, I've sort of become a plant person <span>&#8212;</span> artificial and of the sort.
      If you want to talk more, feel free to reach out! Details are in my resume, will work for coffee :) 
      <p></p> 
  <p></p> 
    
     <Typography id="personal-press" sx={{marginTop:'3vw'}}  align="left" color="#A26769" variant="h5">
      Personal Press
      </Typography>
      <p></p>  &#10024; Oct 12-13, 2025 <span>&#8212;</span> I'll be at Aalto University for the 2025 UbiComp/ISWC Doctoral Colloquium, presenting my in-progress thesis on <Link href={"https://drive.google.com/file/d/1P8Qidsg1W7u0ew_iDJEnQFp2NNsyRjgr/view"} color="#53599A" underline="hover" >Designing Systems for Long-term Sensemaking</Link>! Don't be a stranger, I usually don't bite! &#10024; 
      <p></p>  &#10024;  Sep 26, 2025  <span>&#8212;</span> Completed my 5-month internship at Apple as a Human Factors Researcher with the wonderful Behavior and Experience Team~ Checkout <Link href={"https://support.apple.com/en-us/123707"} color="#53599A" underline="hover">Adaptive Power</Link>, the project I worked on that shipped on all iOS 26 devices! &#10024; 
      <p></p>  &#10024;  Apr 25, 2025  <span>&#8212;</span> My baby project, <Link href={"https://jeffhuang.com/papers/SleepRegularity_CHI25.pdf"} color="#53599A" underline="hover">Beyond the Circadian Rhythm: Variable Cycles of Regularity Found in Long-Term Sleep Tracking</Link>, is finally in with a <Link href={"https://www.youtube.com/watch?v=U5Vmm1FjkXU"} color="#53599A" underline="hover">cute hand-drawn, animated blob</Link>! Please watch it... I spent too much of my PhD on it :') &#10024; 
      <p></p>  &#10024;  Jan/Mar, 2025 <span>&#8212;</span> Special Recognition for Outstanding Review for CHI 2025 and DIS 2025 <span>&#8212;</span> will continue trying not to be Reviewer #3 &#10024;
      <p></p>  &#10024;  Sep 26, 2024  <span>&#8212;</span> First Place for the Digital Health Pitch Competition for <Link href={"https://cdh.brown.edu/2024-digital-health-pitch-competition-finalists-judges"} color="#53599A" underline="hover">Productivity, Period</Link>! Woo-hoo! &#10024;
     </Typography>
   
    </div>
  );
}
