import React, { useState } from 'react'
import { Download, Play, Plus, ThumbsUp, X } from 'react-feather'
import './Arrays.css'
import useFetch from './passing'

function Arrays(props) {



const [movie,setmovie] = useState(null)
const [movielist] = useFetch(props.request)

  return (  
    <>
    {movie &&
    <div className='mov'>
      <div className="movie">
        <div className="movie__cross" onClick={()=>setmovie(null)}>
          <X/>
        </div>
        <div className='movie__backbrop'>
          <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt=''/>
        </div>
        <div className="movie__play">
          <Play/>
        </div>
        <div className="movie__name">
            {movie.original_title || movie.name}
          </div>
        <div className="movie__details">
          <div className="movie__desc">
            {movie.overview}
          </div>
          <div className="movie__icons">
            <div><Plus/><p>My List</p></div>
            <div><ThumbsUp/><p>Rate</p></div>
            <div><Download/><p>Download</p></div>
          </div>
          <div className="movie__movies">
            { movielist
            .filter(item => item.id !== movie.id)
            .map(item => ({item, num : Math.random()}))
            .sort((a,b)=>a.num - b.num)
            .map(({item})=>item)
            .filter((item,id)=>id<8)
            .map((item,id)=>{return(
            <div className="movie__sub" onClick={()=>{setmovie(item)}} key={id}>
              <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="" />
              <div><p>{item.original_title || item.name}</p></div>
            </div>)})}
          </div>
      </div>
      </div>
    </div>
    }
    <div className='arrays'>
        <div>
            <h3 className='arrays__heading'>{props.title}</h3>
        </div>
        <div>
            <div className='arrays__box' >
            {movielist.map((Movie,id) =>{
              return(
                <div className='arrays_subbox' key={id} onClick={()=>{setmovie(Movie)}}>   
                 <img className='arrays__poster' src={`https://image.tmdb.org/t/p/original/${Movie?.poster_path}`} alt='' />
                </div>
              )})}
            </div>
        </div>
    </div>
    </>
  )
}

export default Arrays;


