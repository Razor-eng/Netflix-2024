import React, { useEffect, useState } from 'react'
import "./css/Row.css"
import axios from './localAxios';

function Row({ title, isLargeRow, fetchURL }) {
    const [movies, setMovie] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);

            setMovie(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie => {
                        return (
                            <img src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="" className={`row_poster ${isLargeRow && "largeImage"}`} key={movie.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Row
