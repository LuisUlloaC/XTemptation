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
    <div className='homeContainer'>
      <MiniDrawer />
    </div>
  );
}