import React from 'react'

function NewsItem(props) {

    return (
        <>
            <div className="col-md-4 col-12 my-3">
                <div className="card">
                    <span className="badge rounded-pill bg-danger" style={{position:'absolute',right:0}}>
                    {props.source}
                        <span className="visually-hidden">source</span>
                    </span>
                    <img src={props.urlImg} className="card-img-top" alt="..." style={{height:'15rem'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0, 60)}...</h5>
                        <p className="card-text">{props.content.slice(0, 190)}...</p>
                        <a href={props.url} className="btn btn-dark btn-sm">Read more</a>
                        <p className="card-text my-2"><small className="text-muted">By {props.author} - {props.date}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsItem;