import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import arrowImage from './images/arrow.svg';
import { useEffect, useState } from 'react';

import Slide from '@mui/material/Slide';
import RegistrationFormPanel from './app/components/RegistrationFormPanel';
import LeftContentPanel from './app/components/LeftContentPanel';

const useCheckMobileScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};

const theme = createTheme();

export default function FormPanel() {
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const contentPanel = () => (
    <Box
      sx={{
        p: 10,
        bgcolor: '#ff9200',
        width: 'auto',
        height: '100vh',
        zIndex: '500',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
      }}
      role="presentation"
    >
      <h1>My world today</h1>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas Vestibulum tortor quam, feugiat vitae, ultricies
        eget, tempor sit amet, ante View all days eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet wisi Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus. tortor
        neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat
      </p>
    </Box>
  );

  //const cssClass = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="aside">
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={5}
          md={5}
          sx={{
            backgroundColor: '#ffd300',
          }}
        >
          <LeftContentPanel />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button
              variant="round"
              sx={{ transform: checked ? 'rotate(180deg)' : '' }}
              onClick={handleChange}
            >
              <Avatar
                sx={{
                  p: 1,
                  bgcolor: 'black',
                  transform: useCheckMobileScreen() ? 'rotate(90deg)' : '',
                }}
                alt="image"
                src={arrowImage}
              />
            </Button>
          </Box>
        </Grid>

        <Grid id="formPanel" item xs={12} sm={7} md={7}>
          <Slide
            direction={useCheckMobileScreen() ? 'up' : 'right'}
            in={checked}
            container={containerRef.current}
          >
            {contentPanel()}
          </Slide>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <RegistrationFormPanel />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
