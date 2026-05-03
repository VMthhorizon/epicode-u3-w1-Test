import { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingSpinner from "./LoadingSpinner";
import Error from "./Error";

class FilmsCarousel extends Component {
  state = {
    filmSaga: null,
    error: false,
    errorMessage: "",
    errorDetails: "",
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
        this.setState({
          error: true,
          errorMessage: "ERRORE NEL JSON",
          erroreDetails: response.status,
        });
      }
    } catch (err) {
      this.setState({
        error: true,
        errorMessage: "ERRORE NEL SERVER",
        errorDetails: err,
      });
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
        {this.state.error && (
          <Error
            message={this.state.errorMessage}
            details={this.state.errorDetails}
          ></Error>
        )}
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
