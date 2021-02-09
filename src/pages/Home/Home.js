import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

const Home = () => {

  const [pokemonList, setPokemonAllList] = useState([])

  const [loading, setLoading] = useState(true);

  const [imageloading, setImageLoading] = useState(true);

  const [error, setError] = useState(undefined);


  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then((response) => {
      return response.data.results;
    })
    .catch((error) => {
      console.log(error.response);
      const { status, data } = error.response;
      setError(`${status} ${data}`);
    })
    .then((results) => {
      return Promise.all(results.map((res) => axios.get(res.url)))
    })
    .catch((error) => {
      console.log(error.response);
      const { status, data } = error.response;
      setError(`${status} ${data}`);
    })
    .then((url) => {
      setLoading(false)
      setPokemonAllList(url.map((res) => res.data))
      window.setTimeout(() => {
        setImageLoading(false);
      }, 1000);
      
    });
  }, []);

  // console.log(pokemonList)

  return (
    <div className="container-fluid">
      {loading && <Loading />}
      <div className="row">
        {!loading && <h2 className="col-12 text-center my-3">Welcome! Please click a pokemon to see the details!</h2>}
        
        {pokemonList.map(data => (
          <div key={data.id} className="col">
            <Card>
              <Link to={`pokemon/${data.id}`}>
                {!imageloading && !error && pokemonList.length === 0 && (
                  <p className="lead text-center">No data available</p>
                )}
                {!imageloading && error && (
                  <p className="lead text-center">{error}</p>
                )}
                {imageloading ? <Loading /> : 
                <>
                  <h4 className="text-center">{data.id}</h4>
                  <hr />
                  <img className="display-center" src={data.sprites.front_default} alt="pokemonImage"/>
                  <h5 className="text-center">{data.name}</h5>
                </>
                }            
              </Link>               
            </Card>         
          </div>    
        ))}

      </div>
    </div>
    
  );
}

export default Home;