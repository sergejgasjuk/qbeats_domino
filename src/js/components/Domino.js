import React from "react";
import classNames from "classnames/bind";

class Domino extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let pattern = this.props.pattern;

    let genDots = (arr) => {
      return arr.map((row, i) => 
        <div className={`domino__face-row`} key={i}>
          {row.map((cell, j) => {
            return <div className={`domino__face-cell`} key={j}>
              {(cell === 1) &&
                <div className={`domino__dot`}></div>
              }              
            </div>;
          })}
        </div>
      );
    };
    
    return (
      <div className={`domino`}>
        <div className={`domino__face`}>
          {genDots(pattern[0])}
        </div>
        <div className={`domino__divider`}></div>
        <div className={`domino__face`}>
          {genDots(pattern[1])}
        </div>
      </div>
    )
  }
}

export default Domino;
