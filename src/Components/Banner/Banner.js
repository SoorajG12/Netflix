import React,{useEffect, useState} from 'react'

import {apikey,imgurl} from '../../Constants/constants'
import axios from '../../Axios'
import "./Banner.css"


function Banner() {
    const [movie, setMovie] = useState()
  useEffect(() => {
    var ran=Math.floor(Math.random()*20)+1;
      axios.get(`trending/all/day?api_key=${apikey}&language=en-US`).then((response)=>{
        setMovie(response.data.results[ran])
      })
  }, [])
  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imgurl+movie.backdrop_path : ""})`}}
     className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom">
        </div>
    </div>
  )
}

export default Banner