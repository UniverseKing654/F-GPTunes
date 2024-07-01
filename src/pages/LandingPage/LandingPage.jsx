import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './LandingPage.css'
import axios from "axios";

function App() {

    const navigate = useNavigate()

  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e, inputName) => {
    setInputs({...inputs, [inputName]: e.target.value})
  }

  const promptSubmit = async () => {
    console.log(`Boton`)
    axios.post(`${import.meta.env.VITE_BACKEND_URL}`, inputs).
    then((response) => {
        console.log(response)
        setMessage(response.data)
        //navigate('/recommendation')
        })
    .catch((error) => {
        console.log(error)
        setMessage(error.response.data.error.message)
    })
}

  return (
    <>
      <h1 id='landing-page-title'>GPTunes</h1>
      <div id='prompt-container'>
        <input 
            type='text' 
            placeholder='Describe tus gustos musicales' 
            className='prompt-input'
            value={inputs.prompt || ""}
            onChange={(e) => handleChange(e, "prompt")}
        />
        <input 
            type='text' 
            placeholder='Menciona los generos musicales que te gustan' 
            className='prompt-input'
            value={inputs.genre || ""}
            onChange={(e) => handleChange(e, "genre")}
        />
        <input 
            type='text' 
            placeholder='Cuentanos tu estado de animo' 
            className='prompt-input'
            value={inputs.mood || ""}
            onChange={(e) => handleChange(e, "mood")}
        />
        <input 
            type='text' 
            placeholder='¿De que epoca prefieres tu musica?' 
            className='prompt-input'
            value={inputs.time || ""}
            onChange={(e) => handleChange(e, "time")}
        />
        <input 
            type='text' 
            placeholder='¿Cual es el tempo que mas te gusta' 
            className='prompt-input'
            value={inputs.bpm || ""}
            onChange={(e) => handleChange(e, "bpm")}
        />
        <input 
            type='text' 
            placeholder='¿En que idioma escuchas musica?' 
            className='prompt-input'
            value={inputs.language || ""}
            onChange={(e) => handleChange(e, "language")}
        />
        <button type="button" id='landing-page-button' onClick={promptSubmit}>
            Inicia tu experiencia
        </button>
    </div>
      <p>{message}</p>
    </>
  )
}

export default App
