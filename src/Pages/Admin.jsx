
import Header from '../Components/Header.jsx';
import {useState} from 'react';
import MyInfo from '../Components/MyInfo.jsx';
import ProjectManage from '../Components/ProjectManage.jsx';
import ProjectRegist from '../Components/ProjectRegist.jsx'


const Admin=()=>{
    const menuList =[
        {id: 1, content:'내 정보 관리'}, 
        {id: 2, content:'프로젝트 관리'}, 
        {id: 3, content:'프로젝트 등록'}
    ];
    const [menu, setMenu] = useState('');

    const menuChange=(e)=>{
        setMenu(e.target.value);
    }

    return(
        <div>
            <div>
            <Header />
            </div>
            <h1>관리자 페이지</h1>
            <div className='menu'>
                <ul>
                    {menuList.map((menu)=>(
                        <li key={menu.id} ><button onClick={menuChange} value={menu.content}>{menu.content}</button></li>
                    ))}
                </ul>
            </div>
            {menu==='내 정보 관리' && <div><MyInfo /></div>}
            {menu==='프로젝트 관리' && <div><ProjectManage /></div>}
            {menu==='프로젝트 등록' && <div><ProjectRegist /></div>}
        </div>
    )
}

export default Admin;