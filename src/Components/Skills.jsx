import '../Css/Skills.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


const Skills=()=>{
    const userId = sessionStorage.getItem('id')
    const [error, setError] = useState('');
    const [skillList, setSkillList] = useState([]);
    const [BackEnd, setBackEnd] = useState([]);
    const [FrontEnd, setFrontEnd] = useState([]);
    const [Database, setDatabase] = useState([]);
    const [Etc, setEtc] = useState([]);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const response = await axios.get(userId === 'test' 
                    ? `https://api.jjoony-portfolio.site/list_skills/${userId}` 
                    : `https://api.jjoony-portfolio.site/list_skills/admin`, {
                    withCredentials: true
                });
                
                console.log("skill::::", response.data);
                
                if (Array.isArray(response.data)) {
                    setSkillList(response.data);
                } else {
                    console.error('Expected an array but got:', response.data);
                }
                
            } catch (error) {
                setError(`가져오기 실패: ${error.message}`);
            }
        };
        getSkills();
    }, [userId]);

    useEffect(() => {
        if (skillList.length > 0) {
            setBackEnd(skillList.filter(skill => skill.category === 'BackEnd'));
            setFrontEnd(skillList.filter(skill => skill.category === 'FrontEnd'));
            setDatabase(skillList.filter(skill => skill.category === 'Database'));
            setEtc(skillList.filter(skill => skill.category === 'Etc'));
        }
    }, [skillList]);


    return (
        <section className='skills'>
            <h1>Sklills</h1>
            <div className='skills-img'>
                <div className='skills-card'>
                    <h3>BackEnd</h3>
                    <ul>
                        {BackEnd.map((back)=>(
                            <li key={back.skill}><img src={back.image} /></li>    
                        ))}
                    </ul>    
                </div>
                <div className='skills-card'>
                    <h3>FrontEnd</h3>
                    <ul>
                        {FrontEnd.map((front)=>(
                            <li key={front.skill}><img src={front.image} /></li>    
                        ))}
                    </ul>
                </div>
                <div className='skills-card'>
                    <h3>Database</h3>
                    <ul>
                        {Database.map((db)=>(
                            <li key={db.skill}><img src={db.image} /></li>    
                        ))}
                    </ul>
                </div>
                <div className='skills-card'>
                    <h3>Etc</h3>
                    <ul>
                        {Etc.map((etc)=>(
                            <li key={etc.skill}><img src={etc.image} /></li>    
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    )
}



export default Skills;