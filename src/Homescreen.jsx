import React from 'react'
import Navbar from './Navbar';
import './Homescreen.css'
import Banner from './Banner';
import Arrays from './Arrays';
import request from './request'

function Homescreen() {
  return (
  <div  >
    <Navbar />
    <Banner />
    <div style={{position : 'relative',top:'-200px', marginBottom : '-200px'}} >
      <Arrays title = "What's Popular" request = {request.fetchTrending} />
    </div>
    <Arrays title = 'Netflix Originals' request = {request.fetchNetflixOriginals} />
    <Arrays title = 'Top Rated' request = {request.fetchTopRated} />
    <Arrays title = 'Action Movies' request = {request.fetchActionMovies} />
    <Arrays title = 'Comedy Movies' request = {request.fetchComedyMovies} />
    <Arrays title = 'Horror Movies' request = {request.fetchHorrorMovies} />
    <Arrays title = 'Romance Movies' request = {request.fetchRomanceMovies} />
    <Arrays title = 'Documentaries' request = {request.fetchDocumentaries} />
  </div>
    )
}

export default Homescreen;