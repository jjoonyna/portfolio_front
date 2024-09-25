import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import ProjectUpdate from './ProjectUpdate';
import '../Css/Manage.css';

const ProjectManage=()=>{
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [projectList, setprojectList] = useState([])
    const [update, setUpdate] = useState(null);
    useEffect(()=>{
        const getProject = async()=>{
            try{
                const response = await axios.get(`http://localhost:80/list_project/${userId}`);
                setprojectList (response.data);
            }catch(error){
                setError('프로젝트 가져올수 없음',error.message);
            }
        }
        getProject();
    },[])
    
    const DeleteProject =async(no)=>{
        alert(`정말 삭제하시겠습니까?`);
        try{
            const response = await axios.delete(`http://localhost:80/delete_project/${no}`, {
                withCredentials: true  // 쿠키 전송 허용
            });
            navigate(0)
        }catch(error){
            console.log("삭제실패")
            setError('삭제 실패',error.message);
        }
    }

    const ShowUpdate =(no)=>{
        if(update===no){
            setUpdate(null);
        }else{
            setUpdate(no);
        }
    }

    return(
        <div className='manage'>
            <h1>프로젝트 관리</h1>
            {projectList.map((pro)=>(
                <div key={pro.no}>
                    <div className='manage-content'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>제목</td>
                                    <td>인원</td>
                                    <td>요약</td>
                                    <td>시작날짜</td>
                                    <td>종료날짜</td>
                                    <td>작성자</td>
                                </tr>
                                <tr>
                                    <td>{pro.subject}</td>
                                    <td>{pro.person}</td>
                                    <td>{pro.summary}</td>
                                    <td>{pro.startDate}</td>
                                    <td>{pro.endDate}</td>
                                    <td>{pro.id}</td>
                                </tr>
                                
                                    
                            </tbody>
                        </table>
                        <button onClick={()=>ShowUpdate(pro.no)}>{update===pro.no?'취소':'수정'}</button>
                        <button onClick={()=>DeleteProject(`${pro.no}`)}>삭제</button>
                    </div>
                    <div className='manage-update'>
                        {update===pro.no&&(<ProjectUpdate project={pro}/>)}    
                    </div>    
                </div>
            ))}
        </div>

    )
}

export default ProjectManage;