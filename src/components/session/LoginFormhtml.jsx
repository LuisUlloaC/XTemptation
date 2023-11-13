import colors from "../../colors"
import AuthLeftGrid from "../utils/authLetfGrid"


export const LoginForm = () => {


    return (
        <div className="container">
            <AuthLeftGrid style={{display: 'flex', position: 'absolute', zIndex: 0}} />
            <div className="authRightGrid" style={{backgroundColor: colors.light_purple}}>
                <form className='formLayout' style={{height: '70%'}} action="#" >
                    <div className='tittle'>Insert email to send restart code</div>
                    <div style={{display: 'flex', flexDirection: 'column', height: '40%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input' type="text" placeholder="Email address*" />
                    </div>
                    <input className='button' type="submit" value="Sign up" />
                <div className="footer">
                    <a className='link' href="/signin" >Back to login</a>
                </div>
                </form>
            </div>
        </div>
    )
}
