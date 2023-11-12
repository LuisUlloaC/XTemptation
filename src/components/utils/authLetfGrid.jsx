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
        className="authLeftGrid"
      >
          <LogoColor className='shadow'
            height='20vh' width='20vh' primaryColor={colors.light_purple} secondaryColor={colors.dark_purple}
            middleColor={colors.darker_purple}
            style={{ position: 'absolute', marginTop: 50}} />
      </Grid>
    )
}
