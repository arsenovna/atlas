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
import { UserService } from "../../services/user";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./style.css";
import User from "../../Interfaces/User";

const userService = new UserService();

// const Profile: FunctionComponent<{}> = () => {
// let test = async () => await userService.getUsers();
// let a = test().then(i => console.log("here it works", i));

// const [users, setUsers] = useState(userService.getUsers());
// console.log("users", users);

const headers = [
  { title: "First name", sortable: true, sortKey: "" },
  { title: "Last name", sortable: true, sortKey: "" },
  { title: "Position", sortable: false, sortKey: "" },
  { title: "Email", sortable: true, sortKey: "" },
  { title: "Phone number", sortable: true, sortKey: "" }
];



export default function Profile() {
  const [users, setUsers] = useState()

  useEffect(() => {
    userService.getUsers().then(data => setUsers(data.users))
  }, []);
  console.log(users)
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
                <TableCell>email</TableCell>
                <TableCell>firstName</TableCell>
                <TableCell>lastName</TableCell>
                <TableCell>address</TableCell>
                <TableCell>dob</TableCell>
                <TableCell>role</TableCell>
                <TableCell>phoneNumber</TableCell>
                <TableCell>salary</TableCell>
                <TableCell>gender</TableCell>
                <TableCell>startDate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user: User, index: number) => {
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
                )
              })}

            </TableBody>
          </Table>
        </Card>
      </div>
    </>
  );
}
