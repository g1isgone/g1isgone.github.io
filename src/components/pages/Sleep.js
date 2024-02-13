import { Typography, Divider, Container, 
    Box, Card, CardContent, CardMedia,
    Button} from '@mui/material';
import Link from '@mui/material/Link';

import BoldText from '../BoldText';
import consistent_sleep from "../../images/sleep/consistent_sleep.svg";
import inconsistent_sleep from "../../images/sleep/inconsistent_sleep.svg";
import sleep_as_android from "../../images/sleep/sleep.svg" 

export default function Sleep() {
return (
<div id="description-container">
    {/* <Typography sx={{marginTop:"2vw", marginBottom:'1vw',fontWeight:'light'}} align="left" variant="h5" color="#A26769"> 
    Users and Stakeholders of Mixed Reality
    </Typography> */}
 
    <p></p>
    <Typography align="left"  variant="body1" sx={{fontWeight:'light'}} component='div' >
    <p></p>
    Sleep is so simple, and yet, so complex.
    <p></p>
    All we have to do is shut our eyes and pass out. 
    Do this one thing right and we have access to one of the best preventive healthcare. If you can't tell, I'm very <Link href="https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316 " color="#53599A" underline="hover">Walker</Link> influenced.
    <p></p>
    It's not a secret, but so many of us still struggle to fall and stay asleep at the same time.
    Sometimes it's to celebrate a friend, meet a deadline, or just out of a need to survive. 
    And sometimes we just don't think it's that important and think we could go without it.
    <p></p> 
    Point is, most of us don't sleep at the same time every day even though we know it's good for us.
    Why would we? Each day is a new day, full of surprises, new things to do, and new places to go. 
    Why would I want to live today like I did yesterday? 
    <p></p>
    Fair. I agree. I don't sleep regularly either for similar reasons.
    <p></p>
    And who cares? We have the freedom to do whatever. It's our body and health anyway.
    <p></p>
    Agreed! But that also doesn't mean we shouldn't be aware of how our sleep works and what we are doing to make it or not make it work.
    Why choose either or if you can have both? Do whatever, but know what you're doing. 
    <p></p>
    That's what the <Link href="https://www.nature.com/articles/s41598-017-03171-4" color="#53599A" underline="hover">Sleep Regularity Index (SRI), developed by Phillips et al.</Link>, is about.
    It's about knowing what you're doing, or how you're maintaining consistent sleep behavior between days. 
    It essentially takes two successive days, today and yesterday, and measures whether you were awake and asleep at the same times. 
    If you are, then you have a score of 100. 
    Else, it reflects your irregular or inconsistent sleep behavior with a lower score.
    Here are some visual examples: 
    <p></p>

    <p></p>

    <Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
     <CardContent 	
	  	  sx={{
            width: '35rem',
          }}>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
          User is awake and asleep at the same times on Monday, Tuesday, and Wednesday. 
          They are a sleeper who exhibits a regular sleep routine. 
        </Typography>
      </CardContent>
      <CardContent
        component="img"
		sx={{
            height: '15rem',
            width: '25rem',
			selfAlign:'center'
          }}
		src={ consistent_sleep }
        alt="Diagram showing sleep and awake states mon, tue, wed; user is sleeping and staying awake at the same times "
      />
    </Card>

    <Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
         <CardContent
        component="img"
		sx={{
            height: '15rem',
            width: '25rem',
			selfAlign:'center'
          }}
		src={ inconsistent_sleep }
        alt="Diagram showing sleep and awake states mon, tue, wed; user is sleeping and staying awake at the same times for Mon and Wed but not Tuesday "
      />
     <CardContent 	
	  	  sx={{
            width: '35rem',
          }}>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
        User goes to bed at different times on Tuesday, in comparison to Monday. 
        They are demonstrating irregularity in their day-to-day sleep routine. 
        </Typography>
      </CardContent>
    </Card>
    It's a pretty simple concept, but quite informative!
    It not only gives you descriptors on how your sleep behavior is consistent or inconsistent between days, 
    but also a bite-sized, concrete goal on how to implove your sleep day by day. 
    I've implemented the SRI with <Link href="https://sleep.urbandroid.org/sleep-regularity-index/" color="#53599A" underline="hover">Sleep as Android</Link> so you can start measuring your own SRI if you wanted to. 
    <p></p>
    <Card sx={{  display:'flex', alignItems:'center',
				flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}} elevation={0}>
         <CardContent
        component="img"
		sx={{
            height: '15rem',
            width: '35rem',
			selfAlign:'center'
          }}
		src={ sleep_as_android }
        alt="Diagram showing sleep regularity scores on the Sleep as Android app"
      />
     <CardContent 	
	  	  sx={{
            width: '35rem',
            align:'center'
          }}>
        <Typography display="inline"  variant="body2" sx={{fontWeight:'light'}}>
        A sample of my own SRI (87) on the Sleep as Android app. I'm not a regular sleeper. I try.
        </Typography>
      </CardContent>
    </Card>
    <p></p>
    While these day to day plans and understandings of one's sleep routine are great, 
    they don't give us a comprehensive view of our sleep routines.
    They tell us change is happening, and what changes were made, but
    they don't tell us <i>how</i> we're changing.  
    <p></p>
    But understanding <i>how</i> is necessary if we ever want to have personalized sleep routines.
    Because why should we prescribe the sleep plan to an individual A as to individual B, 
    if the ways they react to change and the attempts to achieve a routine are different, 
    simply because they are different people?
    <p></p>
    So that's what I'm currently investigating. 
    There are some works in progress, and I'll eventually update this page with more info.
    But 'til then, toodles. 
  
    </Typography>
</div>

); 
}