import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placeorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick = event => {
    const button = event.target.closest("button");
    this.setState({
      active: +button.dataset.index
    });
  };

  handleIndexPressEnter = event => {
    if (event.key == "Enter") {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={this.handleIndexClick}
              onKeyDown={this.handleIndexPressEnter}
              data-index={index}
            >
              <img
                src={photo}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
