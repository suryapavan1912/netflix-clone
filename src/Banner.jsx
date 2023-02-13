import './Banner.css'
import useFetch from './passing'
import requests from './request'

function Banner() {

    
const [movielist] = useFetch(requests.fetchTrending)

const num = (Math.floor(Math.random()*20))
const movie = movielist[num]

function concat(text,num){
    return text?.length > num ? text.substr(0,num-1) + '...' : text
}
  return (
    <div>
    <div className='banner'>
        <div>
            <img 
                className='banner_img'
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                alt=''
            />
        </div>
        <div className='banner_fade'></div>

        <div className='banner_main'>
            {<p className='banner_name'>{movie?.original_title || movie?.original_name}</p>}
            <div className='banner_butbox'>
                <button className='banner_button'><i className="fa fa-play" aria-hidden="true"></i>&nbsp;&nbsp; Play</button>
                <button className='banner_button'><i className="fa fa-plus" aria-hidden="true"></i>&nbsp;&nbsp; My List</button>
            </div>
            <div className='banner__description'>
                <p>{concat(movie?.overview,150)}</p>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Banner;