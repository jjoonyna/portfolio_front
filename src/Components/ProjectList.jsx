import '../Css/List.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const ProjectList=()=>{
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const [projectList, setprojectList] = useState([])
    
    useEffect(()=>{
        if(userId==='test'){

            const getProject = async()=>{
                try{
                    const response = await axios.get(`http://jjoony-portfolio.site/list_project/${userId}`, {
                        withCredentials: true  // 쿠키 전송 허용
                    });
                    setprojectList (response.data);
                }catch(error){
                    setError('프로젝트 가져올수 없음',error.message);
                }
            }
            getProject();
        }else{
            const getProject = async()=>{
                try{
                    const response = await axios.get(`http://jjoony-portfolio.site/list_project/admin`, {
                        withCredentials: true  // 쿠키 전송 허용
                    });
                    setprojectList (response.data);
                }catch(error){
                    setError('프로젝트 가져올수 없음',error.message);
                }
            }
            getProject();
        }
    },[userId])

    const onLink=(link)=>{
        window.open(link);
    }
    const CeilDate =(start,end)=>{
        const startDate = new Date(start);
        const endDate = new Date(end);
        const ceilDate = endDate-startDate;
        const monDate = Math.ceil(ceilDate/(1000*60*60*24*31));
        return monDate;
    }
    return(
        <div className='projectList'>
            <h1>Project</h1>
                {projectList.map((pro)=>(
                <div className='project-card'   key={pro.no}>
                    <div className='card-img'>
                        <img src={pro.image} />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                            </tr>
                            <tr>
                                <td colSpan={3}>{pro.subject}</td>
                                <td>인원 : {pro.person}명</td>
                            </tr>
                            <tr>
                                <td colSpan={2}>{pro.startDate}~{pro.endDate}(약 {CeilDate(pro.startDate,pro.endDate)}개월)</td>
                                
                                <td colSpan={2}>Git링크: <button onClick={()=>onLink(`${pro.link}`)}><FaGithub size={30}/></button></td>
                            </tr>
                            <tr>
                                <td colSpan={4}>{pro.summary}</td>
                            </tr>
                            <tr>
                                <td colSpan={4} rowSpan={4}>{pro.content.split('\n').map((line, index)=>(<p key={index}>{line}<br/></p>))}</td>
                            </tr>
                            <tr><td></td></tr><tr><td></td></tr><tr><td></td></tr>
                        </tbody>
                    </table>
                </div>
                ))}
        </div>
    )
}


export default ProjectList;