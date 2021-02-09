import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import './PokeDetails.css';
import Loading from '../../components/Loading';
import Container from '../../components/Container';


const PokeDetails = () => {

  const { pokemonId } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {

    setTimeout(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((response) => {
          const { data } = response;
          setPokemon(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
          const { status, data } = error.response;
          setLoading(false);
          setError(`${status} ${data}`);
        });
    }, 1000);
  }, [pokemonId]);

  // console.log(pokemon);

  return (
    <Container className="container-fluid mx-auto">
      {loading && (
        <Loading />
      )}
      {!loading && error && (
        <div className="text-center">
          <p className="lead">{error}</p>
          <Link to="/" className="btn btn-primary">Go Back</Link>
        </div>
      )}
      {!loading && !error && pokemon && (
        <div>
          <div className="col text-center">
            <h2>{pokemon.id} - {pokemon.name}</h2>
            
          </div>
          <div className="row mb-5">
            <div className="col-6 border">
              <img className="display-center image-size-300" src={pokemon.sprites.front_default} alt="pokemonImage"/>
            </div> 
            <div className="col-6">
              <table className="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th className="text-center width-50">Stat Name</th>
                    <th className="text-center width-50">Base Stat</th>
                  </tr>
                </thead>
                <tbody>
                  {pokemon.stats.map(p => (
                    <tr key={p.stat.url}>
                      <td className="text-center">{p.stat.name}</td>
                      <td className="text-center">{p.base_stat}</td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
            </div>
          </div>  
          <Link to="/" className="btn btn-primary">Go Back</Link>     
        </div>
      )}
    </Container>
  )
}

export default PokeDetails;