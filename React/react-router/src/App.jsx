import React from 'react';
import{BrowserRouter,Routes,Route} from "react-router-dom";
function Home(){
   return(
      <div>
         <h1>Home Page</h1>
      </div>
   )
}
function About(){
  return(
     <div>
        <h1>About Page</h1>
     </div>
  )

}
function PageNotFound(){
   return(
      <div>
         <h1>404 Page Not Found</h1>
      </div>
   )
}
function App(){
  return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App;
