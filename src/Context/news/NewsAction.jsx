export const fetchNews = async(topic)=>{
    // const response =await fetch(`https://newsapi.org/v2/everything?q= ${topic} &from=2024-04-24&sortBy=publishedAt&apiKey=API_KEY`)
    const response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2024-04-21&sortBy=publishedAt&apiKey=0057d2481f7b4ec9ac308036197cf8cf`)
    const data = await response.json()
    return data.articles;
}