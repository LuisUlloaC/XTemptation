import LogoColor from "../../assets/logoColor"
import CardContainer from "../utils/cardContainer"

const LoginForm =()=> {
 return(
    <div class="SessionBackground">
        <CardContainer className='MainCardContainerSession'>
            <div style={{display: "flex",flexGrow: '2', justifyContent: "center", alignItems: "center", minHeight: '100vh'}}>
                <LogoColor className="PromotionalSVG"/>
            </div>
            <div className="BigCardItemRight">
                <div className='CardSessionLayout'>
                    <span style={{display: "flex",fontSize: '5vh', fontWeight: 700, justifyContent: "center"}}>Iniciar Sesión</span>
                    <div className="DataLayout">
                        <input className="input"placeholder="Correo" name="uname" required/>
                    </div>
                    <div className="DataLayout">
                        <input className="input" type="password" placeholder="Contraseña" name="psw" required/>
                    </div>
                    <button className="StyledCardButton" type="submit">Iniciar Sesión</button>
                </div>
            </div>
        </CardContainer>
    </div>
   )
}


export default LoginForm


  