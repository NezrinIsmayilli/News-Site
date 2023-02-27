import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function NewsDetails ({newList}) {
  const location = useLocation()
  const { item } = location.state
  const [news, setNews] = useState(item)
  
  const similarNews = newList.filter(n=> n.title !== news.title).slice(0,3)

  return (
    <div className="details">
      <div className='container'>

        <div className="detail row">
          <div className="left col-lg-6">
            <img src={news.imageUrl} alt="err" />
            <div className="end">
              <p> 
                <i className="fi fi-rr-clock-five"></i>
                {news.date}
              </p>
              <p> 
                <i className="fi fi-rr-user"></i>
                {news.author}
              </p>
            </div>
          </div>
          <div className="right col-lg-6">
            <p className="title">{news.title}</p>
            <div className="line"></div>
            <p className='content'>
              {news.content}
              <br/><br/>
              {news.content}
            </p>
          </div>
        </div>

        <div className='similarNews'>
          <h2>Similar news</h2>
          <div className="row">
            
            {similarNews.map(similar=>(
              <div className="similar col-lg-4" key={similar.id} onClick={()=>setNews(similar)}>
                  <img src={similar.imageUrl} alt="err" />
                  <div className="text">
                      <p className='title'>{similar.title}</p>
                      <div className="end">
                        <p> 
                          <i className="fi fi-rr-clock-five"></i>
                          {news.date}
                        </p>
                        <p> 
                          <i className="fi fi-rr-user"></i>
                          {news.author}
                        </p>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}
export default NewsDetails