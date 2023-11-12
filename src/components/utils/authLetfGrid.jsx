import { Grid, createTheme } from "@mui/material"
import LogoColor from "../../assets/logoColor"
import colors from "../../colors"


export default function AuthLeftGrid (){
    return(
        <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={defaultTheme.leftGrid}
      >
        <div style={{ display: 'flex', alignItems: 'center', padding: 1, position: 'absolute', zIndex: 2 }}>
          <LogoColor className='shadow'
            height='20vh' width='20vh' primaryColor={colors.light_purple} secondaryColor={colors.dark_purple}
            middleColor={colors.darker_purple}
            style={{ position: 'absolute', marginTop: 50}} />
        </div>
      </Grid>
    )
}


const defaultTheme = createTheme({
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
  });