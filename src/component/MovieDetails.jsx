import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const param = useParams().movieId;
  console.log(param);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=b7e1565ci=` + param,
      );
      if (response.ok) {
        const data = await response.json();

        setMovies(data);
      } else {
        throw new Error("ERRORE NEL JSON", response.status);
      }
    } catch (error) {
      console.log("ERRORE NEL SERVER", error);
    }
  };

  //   const foundMovie = movies.find((film) => {
  //     return film.id.toString() === param;
  //   });

  useEffect(() => {
    const foundMovie = movies.find((film) => {
      return movies.imdbID.toString() === param;
    }); // foundPasta è UNO degli oggetti del JSON, quello in cui ha trovato un match tra il proprio id
    setMovies(foundMovie);
  }, []);

  //   useEffect(() => {
  //     getMovies();
  //   }, [param]);

  return (
    <>
      <Card>
        <Card.Img variant="top" src={movies.Poster} />
        <Card.Body>
          <Card.Title>{movies.Title}</Card.Title>
          <Card.Text>{movies.Title}</Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieDetails;
