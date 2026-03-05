import React from 'react'
import { useSorte } from '../store/ZustandStore.js'
import { Link, useNavigate, useParams } from 'react-router'

export default function Details() {
    const { movies } = useSorte()
    const naviget = useNavigate()
    const params = useParams()
    return (
        <>
            <Link to="/">Back</Link>
            {movies.filter((movie) => params.id === movie.imdbID)
                .map((movi) => (
                    <>

                        <h2>
                            {movi.Title}
                            <span>{movi.Year}</span>
                        </h2>
                        <p>Pick your seats and enjoy</p>
                        <img src={movi.Poster} />
                        <button>Choose Seats</button>
                        <div>
                            <span>IMDb: {movi.imdbRating}</span>
                            <span>Votes: {movi.imdbVotes}</span>
                            <span> Metascore: {movi.Metascore}</span>
                            <div>
                                <h2>story</h2>
                                {movi.Plot}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    Movie ID
                                </div>
                                <div>{movi.imdbID}</div>
                                <div>Year</div>
                                <div>{movi.Year}</div>
                            </div>
                        </div>
                        <button>Go to Seats</button>
                        <button onClick={()=>naviget("/")}>Back to list</button>
                    </>
                ))
            }

        </>
    )
}
