import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import "./style.css";

export default class CreateProfile extends Component {
  render() {
    return (
      <>
        <div className="create-cont">
          {/* <div>
            <p>Create profile</p>
          </div> */}

          <Card className="left" square={false}>
            <CardContent>
              <form>
                <TextField margin="normal" label="Username" />
                <TextField margin="normal" label="Email" />
                <TextField margin="normal" label="Password" />
                <TextField margin="normal" label="First Name" />
                <TextField margin="normal" label="Last Name" />
                <TextField margin="normal" label="Address" />
                <TextField margin="normal" label="City" />
                <TextField margin="normal" label="Country" />
                <TextField margin="normal" label="Postal code" />
                <div className="btn">
                  <Button variant="contained" size="small" color="primary">
                    Update Profile
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          <Card className="right" square={false}>
            jsbdv
          </Card>
        </div>
      </>
    );
  }
}
