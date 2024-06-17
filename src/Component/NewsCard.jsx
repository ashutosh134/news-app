import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import ImageNotFound from "../assets/download.png"
const NewsCard = ({news}) => {

    const {theme} =useContext(ThemeContext)
  return (
    <div className={theme ?"card mb-3 bg-dark text-light p-3":"card mb-3 p-3"} >
    <div className="row g-0">
      <div className="col-md-4">
        <img src={!news.urlToImage ?  ImageNotFound : news.urlToImage}alt="..."/>
      </div>
   
   <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-body-secondary">{news.author}</small>
          <a href={news.url} terget="_blank"
          className={theme?"btn btn-secondary float-end":"btn btn-info float-end"}>Read More</a>
          </p>
        </div>
      </div>
   </div>
    </div>
  
  )
}

export default NewsCard
