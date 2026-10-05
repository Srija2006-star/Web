import React from 'react';
import {useState} from 'react';
function App() {
  const[like,setLike]=useState(17)
  function IncreaseLike(){
    setLike(like+1)
    console.log(like)
  }
  const[show,setShow]=useState(false)
  const[follow,setFollow]=useState(false)
  const[login,setLogin]=useState(false)
  return(
    <div>
      <h1>Like Button</h1>
      <button onClick={()=>setLike(like+1)}>Likes{like}</button>
      <button onClick={IncreaseLike}>Like</button>
      <h2>Likes: {like}</h2>
      <input placeholder="Enter password" type={show?"text":"password"}/>
      <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button><br />
      <button onClick={()=> setFollow(!follow)}>{follow?"Following":"Follow"}</button>
      <button onClick={()=>setLogin(!login)}>{login?"Logout":"Login"}</button>
    </div>
  )
}
export default App;