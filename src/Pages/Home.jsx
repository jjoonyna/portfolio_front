import Header from '../Components/Header'
import '../Css/Home.css'
import About from '../Components/About'
import Skills from '../Components/Skills'
import ProjectList from '../Components/ProjectList'




const Home =()=> {
    const userId = sessionStorage.getItem('id');
    const NotionClick =()=> {
        window.open('https://blog.naver.com/corini4')
    }

    const GitClick =()=> {
        window.open('https://github.com/jjoonyna')
    }

    

    return(
        <div id='main'>
            <Header />
            <main className='main'>
                <div className='home-main'>
                    <h1 className='home-title'>JJoony&apos; s 포트폴리오</h1>
                    <span>안녕하세요</span>
                    {userId==='test' && <span>반갑습니다 테스트 유저분 지금은 테스트유저 페이지입니다</span>}
                    {userId===null && <span>백엔드 개발자 나원준입니다.</span>}
                    {userId==='admin' && <span>백엔드 개발자 나원준입니다.</span>}
                    <div className='home-link'>
                        <button className='home-git' onClick={GitClick}>JJoony&apos; s GITHUB</button>
                        <button className='home-blog' onClick={NotionClick}>JJoony&apos; s BLOG</button>
                    </div>
                </div>
                <div id='about'>
                    <About />
                </div>
                <div id='skills'>
                    <Skills />
                </div>
                <div id='project'>
                    <ProjectList />
                </div>


            </main>
        </div>
        
    )
}

export default Home;