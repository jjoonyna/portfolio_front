import { useState, useEffect } from "react";
import axios from 'axios';


const MyInfo =()=>{

    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [userInfo, setUserInfo] = useState([]);
    const [addr, setAddr] = useState('');
    const [email, setEmail] = useState('');
    const [license, setLicense] = useState('');

    useEffect(()=>{
        const GetUser = async()=>{
            try{
                const response = await axios.get(`http://localhost:80/find_about/${userId}`);
                setUserInfo(
                    {id: response.data.id, name: response.data.name, addr: setAddr(response.data.addr),
                    birth: response.data.birth, email: setEmail(response.data.email), university: response.data.university,
                    license: setLicense(response.data.license)
                    }
                )
            }catch(error){
                setError('정보를 찾을수 없음',error.message);
            }
        }
        GetUser();
    },[userId])


    const UpdateInfo= async(event)=>{
        event.preventDefault();
        let formdata = {
            id: userId, addr: addr, email: email, license: license
        }
        try{
            const response = await axios.put(`http://localhost:80/update_about`,formdata, {
                withCredentials: true  // 쿠키 전송 허용
            });
            setAddr(response.data.addr);
            setEmail(response.data.email);
            setLicense(response.data.license);
        }catch(error){
            alert("수정 실패");
            setError("수정 실패",error.message);
        }
    }

    return(
        <div>
            <h1>내 정보 수정</h1>
            <div>
                <form onSubmit={UpdateInfo}>
                    이름<input type="text" readOnly="readOnly" value={userInfo.name}/>
                    주소<input type="text" value={addr} onChange={(e)=>setAddr(e.target.value)}/>
                    생일<input type="text" readOnly="readOnly" value={userInfo.birth}/>
                    이메일<input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    학력<input type="text" readOnly="readOnly" value={userInfo.university}/>
                    자격증<input type="text" value={license} onChange={(e)=>setLicense(e.target.value)}/>
                    <button type="submit">수정</button>
                </form>
            </div>
        </div>
    )
}

export default MyInfo;