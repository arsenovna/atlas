// import React, {
//   useState,
//   FunctionComponent,
//   useEffect,
//   EffectCallback
// } from "react";
import React, { Component, useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { UserService } from "../../../services/user";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./style.css";
import User from "../../../Interfaces/User";

const userService = new UserService();

const headers = [
  { title: "First name", sortable: true, sortKey: "" },
  { title: "Last name", sortable: true, sortKey: "" },
  { title: "Position", sortable: false, sortKey: "" },
  { title: "Email", sortable: true, sortKey: "" },
  { title: "Phone number", sortable: true, sortKey: "" }
];

export default class Profile extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    let res = await userService.getUsers();
    this.setState({ users: res.users });
  }
  render() {
    const { users } = this.state;
    return (
      <>
        <div className="container">
          <div className="plus">
            <p>Profile</p>
            <Fab
              href="/createProfile"
              className="fab"
              size="small"
              color="primary"
              aria-label="Add"
            >
              <AddIcon />
            </Fab>
          </div>
          <Card className="card">
            <Table>
              <TableHead>
                <TableRow className="tbl-header">
                  <TableCell>Email</TableCell>
                  <TableCell>FirstName</TableCell>
                  <TableCell>LastName</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Phone number</TableCell>
                  <TableCell>Salary</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Start date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user: User, index: number) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.address}</TableCell>
                        <TableCell>{user.dob}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.phoneNumber}</TableCell>
                        <TableCell>{user.salary}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.startDate}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Card>
        </div>
      </>
    );
  }
}
