import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import "./style.css";

export default class Profile extends Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="left">
            <p>Profile</p>
            <Card className="left-card" square={false}>
              <CardContent>
                <form>
                  <TextField margin="normal" label="First name" />
                  <TextField margin="normal" label="Last name" />
                  <TextField margin="normal" label="Email address" />
                  <TextField margin="normal" label="Address" />
                  <TextField margin="normal" label="City" />
                  <TextField margin="normal" label="Country" />
                  <TextField margin="normal" label="Zip code" />
                  <div className="btn">
                    <Button variant="contained" size="small" color="primary">
                      Update Profile
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="right">
            <Card className="right-card" square={false}>
              jsbdv
            </Card>
          </div>
        </div>
      </>
    );
  }
}
