import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Css/Manage.css';


const SkillsManage=()=>{

    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [skillList, setSkillList] = useState([]);

    useEffect(()=>{
        const getSkills = async()=>{
            try{
                const response = await axios.get(`https://api.jjoony-portfolio.site/list_skills/${userId}`,{
                    withCredentials: true
                })
                console.log("skill::::"+response.data);
                setSkillList(response.data);
            }catch(error){
                setError('프로젝트 가져올수 없음',error.message);
            }
        }
        getSkills();
    },[userId])
    
    const DeleteProject =async(skill)=>{
        try{
            const response = await axios.delete(`https://api.jjoony-portfolio.site/delete_skills/${skill}`, {
                withCredentials: true  // 쿠키 전송 허용
            });
            navigate('/')
        }catch(error){
            console.log("삭제실패")
            setError('삭제 실패',error.message);
        }
    }


    return(
        <div className='manage'>
        <h1>Skills 관리</h1>
        {skillList.map((pro)=>(
            <div key={pro.no}>
                <div className='manage-content'>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={3}>skill</td>
                                <td>category</td>
                                <td>regist</td>
                                <td>작성자</td>
                            </tr>
                            <tr>
                                <td colSpan={3}>{pro.skill}</td>
                                <td>{pro.category}</td>
                                <td>{pro.regist}</td>
                                <td>{pro.id}</td>
                            </tr>
                            
                                
                        </tbody>
                    </table>
                    <button onClick={()=>DeleteProject(`${pro.skill}`)}>삭제</button>
                </div>    
            </div>
        ))}
    </div>

    )
}

export default SkillsManage;