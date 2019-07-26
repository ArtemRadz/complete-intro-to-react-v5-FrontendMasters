import React from "react";

import { Photo } from "@frontendmasters/pet";

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component<IProps, IState> {
  public state = {
    photos: [],
    active: 0
  };

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ["http://placeorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  public handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    const button = event.target.closest("button");

    if (button && button.dataset.index) {
      this.setState({
        active: +button.dataset.index
      });
    }
  };

  public handleIndexPressEnter = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.key === "Enter" && event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index
      });
    }
  };

  public render() {
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
