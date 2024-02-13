import { Typography } from '@mui/material';

import BasicList from './ProceedingsList.js';

export default function Posters() {
  return (
    <div id="posters-container">
      <Typography  align="left" color="#A26769" variant="h5" >
       Posters
      </Typography>
      <BasicList publicationType="poster"/>
    </div>
  );
}