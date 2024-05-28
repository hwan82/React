import './App.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function CreateTest() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    return (
        <div>
            <article>
                <h2>Create</h2>
                <p><input type="text" name="title" placeholder="title" value={title}  onChange={event=>{
                        event.preventDefault();
                        setTitle(event.target.value);
                    }}/></p>
                    <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
                        event.preventDefault();
                        setBody(event.target.value);
                    }}></textarea></p>
                <p><Link to={`/test/${title}/${body}`}>
                        <button>Update</button>
                    </Link>
                </p>
            </article>
        </div>
    )
}

export default CreateTest;