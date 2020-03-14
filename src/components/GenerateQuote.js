import React, { Component } from "react";
import uuid from "uuid";

class GenerateQuote extends Component {
  state = {};
  render() {
    const randomColor = this.props.displayColor();
    document.documentElement.style.backgroundColor = randomColor;

    return (
      <div style={{ backgroundColor: "white", width: '80%', height: '20%', margin: 'auto', borderRadius: '10px', padding: '3px'}} className="box">
        <div
          className="background"
          key={uuid.v4()}
          style={{ color: randomColor }}
        >
          <h1 id="quote" style={{ textAlign: "center", padding: "10px" }}>
            "{this.props.quote}"
          </h1>
          <h4 id="author" style={{ textAlign: "right", padding: "1px 50px" }}>
            ~ {this.props.author ? this.props.author : "Unknown"}
          </h4>
          <button 
            style={{
              cursor: "pointer",
              backgroundColor: randomColor,
              color: "white",
              border: "2px solid white", 
              width: '100%', 
              height: '50px', 
              fontSize: "27px", 
              fontFamily: 'courier', 
              borderRadius: '10px'
            }}
            id="newquote"
            onClick={this.props.handleClick}
          >
            Generate
          </button>
        </div>
      </div>
    );
  }
}

export default GenerateQuote;
