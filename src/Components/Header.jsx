import {Link} from 'react-router-dom';
import '../Css/Header.css';
import '../Css/App.css';
import '../Css/reset.css';
import '../Css/common.css';
import { AiFillAliwangwang } from "react-icons/ai";


const Header=()=>{

    return (
        <header>
            <div className = 'header-inner'>
                <div className = 'container'>
                    <div id='logo'>
                        <Link to='/'>jjoony</Link>
                    </div>
                    <nav>
                        <a href='/#about'>about</a>
                        <a href='/#skills'>skils</a>
                        <a href='/#project'>project</a>
                        <Link to='/login'><AiFillAliwangwang className='icon'/></Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;