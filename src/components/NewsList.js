import News from './News';
import ReactLoading from "react-loading";

const NewsList =({isLoading, news})=> {
    return (
        <div className='main'>

          {isLoading ? 
            <div className="loading">
                <ReactLoading type={'bubbles'} color={'black'} height={'10%'} width={'10%'} /> 
            </div>
          
          : 
          
            <section> 
              <div className="container">
                <div className='row'>
                  {news.map(news=>(
                    <News key={news.id} news={news}/>
                  ))} 
                </div>
              </div>
            </section>
          }
        </div>
    );
  }
  
  export default NewsList;