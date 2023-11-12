import AuthLeftGrid from "../utils/authLetfGrid"


export const LoginForm = () => {


    return (
        <div className="container" style={theme.container}>
            <AuthLeftGrid />
            <div className="authRightGrid" style={theme.rightGrid}>
                <h1>Login</h1>
                <form className='formLayout' action="#" style={{display: 'flex', flexDirection: 'column'}}>
                    <input className='input' type="text" placeholder="username" class="field" />
                    <input type="password" placeholder="password" class="field" />
                    <input type="submit" value="login" class="btn" />
                </form>
                <div class="pass-link">
                    <a href="#" >Lost your password?</a>
                </div>
            </div>
        </div>
    )
}
