import React from 'react';
import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import Grid from './Grid';
import Spinner from './Spinner';

import { useMovieFetch } from '../hooks/useMovieFetch';

import NoImage from '../images/no_image.jpg';
import BreadCrumb from './BreadCrumb';

const Movie = () => {
    const { movieId } = useParams();
    console.log(movieId);
    const { state: movie, loading, error } = useMovieFetch(movieId);

    //console.log(movie);

    if(loading) {
        return <Spinner />
    }
    if(error) {
        return(
            <div>
                Something went wrong...
            </div>
        )
    }

    return(
    <>
        <BreadCrumb movieTitle= {movie.original_title} />
    </>
    )
}

export default Movie;