import React, { Component } from "react";
import {
  Grid
} from "semantic-ui-react";
class Education extends Component {

  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={4} style={{ color: "#000" }}>
            <p>{this.props.startYear} - {this.props.endYear}</p>
          </Grid.Column>
          <Grid.Column width={12}>
            <h4
              style={{ marginTop: "0px",
                color: "#23486b" }}>{this.props.schoolName}</h4>
            <p>{this.props.schoolDescription}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      );
    }
  }


export default Education;
