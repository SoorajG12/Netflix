import React,{useState,useEffect} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imgurl,apikey} from '../../Constants/constants'
import axios from '../../Axios'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]= useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
          setMovies(response.data.results)
    })
  }, [])
  const opts = {
    marginright: '10px',
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
      axios.get(`/movie/${id}/videos?api_key=${apikey}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
          setUrlId(response.data.results[0])
        }
   
      })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>
                  <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imgurl+obj.backdrop_path}`} />
            )}
        </div>
       { urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost