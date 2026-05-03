import { Component } from "react";
import { Carousel } from "react-bootstrap";

class FilmsCarousel extends Component {
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img src="/public/assets/avatar.png"></img>
            <img src="/public/assets/avatar.png"></img>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default FilmsCarousel;
