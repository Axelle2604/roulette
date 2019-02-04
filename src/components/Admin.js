import React, { PureComponent } from 'react';
import { postData, getData, deleteData } from '../services/jsonApi';

export default class Admin extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = null;
    this.state = {
      listPeople: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    return this.getPeople();
  }

  onClick() {
    this.postPeople();
  }

  async postPeople() {
    console.log('postdata');
    await postData(this.state.inputValue, this.setRandomNumber(), Date.now());
    this.getPeople();
  }

  async getPeople() {
    const {
      data: { result = {} },
    } = await getData();
    console.log(result);
    this.setState({
      listPeople: result !== null ? Object.values(result) : [],
    });
  }

  async deletePeople(id) {
    await deleteData(id);
    await this.getPeople();
  }

  setRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  onChange({ target: { value } }) {
    this.setState({
      inputValue: value,
    });
  }

  onClickDelete(id) {
    this.deletePeople(id);
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <div>
          <div>
            <input type="text" onChange={this.onChange.bind(this)} />
            <button onClick={this.onClick.bind(this)}>POST</button>
            <div>
              {this.state.listPeople.map(people => {
                return (
                  <div>
                    <div>{people.name}</div>
                    <i
                      className="far fa-trash-alt"
                      onClick={this.onClickDelete.bind(this, people.index)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
