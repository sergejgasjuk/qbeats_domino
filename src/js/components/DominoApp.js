import React from "react";
import classNames from "classnames/bind";

import DP from "../constants/dominoPatterns";
import utils from "../utils/helpers";

import Domino from "./Domino";
import Button from "./Button";

class DominoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.state.patterns = [DP[utils.getRandomInt()], DP[utils.getRandomInt()]];
    
    this.buttons = [
      {
        text: "rotate left",
        action: null
      },
      {
        text: "render random",
        action: this.genRandomDomino.bind(this)
      },
      {
        text: "rotate right",
        action: null
      }
    ];
  }
  
  genRandomDomino() {  
    let patterns = [DP[utils.getRandomInt()], DP[utils.getRandomInt()]];
    this.setState({ patterns });
  }
  
  render() {
    return (
      <div className={`domino-app`}>
        <div className={`domino-app__actions`}>
          {this.buttons.map((btn, i) => 
            <Button text={btn.text} action={btn.action} key={i}/>
          )}
        </div>
        <div className={`domino-app__body`}>
          <div className={`domino-app__domino`}>
            <Domino patterns={this.state.patterns} />
          </div>
        </div>
      </div>
    )
  }
}

export default DominoApp;
