import React, { Component } from "react";
import loadingImg from "../../loading.svg";

export class loading extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{
          marginTop: "180px",
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <loadingImg />
      </div>
    );
  }
}

export default loading;
