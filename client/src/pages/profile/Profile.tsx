// import React, {
//   useState,
//   FunctionComponent,
//   useEffect,
//   EffectCallback
// } from "react";
import React, { Component } from "react";
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

const userService = new UserService();

// const Profile: FunctionComponent<{}> = () => {
// let test = async () => await userService.getUsers();
// let a = test().then(i => console.log("here it works", i));

// const [users, setUsers] = useState(userService.getUsers());
// console.log("users", users);

export default class Profile extends Component {
  state = {
    headers: [
      { title: "First name", sortable: true, sortKey: "" },
      { title: "Last name", sortable: true, sortKey: "" },
      { title: "Position", sortable: false, sortKey: "" },
      { title: "Email", sortable: true, sortKey: "" },
      { title: "Phone number", sortable: true, sortKey: "" }
    ]
  };

  async componentDidMount() {
    let res = await userService.getUsers();
    console.log(res);
  }
  render() {
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
                  <TableCell>Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    adsvawv
                  </TableCell>
                  <TableCell component="th" scope="row">
                    adsvawv
                  </TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </>
    );
  }
}
