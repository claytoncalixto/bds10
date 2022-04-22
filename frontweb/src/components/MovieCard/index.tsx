

import { Movie } from 'types/movie';
import './styles.css'

type Props = { movie : Movie;}

const MovieCard = ( { movie }: Props) => {

    return (
        <div className="base-card movie-card">
            <div className="movie-card-top-container">
                <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movie-card-bottom-container  text-white">
                <h4>{ movie.title }</h4>
                <h6>{ movie.year}</h6>
                <h5>{ movie.subTitle}</h5>
            </div>
        </div>
    );
};

export default MovieCard;