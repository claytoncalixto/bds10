import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import './styles.css';

const Movie = () => {
  const movie = {
    id: 1,
    title: 'Bob Esponja',
    subTitle: 'O Incrível Resgate',
    year: 2020,
    imgUrl:
      'https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg',
    synopsis:
      'Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo.',
    genre: [
      {
        id: 1,
        name: 'Comédia',
      },
    ],
  };

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    
      <div className="movie-container">
        <div className=" movie-genre-container">
          <Select options={options} classNamePrefix="movie-genre-select" />
        </div>
        <div className=" row movie-list-container">
          <ul className="movie-list-items-container">
            <Link to="/movies/1">
              <div className="col-sm-6">
                <MovieCard movie={movie} />
              </div>
            </Link>
            <Link to="/movies/2">
              <div className="col-sm-6">
                <MovieCard movie={movie} />
              </div>
            </Link>
            <Link to="/movies/2">
              <div className="col-sm-6">
                <MovieCard movie={movie} />
              </div>
            </Link>
            <Link to="/movies/2">
              <div className="col-sm-6">
                <MovieCard movie={movie} />
              </div>
            </Link>
          </ul>
        </div>
        <div className=" row pagination-container">
            <Pagination />
        </div>
      </div>
      
    
  );
};

export default Movie;
