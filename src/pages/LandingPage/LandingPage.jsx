import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import './LandingPage.css'
import axios from "axios";

function App() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e, inputName) => {
    setInputs({...inputs, [inputName]: e.target.value})
  }

  const promptSubmit = async () => {
    console.log(`Boton`)
    axios.get(`${import.meta.env.VITE_BACKEND_URL}`, inputs).
    then((response) => {
        console.log(response)
        setMessage(response.data)
        })
    .catch((error) => {
        console.log(error)
        setMessage(error.response.data.error.message)
    })
}

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>GPTunes</h1>
      <div id='prompt-container'>
        <input 
            type='text' 
            placeholder='Describe tus gustos musicales' 
            className='prompt-input'
            value={inputs.prompt || ""}
            onChange={(e) => handleChange(e, "prompt")}
        />
        <button type="button" className="button" onClick={promptSubmit}>
            Inicia tu experiencia
        </button>
    </div>
      <p className="read-the-docs">
        La API de Chat GPT ta cara muchachos
      </p>
      <p>{message}</p>
    </>
  )
}

export default App
