import React from 'react';
import {Link} from 'react-router-dom';

const News = ({news}) => {

    const cut=(string,maxLength)=>{
        if (!string) return null;
        if (string.length <= maxLength ) return string;
        return `${string.substring(0, maxLength)} ...`;
       }

    return (
        <div className='news col-lg-4 col-md-5 col-10'>
            <Link to={`news/${news.id}`} state={{ item: news }} className="link">
                <img src={news.imageUrl} alt="err" />
                <div className="text">
                    <p className="title">{news.title}</p>
                    <div className="line"></div>
                    <p className='content'>{cut(news.content,330)}</p>
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
            </Link>
        </div>
    )
}

export default News