import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import NewsDetails from './components/NewsDetails';

const App =()=> {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState('all');
  const [active, setActive]= useState('all');

  useEffect(()=>{
      fetch(`https://inshorts.deta.dev/news?category=${url}`)
     .then(data=>data.json())
     .then(news=>{
         setNews(news.data)
         setIsLoading(false)
     })
     .catch(err=>console.log(err))
  },[url])

  const changeUrl=(e)=>{
    if(url !== e.target.innerText.toLowerCase()){
     
      setActive(e.target.innerText.toLowerCase());
      setUrl(e.target.innerText.toLowerCase());
      
      setIsLoading(true)
    }
    
}

  const categories=['all', 'business', 'sports', 'world', 'technology', 'entertainment', 'science']

  return (
      <BrowserRouter>
        <Navbar 
          active={active}
          categories={categories}
          changeUrl={changeUrl}
        />

        <Routes>
            <Route path="/" element={<NewsList 
                                      isLoading={isLoading}
                                      news={news}
                                    />}
            />

            <Route path="news/:id" element={<NewsDetails
                                            newList={news}
                                            />}
            />
        </Routes>
      </BrowserRouter>
  );
}

export default App;