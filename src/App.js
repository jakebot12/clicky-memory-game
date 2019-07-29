import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import AnimalCard from "./components/AnimalCard";
import Footer from "./components/Footer";
import animals from "./animalList.json";
import "./App.css";


class App extends Component {
  state = {
    animals,
    clickedAnimals: [],
    score: 0
  };

  imageClick = event => {
    const currentAnimals = event.target.alt;
    const animalsAlreadyClicked =
      this.state.clickedAnimals.indexOf(currentAnimals) > -1;

    if (animalsAlreadyClicked) {
      this.setState({
        animals: this.state.animals.sort(function(a, b) {
          return Math.random() - 0.5;
        }),
        
        clickedAnimals: [],
        score: 0
      });
      alert("Oh no! You clicked twice!!!");
  
    } else {
      this.setState(
        {
          animals: this.state.animals.sort(function(a, b) {
            return 0.5 - Math.random();
          }),

          clickedAnimals: this.state.clickedAnimals.concat(
            currentAnimals
          ),
          score: this.state.score + 1
        },
        () => {

          if (this.state.score === 12) {
            alert("You clicked them all! You Win!");
            this.setState({
              animals: this.state.animals.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedAnimals: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar
        score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
     {this.state.animals.map(animals => ( 
          <AnimalCard
            imageClick={this.imageClick}
            id={animals.id}
            key={animals.id}
            name={animals.name}
            image={animals.image}
          />
        ))}
        </div>
        <Footer />
      </div>
    );
  }
}



export default App;