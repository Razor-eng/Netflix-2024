import React from 'react'
import './css/Home.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import userRequests from './request'

function Home() {
    return (
        <div>
            <Nav />
            <Banner />

            <Row
                title="Netflix Originals"
                isLargeRow
                fetchURL={userRequests.fetchNetflixOriginals}
            />
            <Row
                title="Trending"
                isLargeRow
                fetchURL={userRequests.fetchTrending}
            />
            <Row
                title="Top Rated"
                isLargeRow
                fetchURL={userRequests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                isLargeRow
                fetchURL={userRequests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                isLargeRow
                fetchURL={userRequests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                isLargeRow
                fetchURL={userRequests.fetchHorrorMovies}
            />
            <Row
                title="Romantic Movies"
                isLargeRow
                fetchURL={userRequests.fetchRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchURL={userRequests.fetchDocumentaries}
            />
        </div>
    )
}

export default Home
