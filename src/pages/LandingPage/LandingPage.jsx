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
            value={inputs.prompt1 || ""}
            onChange={(e) => handleChange(e, "prompt1")}
        />
        <input 
            type='text' 
            placeholder='Menciona los generos musicales que te gustan' 
            className='prompt-input'
            value={inputs.prompt2 || ""}
            onChange={(e) => handleChange(e, "prompt2")}
        />
        <input 
            type='text' 
            placeholder='Cuentanos tu estado de animo' 
            className='prompt-input'
            value={inputs.prompt3 || ""}
            onChange={(e) => handleChange(e, "prompt3")}
        />
        <input 
            type='text' 
            placeholder='¿De que epoca prefieres tu musica?' 
            className='prompt-input'
            value={inputs.prompt4 || ""}
            onChange={(e) => handleChange(e, "prompt4")}
        />
        <input 
            type='text' 
            placeholder='¿Cual es el tempo que mas te gusta' 
            className='prompt-input'
            value={inputs.prompt5 || ""}
            onChange={(e) => handleChange(e, "prompt5")}
        />
        <input 
            type='text' 
            placeholder='¿En que idioma escuchas musica?' 
            className='prompt-input'
            value={inputs.prompt6 || ""}
            onChange={(e) => handleChange(e, "prompt6")}
        />
        <button type="button" className="button" onClick={promptSubmit}>
            Inicia tu experiencia
        </button>
    </div>
      <p>{message}</p>
    </>
  )
}

export default App
