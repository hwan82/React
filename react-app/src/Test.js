import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Nav(props){
    const lis = [
      //<li><a href="/read/1">html</a></li>
      //<li><a href="/read/2">css</a></li>
      //<li><a href="/read/3">js</a></li>
    ]

    


    for(let i=0; i<props.topics.length; i++){
        let t = props.topics[i];
        lis.push(<li key={t.id}>
        <a id={t.id} href={'/update/'+t.id+'/'+t.title+'/'+t.body}>{t.title}</a>
        </li>)
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Test() {
    const {pId, pTitle, pBody} = useParams();
    const [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        {id:1, title:'html', body:'html is ...'},
        {id:2, title:'css', body:'css is ...'},
        {id:3, title:'javascript', body:'javascript is ...'}
    ]);
    console.log(pId);
    console.log(pTitle);
    useEffect( ()=> {
        if(pId === undefined && pTitle !== undefined) {
            const newTopic = {id:nextId, title: pTitle, body:pBody};
            topics.push(newTopic);
            //setNextId(nextId+1);
        } else if (pId !== undefined && pTitle !== undefined && pBody !== undefined){
            const updateTopic = {id:pId, title:pTitle, body:pBody};
            for(let i=0; i<topics.length; i++){
                if(topics[i].id === Number(pId)) {
                    topics[i] = updateTopic;
                    break;
                }
            }
        }
    });
    
    /*
    if(pId === undefined && pTitle !== undefined) {
        const newTopic = {id:nextId, title: pTitle, body:pBody};
        //topics.push(newTopic);
        //setTopics(topics);
         const newTopics = [...topics];
         newTopics.push(newTopic);
         setTopics(newTopics);
    } else if (pId !== undefined && pTitle !== undefined && pBody !== undefined){
        const newTopics = [...topics];
        const updateTopic = {id:pId, title:pTitle, body:pBody}
        for(let i=0; i<newTopics.length; i++){
          if(newTopics[i].id === pId) {
            newTopics[i] = updateTopic;
            break;
          }
        }
        setTopics(newTopics);
    }*/
    return (
        <div>
            <Nav topics={topics}></Nav>
        </div>
    )
}

export default Test;