import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import colors from '../../colors';
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/provider'
import LogoColor from '../../assets/logoColor'


export default function SignInSide() {
  let navigate = useNavigate();
  const { state, setState } = React.useContext(Context)
  const [wrongCredentials, setWrongCredentials] = React.useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('email') === 'admin' && data.get('password') === 'admin') {
      setState({ ...state, 'user': data.get('email'), 'isAdmin': true })
      navigate('/home')
    } else {
      setWrongCredentials(true)
    }
  };

  return (
    <Grid container component="main" className='grid' sx={defaultTheme.card}>
      <Grid
        item
        className='bg-pan-left'
        xs={false}
        sm={4}
        md={7}
        sx={defaultTheme.leftGrid}
      >
        <div style={{ display: 'flex', alignItems: 'center', padding: 1, position: 'absolute', zIndex: 2 }}>
          <h2 className='neonText'>Xtempt</h2>
          <LogoColor className='shadow'
            height='8vh' width='8vh' primaryColor={colors.light_purple} secondaryColor={colors.dark_purple}
            middleColor={colors.darker_purple}
            style={{ position: 'absolute', marginTop: 50 }} />
          <h2 className='neonText'>tion</h2>
        </div>
        <LogoColor style={defaultTheme.back_logo} height='100vh' width='100vh' />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square style={defaultTheme.rightGrid}>
        <Box sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar sx={{ m: 1, bgcolor: colors.black }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: colors.white }}>
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              error={wrongCredentials}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                "& .MuiInputLabel-root": { color: colors.black },
                border: "1px solid white",
                borderRadius: 1
              }}

            />
            <TextField
              error={wrongCredentials}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                "& .MuiInputLabel-root": { color: colors.black },
                border: "1px solid white",
                borderRadius: 1
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" sx={{ color: colors.black }} />}
              label="Remember me"

            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: colors.black }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPassword" variant="body2" fontStyle={{ color: colors.black }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" fontStyle={{ color: colors.black }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}


const defaultTheme = createTheme({
  card: {
    display: 'flex',
    height: '100vh',
    width: '100cqw'
  },
  leftGrid: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100cqw',
    height: '100vh',
    paddingTop: '10vh',
    paddingBottom: '10vh',
  },
  rightGrid: {
    display: 'flex',
    height: '100vh',
    backgroundColor: colors.white,
    paddingTop: '10vh'
  },
  back_logo: {
    display: 'flex',
    position: 'abosolute',
    left: 5,
    bottom: 5,
    zIndex: -1
  }
});