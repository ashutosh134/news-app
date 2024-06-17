import React, { useContext, useState } from 'react'
import ThemeContext from '../Context/ThemeContext'
import NewsContext from '../Context/news/NewsContext';

const Navbar = () => {
    const {theme}=useContext(ThemeContext);
    const {newsDispatch}= useContext(NewsContext)

    const [text,setText]=useState("");

    const fetchNews = async(topic)=>{
      const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=YOUR_API_KEY`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }

    const getNews = async(topic)=>{
      try {
        const data = await fetchNews(topic);
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        if (!Array.isArray(data.articles)) {
          throw new Error('Response body must be an array');
        }
        newsDispatch({
          type:'GET_NEWS',
          payload:data.articles,
       })
      } catch (error) {
        console.error(error);
      }
   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    if (text.trim() === '') {
      return;
    }
    getNews(text)
    setText('')
   }

  return (
    <nav className={theme? "navbar navbar-expand-lg bg-dark text-light shadow-lg " : "navbar navbar-expand-lg bg-light shadow"}>
  <div className="container-fluid">
    <a className={theme?"navbar-brand text-light": "navbar-brand "}href="#">REACT NEWS </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={theme? "nav-link text-light":"nav-link"} aria-current="page" href="#" onClick={()=>getNews("INTERNATIONAL news")}>INTERNATIONAL</a>
        </li>
        <li className="nav-item">
          <a className={theme? "nav-link text-light":"nav-link"} aria-current="page" href="#" onClick={()=>getNews(" Indian POLITICS news")}>POLITICS</a>
        </li>
        <li className="nav-item">
          <a className={theme? "nav-link text-light":"nav-link"} aria-current="page" href="#"onClick={()=>getNews("Indian SPORTS news")}>SPORTS</a>
        </li>
        <li className="nav-item">
          <a className={theme? "nav-link text-light":"nav-link"} aria-current="page" href="#" onClick={()=>getNews("Indian ENTERTAINMENT news")}>ENTERTAINMENT</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button className={ theme? "btn btn-secondary": "btn btn-success"} type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar