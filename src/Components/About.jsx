import '../Css/About.css';
import me from '../images/me.jpg';
import name from '../images/name.svg';
import birth from '../images/birth.svg';
import address from '../images/address.svg';
import school from '../images/school.svg';
import mail from '../images/mail.svg';




const meAbout =[
    {id: 1, image: name, about:'나원준'},
    {id: 2, image:birth, about:'1994.03.05'},
    {id: 3, image:address, about:'경기도 의정부시'},
    {id: 4, image:school, about:'중부대학교 연극영화학과'},
    {id: 5, image:mail, about:'nwj3808@gamil.com'},

]


const About =()=> {

    return(
        <section className="about">
            <h1>About Me</h1>
            <div className="aboutme">
                <img src={me} alt="내사진" />
                <div className='about-card'>
                    <ul>
                        {meAbout.map((me)=>(
                            <li key={me.id}><img src={me.image} /><span>{me.about}</span></li>    
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;