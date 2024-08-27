import Header from "../Components/Header";
import '../Css/Login.css'



const Login=()=>{
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="login-form">
                <div className="login-info">
                    <div>
                        ID
                        <input type="text" className="textid"/>
                    </div>
                        <div>
                        Password
                    <input type="password" className="textpsw" />
                    </div>
                </div>
                <div className="login-button">
                    <button>로그인</button>
                </div>
            </div>
        </div>
    )

}

export default Login;