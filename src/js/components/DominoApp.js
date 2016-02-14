import React from "react";
import { Motion, spring } from "react-motion";

import DP from "../constants/dominoPatterns";
import utils from "../utils/helpers";

import Domino from "./Domino";
import Button from "./Button";

class DominoApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.state.patterns = [DP[utils.getRandomInt()], DP[utils.getRandomInt()]];
    this.state.rotationVal = 0;
    
    this.buttons = [
      {
        text: "rotate left",
        action: this.handleRotation.bind(this, -90)
      },
      {
        text: "render random",
        action: this.genRandomDomino.bind(this)
      },
      {
        text: "rotate right",
        action: this.handleRotation.bind(this, 90)
      }
    ];
  }
  
  genRandomDomino() {  
    let patterns = [DP[utils.getRandomInt()], DP[utils.getRandomInt()]];
    this.setState({ patterns });
  }
  
  handleRotation(val = 90) {
    let {rotationVal} = this.state;
    rotationVal = rotationVal + Number(val);
    
    if (Math.abs(rotationVal) === 360) {
      rotationVal = 0;
    }
    
    this.setState({ rotationVal });
  }
  
  render() {
    let {rotationVal} = this.state;
    
    return (
      <div className={`domino-app`}>
        <div className={`domino-app__actions`}>
          {this.buttons.map((btn, i) => 
            <Button text={btn.text} action={btn.action} key={i}/>
          )}
        </div>
        <div className={`domino-app__body`}>
          <Motion style={{deg: spring(rotationVal, {stiffness: 170, damping: 12})}}>
            {({deg}) => {
              
              let styleObj = {
                transform: `rotate(${deg}deg)`
              };
              
              return (
                <div className={`domino-app__domino`} style={styleObj}>
                  <Domino patterns={this.state.patterns} />
                </div>
              )
            }}
          </Motion>
        </div>
      </div>
    )
  }
}

export default DominoApp;


