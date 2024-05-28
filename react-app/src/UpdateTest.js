import './App.css';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
function UpdateTest() {
    const {pId, pTitle, pBody} = useParams();
    const [title, setTitle] = useState(pTitle);
    const [body, setBody] = useState(pBody);
    return (
        <div>
            <article>
            <h2>Update: {pId}</h2>
                    <p><input type="text" name="title" placeholder="title" value={title}  onChange={event=>{
                        event.preventDefault();
                        setTitle(event.target.value);
                    }}/></p>
                    <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
                        event.preventDefault();
                        setBody(event.target.value);
                    }}></textarea></p>
                    <p><Link to={`/test/${pId}/${title}/${body}`}>
                        <button>Update</button>
                    </Link>
                    </p>
            </article>
        </div>
    )
}

export default UpdateTest;