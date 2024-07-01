import { useState } from 'react'
import './RecommendationPage.css'
import axios from "axios";

function App() {
     
    
    const config = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    
    axios.post('https://accounts.spotify.com/api/token', )
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    

  return (
    <>
      <h1 id='landing-page-title'>Aqui hay un par de canciones que podrias disfrutar!</h1>
      <div id='songs-container'>
       
        </div>
    </>
  )
}

export default App
