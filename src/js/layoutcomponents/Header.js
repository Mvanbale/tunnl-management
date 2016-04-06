import React from "react";
import "../../style.css";
export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
      <h1>Tunnl Streaming Service</h1>
      <img className = 'logo' src="../../images/tunnl_final.png" alt="Tunnl (c) logo"/>
      </div>
    );
  }
}
