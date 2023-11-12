import AuthLeftGrid from "../utils/authLetfGrid"


export const LoginForm = () => {


    return (
        <div className="container" >
            <AuthLeftGrid />
            <div className="authRightGrid">
                <form className='formLayout' action="#" >
                    <div className='tittle'>Sign in</div>
                    <div style={{display: 'flex', flexDirection: 'column', height: '30%',width: '100%',justifyContent: 'space-between'}}>
                        <input className='input' type="text" placeholder="Email address*" />
                        <input className='input' type="password" placeholder="Password*"  />
                    </div>
                    <input className='button' type="submit" value="Sign in" />
                <div className="footer">
                    <a className='link' href="/forgotPassword" >Forgot password?</a>
                    <a className='link' href="#" >Don't have an account? Sign in</a>
                </div>
                </form>
            </div>
        </div>
    )
}
