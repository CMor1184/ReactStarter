import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <div>
        <i
          style={{ cursor: "pointer" }}
          className={this.toggleClassName()}
          onClick={
            this.props.liked
              ? this.props.onHandleDislike
              : this.props.onHandleLike
          }
          aria-hidden="true"
        ></i>
      </div>
    );
  }

  toggleClassName() {
    let name = "fa fa-heart";
    return this.props.liked ? name : name + "-o";
  }
}

export default Like;
