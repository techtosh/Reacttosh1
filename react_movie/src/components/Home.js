import React from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import { useHomeFetch } from '../hooks/useHomeFetch';

import NoImage from '../images/no_image.jpg';

const Home = () => {

    const {state, loading, error} = useHomeFetch();

    console.log(state);
    /*const[state, setState] = useState();
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(false);
    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            //console.log(movies);
            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch(error) {
            setError(true);
        }
        setLoading(false);
    }
 
    //Will trigger on initial render
    useEffect(() => {
        fetchMovies(1);
    }, [])
    console.log(state);
*/
    return(<div>Home Page</div>)
}

export default Home;