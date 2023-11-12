import * as React from 'react';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {ListItem } from '@mui/material';
import Test from '../utils/skeletonLoader';
import MiniDrawer from '../utils/drawer';
import colors from '../../colors';

const defaultTheme = createTheme();

export default function HomeScreen() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', maxWidth: '100cqw' }}>
        <MiniDrawer/>
        <Box
          component="main"
          sx={{
            backgroundColor: colors.background_darker_purple,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ display: 'flex', mt: 4, mb: 4, width: '100cqw' }}>
            <Grid container spacing={3} sx={{ display: 'flex', width: '100cqw' }}>
              <List sx={{ width: '100%' }}>
                {[1, 2, 3].map((value) => (
                  <ListItem
                    key={value}
                    disableGutters={true}
                    sx={{ width: '100%' }}
                  >
                    <Test/>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}