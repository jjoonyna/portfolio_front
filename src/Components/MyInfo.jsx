import { useState, useEffect } from "react";
import axios from 'axios';


const MyInfo =()=>{

    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState([]);
    const userId = sessionStorage.getItem('id');
    
    useEffect(()=>{
        const GetUser = async()=>{
            try{
                const response = await axios.get(`http://localhost:80/find_about/${userId}`);
                setUserInfo(
                    {id: 1, name: response.data.name, addr: response.data.addr,
                    birth: response.data.birth, email: response.data.email, university: response.data.university,
                    license: response.data.license
                    }
                )
            }catch(error){
                setError('정보를 찾을수 없음',error.message);
            }
        }
        GetUser();
    },[userId])

    return(
        <div>
            <h1>내 정보 수정</h1>
            <div>
                <form>
                    이름<input type="text" readOnly="readOnly" value={userInfo.name}/>
                    주소<input type="text" value={userInfo.addr}/>
                    생일<input type="text" readOnly="readOnly" value={userInfo.birth}/>
                    이메일<input type="text" value={userInfo.email}/>
                    학력<input type="text" readOnly="readOnly" value={userInfo.university}/>
                    자격증<input type="text" value={userInfo.license}/>
                </form>
            </div>
        </div>
    )
}

export default MyInfo;