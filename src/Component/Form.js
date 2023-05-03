import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      data: [],
    };
    //console.log(this.state);
  }
  handleOnChange = (events) => {
    // console.log(events.target.value);
    // console.log(events.target.name);
    this.setState({ [events.target.name]: events.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const saveData = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };

    const arr = this.state.data;
    arr.push(saveData);
    this.setState({ data: arr });
  };

  render() {
    return (
      <>
        <div className="maindiv">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                className="input"
                onChange={this.handleOnChange}
              ></input>
            </label>
            <br />
            <br />

            <label>
              Department:
              <input
                type="text"
                name="department"
                className="input"
                onChange={this.handleOnChange}
              ></input>
            </label>
            <br />
            <br />

            <label>
              Rating:
              <input
                type="number"
                name="rating"
                className="input"
                onChange={this.handleOnChange}
              ></input>
            </label>

            <br />
            <br />

            <button onClick={this.handleSubmit} className="submit">
              Submit
            </button>
          </form>
          <div className="data-container">
            {this.state.data.map((item, index) => {
              return (
                <div className="data-wrapper">
                  <span>Name :{item.name}</span> |
                  <span>Department :{item.department}</span> |
                  <span>Rating :{item.rating}</span>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Form;
