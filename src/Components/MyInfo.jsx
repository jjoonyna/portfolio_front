import '../Css/Info.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const MyInfo =()=>{
    const userRole = sessionStorage.getItem('role');
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        addr: '',
        birth: '',
        email: '',
        university: '',
        license: '',
    })
    const {name, addr, birth, email, university, license} = inputs
    
    const onChange=(e)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    
    useEffect(()=>{
        const GetUser = async()=>{
            try{
                const response = await axios.get(`http://jjoony-portfolio.site/find_about/${userId}`, {
                    withCredentials: true  // 쿠키 전송 허용
                });
                setInputs({
                    name: response.data.name || '',
                    addr: response.data.addr || '',
                    birth: response.data.birth || '',
                    email: response.data.email || '',
                    university: response.data.university || '',
                    license: response.data.license || ''
                })
            }catch(error){
                setError('정보를 찾을수 없음',error.message);
            }
        }
        GetUser();
    },[userId])


    const UpdateInfo= async(event)=>{
        event.preventDefault();
        const formdata = {
            id: userId, addr: inputs.addr, email: inputs.email, license: inputs.license
        }
        try{
            const response = await axios.put(`http://jjoony-portfolio.site/update_about`,formdata, {
                withCredentials: true  // 쿠키 전송 허용
            });
            
            navigate('/');
        }catch(error){
            alert("수정 실패");
            setError("수정 실패",error.message);
            navigate(0);
        }
    }

    return(
        <div className='updateInfo'>
            <h1>내 정보 수정</h1>
            <div>
                <form onSubmit={UpdateInfo} className='update-form'>
                    <div className='update-content'>
                        이름<input type="text" name="name" readOnly="readOnly" value={name}/>
                    </div>
                    <div className='update-content'>
                        주소<input type="text" name="addr" value={addr} onChange={onChange}/>
                    </div>
                    <div  className='update-content'>
                        생일<input type="text" name="birth" onChange={onChange} value={birth}/>
                    </div>
                    <div className='update-content'>
                        이메일<input type="text" name="email" value={email} onChange={onChange}/>
                    </div>
                    <div className='update-content'>
                        학력<input type="text" name="university" onChange={onChange} value={university}/>
                    </div>
                    <div className='update-content'>
                        자격증<input type="text" name="license" value={license} onChange={onChange}/>
                    </div>
                    <div  className='update-content'>
                        <button type="submit">수정완료</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MyInfo;