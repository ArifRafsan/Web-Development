import React, { Component } from "react";
import Axios from "axios";

class PlanetSearch extends Component {
  constructor() {
    super();
    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    const url = "https://swapi.co/api/planets/";

    Axios.get(url).then(response => {
      const data = response.data.results;
      console.log(data);
      this.setState({
        planets: data
      });
    });
  }
  render() {
    let planets = this.state.planets;
    let optionItems = planets.map(planet => (
      <option key={planet.name}>{planet.name}</option>
    ));
    return (
      <div>
        <h1>Drop Down</h1>
        <select name="planet" id="planet">
          {optionItems}
        </select>
      </div>
    );
  }
}
export default PlanetSearch;
