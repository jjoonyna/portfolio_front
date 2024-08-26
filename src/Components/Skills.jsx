import '../Css/Skills.css'
import jpa from '../images/jpa.png';
import java from '../images/java.png';
import git from '../images/git.png';
import github from '../images/github.png';
import mysql from '../images/mysql.png';
import springboot from '../images/springboot.png';
import gradle from '../images/gradle.png';
import jquery from '../images/jquery.png';
import front from '../images/front.png';
import aws from '../images/aws.png';
import ec2 from '../images/ec2.png';
import s3 from '../images/s3.png';
import react from '../images/react.png';
import mybatis from '../images/mybatis.png';
import oracle from '../images/oracle.png';


const BackList = [
    {id: 1, image: springboot, alt: 'SpringBoot'},
    {id: 2, image: java, alt: 'Java'},
    {id: 3, image: jpa, alt: 'JPA'},
    {id: 4, image: mybatis, alt: 'myBatis'},
    {id: 5, image: gradle, alt: 'Gradle'}
]
const FrontList = [
    {id: 1, image: front, alt: 'front기본'},
    {id: 2, image: jquery, alt: 'JQuery'},
    {id: 3, image: react, alt:'React'}
]
const DBList = [
    {id: 1, image: mysql, alt: 'MySQL'},
    {id: 2, image: oracle, alt: 'Oracle'}
]
const Etc = [
    {id: 1, image: aws, alt: 'AWS'},
    {id: 2, image: s3, alt: 'S3'},
    {id: 3, image: ec2, alt: 'Ec2'},
    {id: 4, image: git, alt: 'Git'},
    {id: 5, image: github, alt: 'GitHub'}
]


const Skills=()=>{
    return (
        <section className='skills'>
            <h1>Sklills</h1>
            <div className='skills-img'>
                <div className='skills-back'>
                    <h3>BackEnd</h3>
                    <ul>
                        {BackList.map((back)=>(
                            <li key={back.id}><img src={back.image} /><span>{back.about}</span></li>    
                        ))}
                    </ul>    
                </div>
                <div className='skills-front'>
                    <h3>FrontEnd</h3>
                    <ul>
                        {FrontList.map((front)=>(
                            <li key={front.id}><img src={front.image} /><span>{front.about}</span></li>    
                        ))}
                    </ul>
                </div>
                <div className='skills-db'>
                    <h3>Database</h3>
                    <ul>
                        {DBList.map((db)=>(
                            <li key={db.id}><img src={db.image} /><span>{db.about}</span></li>    
                        ))}
                    </ul>
                </div>
                <div className='skills-etc'>
                    <h3>Etc</h3>
                    <ul>
                        {Etc.map((etc)=>(
                            <li key={etc.id}><img src={etc.image} /><span>{etc.about}</span></li>    
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
}



export default Skills;