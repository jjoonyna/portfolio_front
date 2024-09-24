import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const ProjectList=()=>{
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [projectList, setprojectList] = useState([])
    useEffect(()=>{
        const getProject = async()=>{
            try{
                const response = await axios.get(`http://localhost:80/list_project/test`, {
                    withCredentials: true  // 쿠키 전송 허용
                });
                setprojectList (response.data);
            }catch(error){
                setError('프로젝트 가져올수 없음',error.message);
            }
        }
        getProject();
    },[])

    const onLink=(link)=>{
        window.open(link);
    }
    return(
        <div>
            <h1>프로젝트 목록</h1>
            <div>
                <table>
                    {projectList.map((pro)=>(
                        <tbody key={pro.no}>
                            <tr>
                                <td>{pro.subject}</td>
                                <td>{pro.summary}</td>
                                <td>{pro.person}</td>
                                <td>{pro.startDate}</td>
                                <td>{pro.endDate}</td>
                                <td><button onClick={()=>onLink(`${pro.link}`)}><img src=''/>링크버튼</button></td>
                                <td>{pro.content}</td>
                                <td><img src={pro.image} /></td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}


export default ProjectList;