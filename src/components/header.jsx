import React, { Component } from "react";
import { newsCategory } from "../news";

class Header extends Component {
  state = {
    searchTerm: "",
  };

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleKeyPress = (event) => {};

  render() {
    const { category, changeCategory } = this.props;

    return (
      <div className="my-4">
        <h3
          className="mb-4 text-center font-weight-bold"
          style={{ fontWeight: "300" }}
        >
          Block Buster Headlines
        </h3>
        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter to Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className="my-4">
          {newsCategory &&
            Object.keys(newsCategory).map((item) => {
              if (category === newsCategory[item]) {
                return (
                  <button
                    onClick={() => changeCategory(newsCategory[item])}
                    className="btn btn-sm btn-warning mr-2 mb-2"
                  >
                    {`#${newsCategory[item]}`}
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={() => changeCategory(newsCategory[item])}
                    className="btn btn-sm btn-light mr-2 mb-2"
                  >
                    {`#${newsCategory[item]}`}
                  </button>
                );
              }
            })}
        </div>
      </div>
    );
  }
}
export default Header;
