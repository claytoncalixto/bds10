import MovieCard from "components/MovieCard";


import './styles.css';



const CardLoader = () => {

    return(

        <MovieCard movie={{
            id: 0,
            title: "",
            subTitle: "",
            synopsis: "",
            imgUrl: "",
            year: 0,
            genre: []
        }}  />
    );
};

export default CardLoader;