import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";

import HeaderNavbar from "./component/HeaderNavbar";
import { Container } from "react-bootstrap";
import MyFooter from "./component/MyFooter";
import Profile from "./component/Profile";
import TvShows from "./component/TvShows";
import PageNotFound from "./component/PageNotFound";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="d-flex flex-column min-vh-100">
        <header>
          <HeaderNavbar></HeaderNavbar>
        </header>
        <main className="d-flex flex-grow-1 justify-content-center align-items-center">
          <Routes>
            <Route
              path="/"
              element={
                <img
                  className="w-75 "
                  src="/public/assets/netflix_logo.png"
                ></img>
              }
            ></Route>
            <Route
              path="/details/:movieId"
              element={<MovieDetails></MovieDetails>}
            ></Route>
            <Route path="/TvShows" element={<TvShows></TvShows>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </main>
        <footer className="d-flex justify-content-center">
          <MyFooter></MyFooter>
        </footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
