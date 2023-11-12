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
import { Context } from '../context/provider';
import AuthLeftGrid from '../utils/authLetfGrid';


export default function SignPrimary() {
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
      <AuthLeftGrid/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={8} square style={defaultTheme.rightGrid}>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: '90%',

          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colors.black }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: colors.white }}>
            SignUp
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  sx={{
                    "& .MuiInputLabel-root": { color: colors.white },
                    border: "1px solid white",
                    borderRadius: 1
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  sx={{
                    "& .MuiInputLabel-root": { color: colors.white },
                    border: "1px solid white",
                    borderRadius: 1
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    "& .MuiInputLabel-root": { color: colors.white },
                    border: "1px solid white",
                    borderRadius: 1
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{
                    "& .MuiInputLabel-root": { color: colors.white },
                    border: "1px solid white",
                    borderRadius: 1
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" sx={{ color: colors.white }} />}
                  label={
                    <Typography variant="body1" sx={{ color: colors.white }}>
                      I want to receive marketing promotions and updates via email.
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: colors.black }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" fontStyle={{ color: colors.white }}>
                  Already have an account? Sign in
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
    backgroundColor: colors.middle_dark_purple
  },
  rightGrid: {
    display: 'flex',
    height: '100vh',
    backgroundColor: colors.darker_purple,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back_logo: {
    display: 'flex',
    position: 'abosolute',
    left: 5,
    bottom: 5,
    zIndex: -1
  }
});