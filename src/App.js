import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Generate from "./components/GenerateQuote";
import quotes from "./components/Quotes";

class App extends Component {

  randomNumber = () => (Math.floor(Math.random() * quotes.length));


  state = { 
    quote: quotes[0].quote, 
    author: quotes[0].author, 
    numberOfQuotes: 1
  }

  generateQuote () {
    return quotes[this.randomNumber()]
  }

  handleClick = () => {
    const newQuote = this.generateQuote(); 
    this.setState({
      quote: newQuote.quote, 
      author: newQuote.author
    })
  }

  randomColor () { 
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  
  render() {
    return (
      <div>
        <Header />
        <Generate 
          displayColor = {this.randomColor}
          handleClick = {this.handleClick}
          {...this.state}
        />
      </div>
    );
    console.log()
  }
}

export default App;
