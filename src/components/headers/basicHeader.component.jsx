import "./basicHeader.component.css";
import React from "react";

export default class BasicHeaderComponent extends React.Component {
  render = () => {
    return (
      <div className="header_div">
        <header>
          <div className="home">
            <a href="/forum">
              <button className="btn btn-secondary">Home</button>
            </a>
          </div>
          <div className="rules">
            <a href="/zet/rules">
              <p>What is Zet ?</p>
            </a>
          </div>
          <div className="options">
            <button className="btn btn-secondary">
              <a href="/options">Options</a>
            </button>
            <button className="btn btn-secondary">
              <a href="/data">Data</a>
            </button>
          </div>
        </header>
      </div>
    );
  };
}
