import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectUpdate=({project})=>{
    const navigate = useNavigate();
    const userId = sessionStorage.getItem('id');
    const [error, setError] = useState('');
    const no = project.no;
    const [inputs, setInputs] = useState({
        subject: project.subject || '',
        summary: project.summary || '',
        person: project.person || '',
        startDate: project.startDate ||'',
        endDate: project.endDate || '',
        content: project.content || '',
        link: project.link || '',
        problem: project.problem || '',
        solution: project.solution || '',
        image: '',
    })
    const {subject, summary, person, startDate, endDate, content, link, problem, solution, image} = inputs;
    const onChange=(e)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const Update = async(event)=>{
        event.preventDefault();
        const imageFile = document.querySelector('input[type="file"]').files[0];
        const formData = new FormData();
        
        formData.append('project', new Blob([JSON.stringify({
            no,
            subject,
            summary,
            person,
            startDate,
            endDate,
            content,
            link,
            problem,
            solution,
            id: userId
        })], { type: 'application/json' }));
        formData.append('image', imageFile); // 이미지 파일 추가
        
        
        try {
            const response = await axios.put(`http://localhost:80/update_project`, formData, {
                withCredentials: true  // 쿠키 전송 허용
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
                if(response.data === 1){
                    navigate('/');
                }else if(response.data ===-3){
                    alert('이미지를 선택해주세요');
                }
        }catch(error){
            alert('등록 실패')
            console.error('에러',error);
            setError('등록 실패',error.message);
            navigate(0);
        }
    }

    return(
        <div>
            <form onSubmit={Update}>
                <table>
                    <tbody>
                        <tr>
                            <td>제목<input type="text" name='subject' value={subject} onChange={onChange}/></td>
                            <td>대표이미지<input type="file" name='image' value={image} onChange={onChange}/></td> 
                        </tr>
                        <tr>
                            <td>인원<input type="text" name='person' value={person} onChange={onChange}/></td> 
                            <td>시작날짜<input type="text" name='startDate' value={startDate} onChange={onChange}/></td>
                            <td>끝날짜<input type="text" name='endDate' value={endDate} onChange={onChange}/></td>
                            <td>링크<input type="text" name='link' value={link} onChange={onChange}/></td>
                        </tr>
                        <tr>
                            <td>요약<input type="text" name='summary' value={summary} onChange={onChange}/></td>
                            <td>내용<textarea name='content' value={content} onChange={onChange}></textarea></td>
                        </tr>
                        <tr>
                            <td>문제<input type="text" name='problem' value={problem} onChange={onChange}/></td>
                            <td>해결<input type="text" name='solution' value={solution} onChange={onChange}/></td> 
                            <td><button type='submit'>수정 완료</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

ProjectUpdate.propTypes = {
    project: PropTypes.shape({
        no : PropTypes.number.isRequired,
        subject: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        person: PropTypes.number.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        link: PropTypes.string,
        problem: PropTypes.string,
        solution: PropTypes.string,
    }).isRequired,
};
export default ProjectUpdate;