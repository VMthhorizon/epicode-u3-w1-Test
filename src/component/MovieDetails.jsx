import { useParams, useState } from "react-router-dom";
import { Card } from "react-bootstrap";

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const param = useParams();

  const getMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${param.movieId}&apikey=b7e1565c`,
      );
      if (response.ok) {
        const data = await response.json();

        setMovies = data.Search;
      } else {
        throw new Error("ERRORE NEL JSON", response.status);
      }
    } catch (error) {
      console.log("ERRORE NEL SERVER", error);
    }
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
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
