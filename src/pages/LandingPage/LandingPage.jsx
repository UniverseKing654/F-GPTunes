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
    setMessage('')
  }

  const promptSubmit = async () => {
    console.log(`Boton`)
    axios.post(`${import.meta.env.VITE_BACKEND_URL}`, inputs).
    then((response) => {
        console.log(response)
        setMessage(response.data)
        navigate('/recommendation', { state: response.data})
        })
    .catch((error) => {
        console.log(error)
        setMessage(error.response.data.error.message)
    })
    }

    const pressButton = (e) => {
        if (inputs.prompt === undefined || inputs.prompt === ''){ 
            setMessage('Por favor describe tus gustos musicales')
            return
        }
        promptSubmit()
    }

  return (
    <>
      <h1 id='landing-page-title'>GPTunes</h1>
      <div id='prompts-container'>
        <div className='prompt-container'>
            <p className='prompt-descriptor'>Describe tus gustos musicales* (Obligatorio)</p>
            <input 
                type='text' 
                placeholder='Ej: Me gusta la musica energetica para bailar' 
                className='prompt-input'
                value={inputs.prompt || ""}
                onChange={(e) => handleChange(e, "prompt")}
            />
        </div>
        <div className='prompt-container'>
            <p className='prompt-descriptor'>Menciona los generos musicales que te gustan</p>
            <input 
                type='text' 
                placeholder='Ej; Rock, Pop, Reggaeton, etc.' 
                className='prompt-input'
                value={inputs.genre || ""}
                onChange={(e) => handleChange(e, "genre")}
            />
        </div>
        <div className='prompt-container'>
            <p className='prompt-descriptor'>Cuentanos tu estado de animo</p>
            <input 
                type='text' 
                placeholder='Ej: Triste, feliz, emocionado, etc.' 
                className='prompt-input'
                value={inputs.mood || ""}
                onChange={(e) => handleChange(e, "mood")}
            />
        </div>
        <div className='prompt-container'>
            <p className='prompt-descriptor'>¿De que epoca prefieres tu musica?</p>
            <input 
                type='text' 
                placeholder='Ej: 80s, 90s, 2000s, etc.' 
                className='prompt-input'
                value={inputs.time || ""}
                onChange={(e) => handleChange(e, "time")}
            />
        </div>
        <div className='prompt-container'>
            <p className='prompt-descriptor'>¿Cual es el tempo que mas te gusta?</p>
            <input 
                type='text' 
                placeholder='Ej: Rapido, lento, medio, etc.' 
                className='prompt-input'
                value={inputs.bpm || ""}
                onChange={(e) => handleChange(e, "bpm")}
            />
        </div>
        <div className='prompt-container'>
            <p className='prompt-descriptor'>¿En que idioma escuchas musica?</p>
            <input 
                type='text' 
                placeholder='Ej: Español, Ingles, Frances, etc.' 
                className='prompt-input'
                value={inputs.language || ""}
                onChange={(e) => handleChange(e, "language")}
            />
        </div>
        <p id='error-message'>{message}</p>
        <button type="button" id='landing-page-button' onClick={pressButton}>
            Inicia tu experiencia
        </button>
    </div>
      
    </>
  )
}

export default App
