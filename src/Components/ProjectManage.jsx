import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



const ProjectManage=()=>{
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [projectList, setprojectList] = useState([])
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

    return(
        <div>
            <h1>프로젝트 관리</h1>
            <div>
                <table>
                    {projectList.map((pro)=>(
                        <tbody key={pro.no}>
                            <th>
                                <td>{pro.subject}</td>
                                <td>{pro.summary}</td>
                                <td>{pro.person}</td>
                                <td>{pro.startDate}</td>
                                <td>{pro.endDate}</td>
                                <td>{pro.content}</td>
                                <td>{pro.id}</td>
                                <td><button>수정</button></td>
                                <td><button onClick={()=>DeleteProject(`${pro.no}`)}>삭제</button></td>
                            </th>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>

    )
}

export default ProjectManage;