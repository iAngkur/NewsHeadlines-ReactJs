import React, { Component } from "react";

export default class Pagination extends Component {
  state = {
    isEditable: false,
  };

  render() {
    const {
      next,
      prev,
      isPrevious,
      isNext,
      currentPage,
      totalPage,
    } = this.props;
    return (
      <div className="d-flex my-5 align-items-center">
        <button className="btn btn-warning">Previous</button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input type="number" value="1" />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double Tap to Jump Page"
              onDoubleClick={() => {
                this.setState({ isEditable: !this.state.isEditable });
              }}
            >
              {1} of {100}
              <br />
              <small>Double Tap to Edit</small>
            </p>
          )}
        </div>
        <button className="btn btn-warning ml-auto">Nex</button>
      </div>
    );
  }
}
