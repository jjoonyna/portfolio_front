import '../Css/About.css';
import me from '../images/me.jpg';
import name from '../images/name.svg';
import birth from '../images/birth.svg';
import address from '../images/address.svg';
import university from '../images/school.svg';
import mail from '../images/mail.svg';
import axios from 'axios';
import {useState, useEffect} from 'react';



const About =()=> {
    
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [meAbout, setMeAbout] = useState([]);
    useEffect(()=>{
        const fetchUser = async()=>{
            try{
                const response = await axios.get(`http://localhost:80/find_about/admin`);
                setUser(response.data);
                setMeAbout ([
                    {id: 1, image: name, about: user.name},
                    {id: 2, image: birth, about: user.birth},
                    {id: 3, image: address, about: user.addr},
                    {id: 4, image: university, about: user.university},
                    {id: 5, image: mail, about: user.email},
                ]);
            }catch(error){
                setError('유저 찾을수 없음',error.message);
            }
        }
        fetchUser();
    })



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