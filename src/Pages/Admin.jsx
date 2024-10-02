import '../Css/Admin.css'
import Header from '../Components/Header.jsx';
import {useState} from 'react';
import MyInfo from '../Components/MyInfo.jsx';
import ProjectManage from '../Components/ProjectManage.jsx';
import ProjectRegist from '../Components/ProjectRegist.jsx'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SkillsManage from '../Components/SkillsManage.jsx';
import SkillsRegist from '../Components/SkillsRegist.jsx';



const Admin=()=>{

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const Logout =async()=>{
        try{
            const response = await axios.get("https://api.jjoony-portfolio.site/logout");
            sessionStorage.clear();
            navigate('/');
        }catch(error){
            setError("로그아웃 실패");
        }
    }

    const menuList =[
        {id: 1, content: 'Project 등록'},
        {id: 2, content: 'Project 관리'}, 
        {id: 3, content: 'About 관리'}, 
        {id: 4, content: 'Skills 등록'},
        {id: 5, content: 'Skills 관리'},
        {id: 6, content: '로그아웃'}
    ];
    const [menu, setMenu] = useState('');

    const menuChange =(e)=>{
        if(e.target.value==='로그아웃'){
            Logout();
        }
        setMenu(e.target.value);
    }

    return(
        <div>
            <div>
            <Header />
            </div>
            <div className='admin'>
                <div className='admin-content'>
                    <h1><a href='/admin'>관리자 페이지</a></h1>
                    <div className='menu'>
                        <ul>
                            {menuList.map((menu)=>(
                                <li key={menu.id} ><button onClick={menuChange} value={menu.content}>{menu.content}</button></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='menu-content'>
                {menu==='' &&<div className='content'><ProjectRegist /></div>}
                {menu==='About 관리' && <div className='content'><MyInfo /></div>}
                {menu==='Project 관리' && <div className='content'><ProjectManage /></div>}
                {menu==='Project 등록' && <div className='content'><ProjectRegist /></div>}
                {menu==='Skills 관리' && <div className='content'><SkillsManage /></div>}
                {menu==='Skills 등록' && <div className='content'><SkillsRegist /></div>}            
                </div>
            </div>
        </div>
    )
}

export default Admin;