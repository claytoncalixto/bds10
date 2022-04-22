import { useParams } from 'react-router-dom';
import { hasAnyRoles } from 'util/auth';
import Evaluation from 'components/Evaluation';
import Comment from 'components/Comment';
import MovieCard from 'components/MovieCard';

import './styles.css';
import { title } from 'process';

type UrlParams = {
  moviesId: string;
};

const MovieDetails = () => {
  const { moviesId } = useParams<UrlParams>();

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

  return (
    <div className="movie-details-container">
      <div className="movie-details-card">
        <MovieCard movie={movie} />

        <div className="movie-details-synopsis"> {movie.synopsis}</div>
      </div>

      {hasAnyRoles(['ROLE_MEMBER']) && <Evaluation movieId={moviesId} />}
      <div>
        <Comment movieId={moviesId} />
      </div>
    </div>
  );
};

export default MovieDetails;
