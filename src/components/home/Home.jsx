import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { ListItem } from '@mui/material';
import Test from '../utils/feedCard';
import MiniDrawer from '../utils/drawer';
import colors from '../../colors';
import FeedCard from '../utils/feedCard';
import StorieCard from '../utils/storiesCard';

const defaultTheme = createTheme();

export default function HomeScreen() {
  const [loading, setLoading] = React.useState(true);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', maxWidth: '100cqw' }}>
        <MiniDrawer />
        <Box
          component="main"
          sx={{
            backgroundColor: colors.background_darker_purple,
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            paddingTop: '5vw'
          }}
        >
          <Toolbar />
          <Container  sx={{ display: 'flex', width: '100cqw' }}>
            <Grid container spacing={10} sx={{ display: 'flex', maxWidth: '100vw' }}>
              <List sx={{display: 'flex',
                        width: '100vw', 
                        overflowX: 'scroll',
                        '&::-webkit-scrollbar': {
                          display: 'none',
                        },
                        scrollbarWidth: 'none', }}>
                {[1, 2, 3,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5].map((value) => (
                  <ListItem
                    key={value}
                    disableGutters
                    sx={{ width: '100%' }}
                  >
                    <StorieCard loading={true} />
                  </ListItem>
                ))}
              </List>
              <List sx={{ width: '100%' }}>
                {[1, 2, 3].map((value) => (
                  <ListItem
                    key={value}
                    disableGutters={true}
                    sx={{ width: '100%' }}
                  >
                    <FeedCard loading={loading} />
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