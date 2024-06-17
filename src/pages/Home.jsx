  import React, { useContext, useEffect } from 'react'
  import Carousel from '../Component/Carousel'
  import WeatherComponent from '../Component/WeatherComponent'
  import ThemeContext from '../Context/ThemeContext'
import NewsCard from '../Component/NewsCard'
import { getWeather } from '../Context/weather/WeatherAction'
import WeatherContext from '../Context/weather/WeatherContext'
import NewsContext from '../Context/news/NewsContext'
import { fetchNews } from '../Context/news/NewsAction'

  const Home = () => {

    const {theme} = useContext(ThemeContext)
    const{allNews,newsDispatch} =useContext(NewsContext)
    const {dispatch}=useContext(WeatherContext)
 
    const fetchWeather =async()=>{
      const data= await getWeather("Indore");
      dispatch({
         type:'GET_WEATHER',
         payload:data
      })
    };

    //  const getNews = async()=>{
    //   const data =await fetchNews("Indore");
      
    //   newsDispatch({
    //     type:'GET_NEWS',
    //     payload:data,
    //  })
    //  };

    const getNews = async() => {
      const data = await fetchNews();
      newsDispatch({
        type : 'GET_NEWS',
        payload : data,
      })
    };

    useEffect(() => {
      fetchWeather();
      getNews();
    },[]);

    return (
      <div className={theme?'container-fluid py-3 bg-secondary':'container-fluid py-3'}>
      <Carousel/>

      <div className="row g-3 my-3">
        <div className="col-sm-12 col-md-4">
          <WeatherComponent/>
        </div>
        <div className="col-sm-12 col-md-8">
          {
          allNews.map ((news,index)=>{
           return  <NewsCard key={index} news={news}/>
          })
          }
        </div>
      </div>
      </div>
    )
  }

  export default Home;
