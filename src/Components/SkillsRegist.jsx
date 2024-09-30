import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Css/Regist.css';

const SkillsRegist=()=>{

    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({
        skill: '',
        category: '',
        image: ''
    })
    const {skill, category, image} = inputs;
    
    const onChange=(e)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const InsertSkills = async(event)=>{
        event.preventDefault();
        const imageFile = document.querySelector('input[type="file"]').files[0];
        const formData = new FormData();
        
        formData.append('skills', new Blob([JSON.stringify({
            skill,
            category,
            id: userId
        })], { type: 'application/json' }));
        formData.append('image', imageFile); // 이미지 파일 추가
        
        
        try {
            const response = await axios.post(`http://jjoony-portfolio.site/insert_skills`, formData, {
                withCredentials: true  // 쿠키 전송 허용
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
                if(response.data === 1){
                    navigate('/');
                }else if(response.data ===-3){
                    alert('이미지를 선택해주세요');
                }
        }catch(error){
            alert('등록 실패')
            console.error('에러',error);
            setError('등록 실패',error.message);
            navigate(0);
        }
    }
    

    return(
        <div className='regist'>
            <h1>Skills 등록</h1>
            <form onSubmit={InsertSkills} className='regist-form'>
                <table className='regist-content'>
                    <tbody>
                        <tr>
                            <td>카테고리<select name='category' value={category} onChange={onChange}>
                                <option value=''>카테고리 선택</option>
                                <option value='BackEnd'>BackEnd</option>
                                <option value='FrontEnd'>FrontEnd</option>
                                <option value='Database'>Database</option>
                                <option value='Etc'>Etc</option>
                                </select></td> 
                        </tr>
                        <tr>
                            <td>스킬명<input type="text" name='skill' value={skill} onChange={onChange}/></td>
                            
                        </tr>
                        <tr>
                            <td>대표이미지<input type="file" name='image' value={image} onChange={onChange}/></td> 
                            <td rowSpan={3}></td>
                        </tr>
                        <tr>
                            <td><button type='submit'>등록</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default SkillsRegist;