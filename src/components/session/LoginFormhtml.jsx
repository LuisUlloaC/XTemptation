import AuthLeftGrid from "../utils/authLetfGrid"


export const LoginForm = () => {


    return (
        <div className="container" >
            <AuthLeftGrid />
            <div className="authRightGrid">
                <form className='formLayout' style={{height: '70%'}} action="#" >
                    <div className='tittle'>Sign up</div>
                    <div style={{display: 'flex', flexDirection: 'row', height: '12%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input'style={{width: '45%', height: '100%'}} type="text" placeholder="First Name*" />
                        <input className='input' style={{width: '45%', height: '100%'}} type="text" placeholder="Last Name*"  />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', height: '40%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input' style={{height: '40%'}} type="text" placeholder="Email address*" />
                        <input className='input' style={{height: '40%'}} type="password" placeholder="Password*"  />
                        <input className='input' style={{height: '40%'}} type="password" placeholder="Repeat password*"  />
                    </div>
                    <input className='button' type="submit" value="Sign up" />
                <div className="footer">
                    <a className='link' href="/forgotPassword" >Forgot password?</a>
                    <a className='link' href="/signin" >Already have an account? Sign in</a>
                </div>
                </form>
            </div>
        </div>
    )
}
