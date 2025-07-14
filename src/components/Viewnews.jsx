import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const Viewnews = () => {
    const [news, newNews] = useState(
        {
            "status": "ok",
            "totalResults": 34,
            "articles": []
        }
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {
                newNews({ articles: response.data.articles })
            }
        ).catch()
    }

    useEffect(() => { fetchData() }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        {

                            news.articles.map(
                                (value, index) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card">
                                                <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <p class="card-text">{value.description}</p>
                                                    <a href={value.url} target="_blank" class="card-link">{value.url}</a>
                                            
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewnews