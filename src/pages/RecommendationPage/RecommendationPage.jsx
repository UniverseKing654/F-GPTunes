import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './RecommendationPage.css'
import axios from "axios";

function App() {

    const track = 'Bodys'
    const artist = 'Car Seat Headrest'

    let {state} = useLocation()

    const [songs, setSongs] = useState([])

    async function getSongs() {

        console.log("State:", state)
        console.log("Type of state:", typeof state)

        if (typeof state === 'string' || state instanceof String){
            state = JSON.parse(state)
            console.log("State parsed:", state)
        }

        const token_res = await axios.post('https://accounts.spotify.com/api/token', {
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
        }})

        state.map(async (song, index) => {

            const response = await axios.get('https://api.spotify.com/v1/search', { params: 
                    {
                        q:  `track: ${song['cancion']} artist: ${song['artista']} album: ${song['album']}`,
                        type: 'track',
                        access_token: token_res.data.access_token,  
                    }
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Access-Control-Allow-Origin': '*'
                    }
                })

            console.log(response.data.tracks.items[0])
            setSongs(prevState => [...prevState, response.data.tracks.items[0]])
        })


    }

    useEffect(() => {

        try{
            getSongs()        

        } catch (error) {
            console.log(error)
        }
    }, [])
        

  return (
    <>
        <h1 id='landing-page-title'>Aqui hay un par de canciones que podrias disfrutar!</h1>
        <div id='songs-container'>
            {songs.map((song, index) => {
                return (
                    <div className='song-card' key={index}>
                        <h1 className='song-index'>{index + 1}. </h1>
                        <img className='song-cover' src={song.album.images[0].url} alt="Girl in a jacket" width="320" height="320"></img>
                        <div className='text-info'>
                            <div className='song-info'>
                                <h2 className='song-info-text'>{song.name}, {song.artists[0].name}</h2>
                            </div>
                            <div className='album-info'>
                                <h4 className='album-info-text'>{song.album.name}, {song.album.release_date.split('-')[0]}</h4>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </div>
    </>
  )
}

export default App
