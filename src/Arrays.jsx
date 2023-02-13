import React from 'react'
import './Arrays.css'
import useFetch from './passing'

function Arrays(props) {

const [movielist] = useFetch(props.request)
  return (
    <div className='arrays'>
        <div>
            <h3 className='arrays__heading'>{props.title}</h3>
        </div>
        <div>
            <div className='arrays__box' >
            {movielist.map((movie,id) =>{
              return(
                <div className='arrays_subbox' key={id}>   
                 <img className='arrays__poster' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt='' />
                </div>
              )})}
            </div>
        </div>
    </div>
  )
}

export default Arrays;


