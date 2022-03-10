import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";
import { propTypes } from 'react-bootstrap/esm/Image';

function News(props) {

    var [articles, setArticles] = useState([]);
    var [page, setPage] = useState(1);
    var [totalResults, settotalResults] = useState(0);
    var [loading, setLoading] = useState(true)


    const captalizeFirstLetter = (string) => {
        let result = string.charAt(0).toUpperCase() + string.slice(1)
        return result;
    }

    const fetchData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
        try {
            setLoading(true);
           props.setProgress(30)
            let res = await fetch(url);
           props.setProgress(70)
            let parseddata = await res.json();
            setArticles(parseddata.articles);
            settotalResults(parseddata.totalResults);
            props.setProgress(100)
            setLoading(false);
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    // const handlePrevBtn = () => {
    //     setLoading(true);
    //     setPage(--page);
    //     fetchData();
    // }

    // const handleNextBtn = () => {
    //     setLoading(true);
    //     setPage(++page);
    //     fetchData();
    // }

    const fetchMoreData = async () => {
        setPage(++page);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
        try {
            setLoading(true)
            let res = await fetch(url);
            let parseddata = await res.json();
            setArticles(articles.concat(parseddata.articles));
            settotalResults(parseddata.totalResults);
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }
    {document.title=`NewsMonkey - ${captalizeFirstLetter(props.category)}`}
    return (
        <>
            <h3 className='text-center my-3' style={{paddingTop:'63px'}}>NewsMonkey - Get the top news headlines</h3>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((elem, ind) => {
                            return <NewsItem title={elem.title ? elem.title : ''} content={elem.content ? elem.content : 'Open the link to know more'} key={ind} urlImg={elem.urlToImage ? elem.urlToImage : 'https://cdn.thewire.in/wp-content/uploads/2022/03/05191349/1_media_space-robots-1600x600-1.jpg'} url={elem.url} author={elem.author ? elem.author : 'unknown'} date={new Date(elem.publishedAt).toUTCString()} source={elem.source.name} />
                        })
                        }

                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
   

    News.defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    News.prototypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string
    }
}
export default News;

// 4e6d81cac14248e7b3a8fba928fd30b0