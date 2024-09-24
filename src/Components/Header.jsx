import {Link} from 'react-router-dom';
import '../Css/Header.css';
import '../Css/App.css';
import '../Css/reset.css';
import '../Css/common.css';
import { AiFillAliwangwang } from "react-icons/ai";
import React from 'react';

const Header=()=>{
    
    const userID =sessionStorage.getItem('id');
    
    console.log("id:"+userID);

    return (
        <header>
            <div className = 'header-inner'>
                <div className = 'container'>
                    <div id='logo'>
                        <a href='/#main'>jjoony</a>
                    </div>
                    <nav>
                        <a href='/#about'>about</a>
                        <a href='/#skills'>skils</a>
                        <a href='/#project'>project</a>
                        {userID===null&&<Link to='/login'><AiFillAliwangwang className='icon'/></Link>}
                        {userID!==null&&<Link to='/admin'><AiFillAliwangwang className='icon'/></Link>}
                    </nav>
                </div>
            <hr/>
            </div>
        </header>
    );
}

export default React.memo(Header);