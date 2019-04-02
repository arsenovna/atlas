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
import Divider from "@material-ui/core/Divider";
import "./style.css";

export default class Menu extends Component {
  state = {
    menuIsOpen: true
  };

  render() {
    let { menuIsOpen } = this.state;
    let menuItems = [
      {
        label: "Dashboard",
        icon: <Dashboard />
      },
      {
        label: "User Profile",
        icon: <PermIdentity />
      },
      {
        label: "Products",
        icon: <ShoppingCart />
      },
      {
        label: "Agents",
        icon: <SupervisorAccount />
      },
      {
        label: "Reports",
        icon: <AttachMoney />
      }
    ];

    return (
      <div onClick={() => this.setState({menuIsOpen: !menuIsOpen})} className="menu">
          <Drawer className={menuIsOpen ? "menu-drawer open" : "menu-drawer closed"} variant="permanent" open={menuIsOpen}>
            <List className="list">
              <div className="atlas">
                <p>ATLAS</p>
              </div>
              <Divider />
              {menuItems.map((item, index) => (
                <div className="list-item">
                  <ListItem className="customlist" button={true} key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                </div>
              ))}
            </List>
          </Drawer>
      </div>
    );
  }
}
