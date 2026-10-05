import React from 'react';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  )
}
function PageNotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
    </div>
  )
}
function App() {
  return (
    <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>|
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;