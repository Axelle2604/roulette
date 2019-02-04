import React, { PureComponent } from 'react';
import { getData } from '../services/jsonApi';

export default class Home extends PureComponent {
  state = {
    nbTarget: 0,
    listPeople: [],
    indexWinner: 0,
    winner: '',
  };

  componentDidMount() {
    this.getPeople();
  }

  async getPeople() {
    const {
      data: { result },
    } = await getData();
    if (result !== null) {
      return this.setState({
        listPeople: Object.values(result),
      });
    }
  }

  setRandomNumber() {
    this.setState({
      nbTarget: Math.floor(Math.random() * 10),
    });
  }

  checkNumberWinner() {
    const newTab = this.state.listPeople.map(people => {
      return Math.abs(people.number - this.state.nbTarget);
    });
    const indexWinner = newTab.indexOf(Math.min(...newTab));
    this.setState({
      indexWinner,
    });
    this.checkPeopleWinner();
  }

  checkPeopleWinner() {
    const winner = this.state.listPeople[this.state.indexWinner];
    this.setState({
      winner: winner.name,
    });
  }

  onClick() {
    this.setRandomNumber();
    this.checkNumberWinner();
  }

  render() {
    return (
      <div>
        <div>
          {this.state.listPeople.map(people => {
            return (
              <div>
                <div>{people.name}</div>
              </div>
            );
          })}
        </div>
        <button onClick={this.onClick.bind(this)}>Let's go !</button>
        <div>{this.state.winner}</div>
        <div />
      </div>
    );
  }
}
