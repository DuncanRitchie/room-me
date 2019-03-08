import React, { Component } from "react";
import "./HeaderBar.css";
import HeadPhonesLogo from "./headPhonesLogo";
import SearchLogo from "./searchLogo";
import LogoGrid from "../LogoGrid";
import Notifications from "../Notifications";

export class HeaderBar extends Component {
  state = {
    isActive: false
  };

  click = () => {
    this.state.isActive
      ? this.setState({ isActive: false })
      : this.setState({ isActive: true });
    this.props.notificationData();
  };

  render() {
    return (
      <div
        className={
          this.state.isActive
            ? "top-bar-container notification-expand"
            : "top-bar-container"
        }
      >
        <div className="top-bar">
          <button className="button-null" onClick={this.click}>
            <LogoGrid />
          </button>
          <h1 className="room-name">{this.props.roomName}</h1>
          <span className="icons-right">
            <SearchLogo />
            <HeadPhonesLogo />
          </span>
        </div>
        <div
          className={
            this.state.isActive
              ? "top-bar-notification expand"
              : "top-bar-notification"
          }
        >
          {this.props.notificationData().map(n => (
            <Notifications
              roomKey={n.roomKey}
              roomName={n.roomName}
              number={n.number}
              avatars={n.avatars}
              goToRoom={this.props.goToRoom}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default HeaderBar;
