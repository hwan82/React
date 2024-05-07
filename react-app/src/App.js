import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Header(props){
  console.log('props', props, props.title)
  return <header>
  <h1><a href="/" onClick={(event)=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}
function Nav(props){
  const lis = [
    //<li><a href="/read/1">html</a></li>
    //<li><a href="/read/2">css</a></li>
    //<li><a href="/read/3">js</a></li>
  ]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}
function Article(props) { //create component
  return <article>
<h2>{props.title}</h2>
{props.body}
</article>
}
function Create(props){
  return <article>
    <form onSubmit={event=>{
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
    <h2>Create</h2>
      <p><input type="text" name="title" placeholder="title" /></p>
      <p><textarea name="body" placeholder="body"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}
function Update(props){
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return <article>
  <form onSubmit={event=>{
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    props.onUpdate(title, body);
  }}>
  <h2>Update</h2>
    <p><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
      console.log(event.target.value);
      setTitle(event.target.value);
    }}/></p>
    <p><textarea name="body" placeholder="body" value={body} onChange={event=>{
      console.log(event.target.value);
      setBody(event.target.value);
    }}></textarea></p>
    <p><input type="submit" value="Update"></input></p>
  </form>
</article>
}
function Delete(props){

}
function App() {
  //const _mode = useState('WELCOME');
  //const mode = _mode[0];
  //const setMode = _mode[1];
  const [mode, setMode] = useState('WELCOME');
  const [id,setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]);
  //const topics = [
  //  {id:1, title:'html', body:'html is ...'},
 //   {id:2, title:'css', body:'css is ...'},
 //   {id:3, title:'javascript', body:'javascript is ...'}
 // ];
let content = null;
let contentContext = null;
if(mode === 'WELCOME') {
  content = <Article title="Welcome" body="Hello, WEB"></Article>
} else if(mode === 'READ') {
  let title, body = null;
  for(let i=0; i<topics.length; i++) {
    if(topics[i].id===id) {
      title = topics[i].title;
      body = topics[i].body;
    }
  }
  content = <Article title={title} body={body}></Article>
  contentContext=<>
    <li><a href={'/update/'+id} onClick={event=>{
    event.preventDefault();
    setMode('UPDATE');
  }}>Update</a></li>
  <li><input type="button" value="Delete" onClick={()=>{
    const newTopics = [];
    for(let i=0; i<topics.length; i++) {
      if(topics[i].id !== id) {
        newTopics.push(topics[i]);
      }
    }
    setTopics(newTopics);
    setMode('WELCOME');
  }}>
    </input></li></>//<></>grouping tag를 목적으로
} else if(mode === 'CREATE') {
  content = <Create onCreate={(_title, _body)=>{
    const newTopic = {id:nextId, title: _title, body:_body};
   //topics.push(newTopic);
  //setTopics(topics);
    const newTopics = [...topics];
    newTopics.push(newTopic);
    setTopics(newTopics);
    setMode('READ');
    setId(nextId);
    setNextId(nextId+1);
  }}></Create>
} else if(mode === 'UPDATE') {
  let title, body = null;
  for(let i=0; i<topics.length; i++) {
    if(topics[i].id===id) {
      title = topics[i].title;
      body = topics[i].body;
    }
  }
  content = <Update title={title} body={body} onUpdate={(title,body)=>{
    console.log(title, body);
    const newTopics = [...topics];
    const updateTopic = {id:id, title:title, body:body}
    for(let i=0; i<newTopics.length; i++){
      if(newTopics[i].id === id) {
        newTopics[i] = updateTopic;
        break;
      }
    }
    setTopics(newTopics);
  }}></Update>
}
  return (
    <div>
      <Header title="WEB" onChangeMode={function(){
        setMode('WELCOME');
      }}></Header> 
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav> 
      <Article></Article>
      {content}
      <ul>
      <li><a href="/create" onClick={event=>{
        event.preventDefault();
        setMode('CREATE');

      }}>Create</a></li>
    {contentContext}
    </ul>
    </div>
    //<img src="image.jpg" width="100" height="100"></img>
  );
}

export default App;
