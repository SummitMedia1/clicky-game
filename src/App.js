import React, { Component } from "react";
import LogoCard from "./components/LogoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Logos from "./logos.json";
import "./App.css";

class App extends Component {
  // Setting this.state.logos to the logos json array
  state = {
    Logos
  };

  removeLogo = id => {
  //   // Filter this.state.logos for logoss with an id not equal to the id being removed
    const logos = this.state.logos.filter(logo => logo.id !== id);
  //   // Set this.state.logoss equal to the new logos array
    this.setState({ logos });
  };

  // Map over this.state.logos and render a logosCard component for each logo object
  render() {
    return (
      <Wrapper>
        <Title>LOGO Router</Title>
        {this.state.Logos.map(logo => (
          <LogoCard
            id={logo.id}
            key={logo.id}
            name={logo.name}
            image={logo.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
