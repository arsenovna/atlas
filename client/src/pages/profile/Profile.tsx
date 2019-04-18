import React, { useState, FunctionComponent, useEffect, EffectCallback} from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { UserService } from "../../services/user";
import "./style.css";

const userService = new UserService();

const Profile: FunctionComponent<{}> = () => {
  const [users, setUsers] = useState(userService.getUsers());
  console.log('users', users);
  return (
    <>
      <div className="card">
        <div className="left">
          <p>Profile</p>
          <Card>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat (g)</TableCell>
                  <TableCell align="right">Carbs (g)</TableCell>
                  <TableCell align="right">Protein (g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    adsvawv
                  </TableCell>
                  <TableCell align="right">afvafv</TableCell>
                  <TableCell align="right">fvafv</TableCell>
                  <TableCell align="right">fvaf</TableCell>
                  <TableCell align="right">afvasv</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Profile;
