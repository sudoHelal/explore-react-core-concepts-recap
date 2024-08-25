import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'
import Post from './post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>React core concepts</h3>
      <p>1. Component</p>
      <p>2. JSX</p>
      <p>3. Props</p>
      <p>4. Event handler</p>
      <p>5. State</p>
      <p>6. Load data</p>
      <hr />
      <Posts></Posts>
      <Post></Post>
    </>
  )
}

export default App
