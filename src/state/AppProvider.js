import React from "react";
import whowon from "../helpers/whowon";
import AppContext from "./AppContext";

class AppProvider extends React.Component {
  state = {
    score: 0,
    picked: "",
    hosuePicked: "",
    result: ""
  };

  increaseScore = () => {
    this.setState(state => ({
      score: state.score + 1
    }));
  };

  setPicked = picked => {
    this.setState({ picked });
  };

  setHousePicked = hosuePicked => {
    this.setState({ hosuePicked });
    this.calculateResult();
  };

  calculateResult = () => {
    this.setState(state => {
      const [result, score] = whowon(state.picked, state.hosuePicked);
      this.updateScore(score);
      return {
        result: result
      };
    });
  };

  updateScore = newScore => {
    setTimeout(
      () =>
        this.setState(state => ({
          score: (state.score += newScore)
        })),
      1400
    );
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          increaseScore: this.increaseScore,
          setPicked: this.setPicked,
          setResult: this.setResult,
          setHousePicked: this.setHousePicked,
          calculateResult: this.calculateResult
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
