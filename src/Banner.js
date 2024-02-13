import React, { useEffect, useState } from 'react'
import './css/Banner.css'
import axios from './localAxios';
import userRequests from './request';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(userRequests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
        }
        fetchData();
    }, [])

    return (
        <div
            className='banner'
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
        >
            <div className="banner_content">
                <h1 className="banner_title">
                    {movie?.title || movie?.original_name || movie?.name}
                </h1>
                <div className="banner_buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className="banner_descrption">
                    <p>{movie?.overview}</p>
                </div>
            </div>
            <div className="banner_fade"></div>
        </div>
    )
}

export default Banner
