import React, { Component } from "react";
import {
  Grid,
  Progress,
  Header
} from "semantic-ui-react";
export default class Skills extends Component {
  render() {
    return (
      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column computer={16}>
            <Header
              as="h4" style={{ fontSize: "17px",
                color: "#f7f7f7" }}>
              <Header.Content>{this.props.skill}</Header.Content>
            </Header>
            <Progress
              percent={this.props.progress} inverted color={this.props.color}
              progress />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
