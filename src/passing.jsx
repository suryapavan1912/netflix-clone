import { useEffect, useState } from "react"
import axios from 'axios'


export default function useFetch(url){
    
const [movielist,setmovie] = useState([])

useEffect(() => {

async function dofetch(){
    try{
        const responce = await axios.get("https://api.themoviedb.org/3" + url)
        setmovie(responce.data.results)
    }
    catch(error){
        console.log(error.message)
    }
}
    dofetch();
  }, [url])

  return [movielist]
}
