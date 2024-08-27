import Header from '../Components/Header'
import '../Css/Home.css'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Project from '../Components/Project'




const Home =()=> {
    const NotionClick =()=> {
        window.open('https://blog.naver.com/corini4')
    }

    const GitClick =()=> {
        window.open('https://github.com/jjoonyna')
    }

    

    return(
        <div>
            <Header />
            <main className='main' >
                <div className='home-main'id='about'>
                    <h1 className='home-title'>JJoony&apos; s 포트폴리오</h1>
                    <span>안녕하세요</span>
                    <span>주니어 풀스택 개발자 나원준입니다.</span>
                    <div className='home-link'>
                        <button className='home-git' onClick={GitClick}>JJoony&apos; s GITHUB</button>
                        <button className='home-blog' onClick={NotionClick}>JJoony&apos; s BLOG</button>
                    </div>
                </div>
                <div>
                    <About />
                </div>
                <div id='skills'>
                    <Skills />
                </div>
                <div id='project'>
                    <Project />
                </div>


            </main>
        </div>
        
    )
}

export default Home;