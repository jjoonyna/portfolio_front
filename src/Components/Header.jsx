import {Link} from 'react-router-dom';
import '../Css/Header.css';
import '../Css/App.css';
import '../Css/reset.css';
import '../Css/common.css';

const Header=()=>{
    return (
        <header>
            <div className = 'header-inner'>
                <div className = 'container'>
                    <div id='logo'>
                        <Link to='/'>jjoony</Link>
                    </div>
                    <nav>
                        <a href='/about'>about</a>
                        <a href='#'>skils</a>
                        <a href='#'>project</a>
                        <a href='#'>mypage</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;