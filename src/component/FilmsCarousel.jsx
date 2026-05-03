import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingSpinner from "./LoadingSpinner";

class FilmsCarousel extends Component {
  state = {
    filmSaga: null,
  };

  getFilms = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?s=${this.props.movie}&apikey=b7e1565c`,
      );
      if (response.ok) {
        const data = await response.json();

        this.setState({
          filmSaga: data.Search,
        });
      } else {
        console.log("ERRORE NEL JSON", response.status);
      }
    } catch (err) {
      console.log("ERRORE NEL SERVER", err);
    }
  };

  componentDidMount() {
    this.getFilms();
  }

  render() {
    if (!this.state.filmSaga) {
      return <LoadingSpinner></LoadingSpinner>;
    }

    return (
      <>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {this.state.filmSaga.map((movie) => {
            return (
              <SwiperSlide key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "100%", height: 300, display: "block" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }
}

export default FilmsCarousel;
