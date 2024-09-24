import '../Css/About.css';
import me from '../images/me.jpg';
import name from '../images/name.svg';
import birth from '../images/birth.svg';
import address from '../images/address.svg';
import university from '../images/school.svg';
import mail from '../images/mail.svg';
import license from '../images/license.svg'

import axios from 'axios';
import {useState, useEffect} from 'react';



const About =()=> {
    
    const [error, setError] = useState('');
    const [meAbout, setMeAbout] = useState([]);

    useEffect(()=>{
        const aboutUser = async()=>{
            try{
                const response = await axios.get(`http://localhost:80/find_about/admin`);
                const user = response.data;
                setMeAbout ([
                    {id: 1, image: name, about: '이름', content: user.name},
                    {id: 2, image: birth, about: '생년월일', content: user.birth},
                    {id: 3, image: address, about: '주소', content: user.addr},
                    {id: 4, image: university, about: '학력', content: user.university},
                    {id: 5, image: mail, about: '이메일', content: user.email},
                    {id: 6, image: license, about: '자격증', content: user.license}
                ]);
            }catch(error){
                setError('유저 찾을수 없음',error.message);
            }
        }
        aboutUser();
    },[])


    return(
        <section className="about">
            <h1>About Me</h1>
            <div className="aboutme">
                <img src={me} alt="내사진" />
                <div className='about-card'>
                    <ul>
                        {meAbout.map((me)=>(
                            <li key={me.id}><img src={me.image} /><span>{me.about}</span>
                            <div className='myinfo' >&nbsp;&nbsp;&nbsp;{me.content}</div></li>    
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About;