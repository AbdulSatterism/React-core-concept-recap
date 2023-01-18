import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <District name='Pori appha'></District> */}

      <LoadPosts></LoadPosts>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h1>Posts :{posts.length}</h1>
      {
        posts.map(post => <Post post={post} key={post.id}></Post>)
      }
    </div>
  )
}

function Post(props) {

  const { title, body } = props.post;
  return (
    <div style={{ backgroundColor: 'lightcyan', border: '1px solid gray', margin: '10px' }}>
      <h2>Title : {title}</h2>
      <p>body : {body}</p>
    </div>
  )
}

/*
function District(props) {
  const [count, setCount] = useState(0);
  const isIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  };
  const isDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={isIncrease}>increase</button>
      <button onClick={isDecrease}>decrease</button>
      <h2>Name :{props.name} </h2>
    </div>
  )
}
*/
export default App;
