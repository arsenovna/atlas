import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "@material-ui/icons/Dashboard";
import PermIdentity from "@material-ui/icons/PermIdentity";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Label from "@material-ui/icons/Label";
import Divider from "@material-ui/core/Divider";
import "./style.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  state = {
    menuIsOpen: true
  };

  logOut = () => {
    window.localStorage.removeItem("token");
    window.location.href = "http://localhost:3001/login";
  };

  render() {
    let { menuIsOpen } = this.state;
    let menuItems = [
      {
        label: "Dashboard",
        icon: <Dashboard />,
        link: "/dashboard"
      },
      {
        label: "User Profile",
        icon: <PermIdentity />,
        link: "/profile"
      },
      {
        label: "Products",
        icon: <ShoppingCart />,
        link: "/products"
      },
      {
        label: "Agents",
        icon: <SupervisorAccount />,
        link: "/agents"
      },
      {
        label: "Reports",
        icon: <AttachMoney />,
        link: "/reports"
      },
      {
        label: "Logout",
        icon: <Label onClick={() => this.logOut()} />,
        link: "#"
      }
    ];

    return (
      <div
        onClick={() => this.setState({ menuIsOpen: !menuIsOpen })}
        className="menu"
      >
        <Drawer
          className={menuIsOpen ? "menu-drawer open" : "menu-drawer closed"}
          variant="permanent"
          open={menuIsOpen}
        >
          <List className="list">
            <div className="atlas">
              <p>ATLAS</p>
            </div>
            <Divider />
            {menuItems.map((item, index) => (
              <div className="list-item" key={index}>
                <Link to={item.link}>
                  <ListItem className="customlist" button={true}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </Link>
              </div>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}
