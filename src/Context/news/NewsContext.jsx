import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";
const NewsContext = createContext()

export const NewsProvider = ({ children }) => {

    const initialState = {
        allNews: [
            {
                "source": {
                    "id": null,
                    "name": "Biztoc.com"
                },
                "author": "theguardian.com",
                "title": "Ofcom warns broadcasters to remain impartial ahead of election, Lloyds profit falls 28%",
                "description": "Good morning, and welcome to our rolling coverage of business, the financial markets and the world economy. The UK’s media regulator has warned broadcasters to maintain due impartiality ahead of the general election later this year. Ofcom also published new s…",
                "url": "https://biztoc.com/x/95442f9a4cec5220",
                "urlToImage": "https://c.biztoc.com/p/95442f9a4cec5220/s.webp",
                "publishedAt": "2024-04-24T07:00:05Z",
                "content": "Good morning, and welcome to our rolling coverage of business, the financial markets and the world economy.The UKs media regulator has warned broadcasters to maintain due impartiality ahead of the ge… [+296 chars]"
            }
        ]
    }

    const [state, dispatch] = useReducer(NewsReducer, initialState)

    return (
        <NewsContext.Provider value={{...state, newsDispatch : dispatch }}>
            {children}
        </NewsContext.Provider>
    )
}
export default NewsContext