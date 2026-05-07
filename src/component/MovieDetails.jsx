import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const param = useParams().movieId;
  console.log(param);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=b7e1565c&i=` + param,
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

  useEffect(() => {
    getMovies();
  }, [param]);

  return (
    <>
      <Card className="my-4" style={{ width: 450 }}>
        <Card.Img
          className="object-fit-fill"
          style={{ height: 330 }}
          variant="top"
          src={movies.Poster}
        />
        <Card.Body>
          <Card.Title>
            {movies.Title} - {movies.Year}
          </Card.Title>
          <Card.Text>{movies.Genre}</Card.Text>
          <Card.Text>Director: {movies.Director}</Card.Text>
          <Card.Text>{movies.Plot}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieDetails;
