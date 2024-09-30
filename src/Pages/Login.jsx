import Header from "../Components/Header";
import '../Css/Login.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [user, setUser] =useState(null);
    

    const LoginUser = async(event)=>{
        event.preventDefault();
        let formdata = {
            id: id,
            pwd: pwd
        }
        try{
            const response = await axios.post(`https://jjoony-portfolio.site/login_user`,formdata, {
                withCredentials: true  // 쿠키 전송 허용
            });
            setUser(response.data);
            sessionStorage.setItem('id',response.data.user);
            if(response.data.role !== null){
                navigate('/admin');
            }
        }catch(error){
                alert("잘못 입력 하였습니다.")
                console.error('에러발생',error);
                setError('유저 찾을수 없음',error.message);
            
        }
    }
    


    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="login-info">
                <h1>로그인</h1>
                <form onSubmit={LoginUser} className="login-form">
                        <div>
                            ID
                            <input type="text" className="textid" value={id} onChange={(e)=>setId(e.target.value)}/>
                        </div>
                        <div>
                            Password
                            <input type="password" className="textpwd" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                        </div>
                    <div className="login-button">
                        <button type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Login;