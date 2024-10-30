import { useState } from 'react'
import reactLogo from './assets/react.svg'
import myphoto from './assets/CVphoto.jpg'
import github from './assets/github.png'
import instagram from './assets/instagram.png'
import mail from './assets/email.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="box-content first_section">
      <div>
        <img src={myphoto} className="photo" alt="Juraj Hertel" />
        <h1>Juraj Hertel</h1>
        <h2>Student & Developer</h2>
        <div>

          <a href="https://github.com/Perky98" target="_blank">
            <img src={github} className="small-logo" alt="Github" />
          </a>

          <a href="mailto:jurajhertel98@gmail.com">
            <img src={mail} className="small-logo" alt="Maik" />
          </a>

          <a href="https://www.instagram.com/juraj_hertel/" target="_blank">
            <img src={instagram} className="small-logo" alt="Instagram" />
          </a>
          
        </div>
      </div>
    </section>
    <section className="about_me full-width">
      <div className="box-content"> 
        <h2>About me</h2>
        <p> I've been programming since 2018 and I'm particularly fascinated by web development.</p>
      </div>
    </section>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
