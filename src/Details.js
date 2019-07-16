import React from "react";

import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        animal: animal.type,
        name: animal.name,
        breed: animal.breeds.primary,
        media: animal.photos,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        loading: false
      });
    }, console.error);
  }
  render() {
    if (this.state.loading) return <h1>loading...</h1>;

    const { animal, breed, location, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
