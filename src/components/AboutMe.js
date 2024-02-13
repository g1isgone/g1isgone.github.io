import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

import BoldText from "./BoldText";
import pageData from "../assets/pageData.json";
import dis23PresentationPdf from '../presentations/dis2023PublishablePresentation.pdf';

export default function AboutMe() {
  return (
    <div id="about-me-container">
    <Typography align="left"  variant="subtitle1" sx={{fontWeight:'light'}}>
      Hi, I'm Ji Won and I'm a {pageData.aboutMe.occupation} at Brown University.
      I'm advised by <Link href={pageData.aboutMe.advisor1.ref} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.name}</Link> in the <Link href={pageData.aboutMe.advisor1.labRef} color="#53599A" underline="hover"> {pageData.aboutMe.advisor1.labName}. </Link> 
      I also run the <Link href="https://sites.google.com/brown.edu/gwics" color="#53599A" underline="hover">GWiCS+</Link> group at Brown and have somehow become a plant person <span>&#8212;</span> artificial and of the sort.
      <p></p>
      My primary research interests are in <BoldText txt="creating long-term, human-centric systems that adapt to changing human behaviors."/> 
      People naturally change over time, but it's an aspect we often overlook. 
      So how can systems reflect that and what can we learn from our ever-changing selves?
      I've investigated this in the context of sleep and mixed reality so far, but more to come!
      <p></p>
      That's all for now, but please feel free to email me. Will work for coffee :) 
      <p></p> 
     </Typography>
    </div>
  );
}
