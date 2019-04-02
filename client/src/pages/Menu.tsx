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

export default class Menu extends Component {
  render() {
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
      <>
        <div />
        <Drawer open={true} className="drawer">
          <List className="list">
            <div className="atlas">
              <p>ATLAS</p>
            </div>
            <Divider />
            {menuItems.map((item, index) => (
              <div className="list-item">
                <ListItem button={true} key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              </div>
            ))}
          </List>
        </Drawer>
        <main className="main">
          <div className="right" />
        </main>
      </>
    );
  }
}
