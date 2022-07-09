import React from 'react';
import Box from '@mui/material/Box';

import Avatar from '@mui/material/Avatar';
import faceImage from '../../images/face.svg';

function LeftContentPanel(){
      
    return(
        <div>
        <Box sx={{
            m: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'}}>

          <Avatar sx={{ m: 1, bgcolor: '', width:200, height:200 }} alt="image" src={faceImage} />
          <h2>Front-end Challange</h2>
          <p>This is the design that I have coded up. I hope it's impressive</p>
        </Box>
        </div>
    );
}

export default LeftContentPanel;