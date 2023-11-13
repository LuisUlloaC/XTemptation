import { Grid } from "@mui/material"
import LogoColor from "../../assets/logoColor"
import colors from "../../colors"


export default function AuthLeftGrid (){
    return(
        <Grid
        item
        className="authLeftGrid"
      >
          <LogoColor className='shadow'
            height='20vh' width='20vh' primaryColor={colors.light_purple} secondaryColor={colors.dark_purple}
            middleColor={colors.darker_purple}
          style={{ position: 'absolute', marginTop: 50 }} />
        <h1 className='logoFont' style={{display: 'flex', position: 'absolute', marginTop: 120 }}>Xtemptation</h1>
      </Grid>
    )
}
