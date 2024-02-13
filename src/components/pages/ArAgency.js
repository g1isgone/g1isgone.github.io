import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

import arAgency from "../../images/arAgency/arAgency.svg";
import arGlasses from "../../images/arAgency/arGlasses.svg";

import AutoAccordian from '../AutoAccordion.js';
import BoldText from '../BoldText';
import dis23PresentationPdf from '../../presentations/dis2023PublishablePresentation.pdf';

export default function ArAgency() {
return (
<div id="description-container">
    {/* <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
    Users and Stakeholders of Mixed Reality
    </Typography> */}

    <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
    <p></p>
    Much thanks to collaborator and friend, Jenny, who worked on this project. 
    <p></p>
    This was an investigation on how augmented reality (AR) glasses affect dyadic, or two-people, interactions.
    One person wore AR glasses that projected an animal face filter on the other person who wasn't wearing AR glasses.
    <p></p>
    Going into this project, I had a pretty pessimistic viewpoint.
    I thought people would absolutely dislike the glasses because they would distort reality and invade people's privacy without their consent. 
    <p></p>
    But after a couple of interviews, it became apparent that that was just my personal bias.
    Many of the users didn't actually mind the negatives of AR glasses as much as I had expected.
    In fact, many were excited to try out new tech and the possibilities it could open. 
    Lesson learned. The end. 
    <p></p>
    Ah, well, not quite. 
    After viewing hours and hours of people's videos and interviews    
    (analyzing qualitative is so, so tough especially if you hear your voice in it), 
    I started to notice that there was a disconnect between what was being said and what was being done. 
    Participants said the AR glasses played no difference in their conversations, 
    but the video evidence said otherwise. 
    <p></p>
    Not all participants were cognizant of the behavioral changes they and their fellow participant were demonstrating. 
    Some people were leaning into the boards and swerving their head to align the face filters, 
    but according to the participants, it was business as usual.
    <p></p>
    But, more importantly, what we were starting to see was people adapting their behaviors in the face of a new technology. 
    Whether they were aware of it or not, they were starting to change the way they interact with each other.
    Even participants who didn't wear glasses started to behave differently. 
    In fact, we realized that one glassless participant wasn't even necessarily interacting with the other participant, 
    but with the face filter itself. 
    How they repositioned their face also affected the experience of the user with AR glasses. 
    They couldn't see it, the filter, but they were adapting and reacting to the virtual. 
    <p></p>
    So it wasn't just the user that was in mixed reality space. 
    In some ways, the glassless participants were also inter<i>acting</i> in mixed reality space. 
    Thus, to describe glassless participants as a `non-user` or `bystander` is quite limiting. 
    <p></p>
    They are better described as  <BoldText txt={"secondary actors of mixed reality, co-creators of the mixed reality space."}/>
    <p></p>
    So that's what this project was about. 
    This project ended up getting some press as well <Link href="https://spectrum.ieee.org/ar-glasses" color="#53599A" underline="hover">IEEE Spectrum </Link> 
    which was also pretty cool, it's definitely a "hey, mom look, I'm on the news" moment. 
    Below is the deck of slides I used to present the topic at DIS '23<span>&#8212;</span> it has fun doodles, handmade.
    <p></p>
    </Typography>
    <Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
    <iframe  style={{ height: "75vh", width: "100%"}} src={dis23PresentationPdf}></iframe>

    </Card>
 
    
</div>

); 
}