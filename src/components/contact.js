import React, { Component } from "react";
import {
  Form, Button, TextArea, Message, Grid, Icon
} from "semantic-ui-react";
import SocialNetwork from "./socialNetwork";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      textme: "",
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      textmeError: false,
      formError: false,
      errorMessage: "Please complete all the fields.",
      complete: false
    };

  }

  handleSubmitContactForm = () => {
    this.setState({
      complete: true
    });
  }
  handleGetFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  }
  handleGetLastName = (e) => {
    this.setState({ lastName: e.target.value });
  }
  handleGetEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  handleGetText = (e) => {
    this.setState({ textme: e.target.value });
  }
  submitContactForm() {
    let error = false;

    if (this.state.studentFirstName === "") {
      this.setState({ firstNameError: true });
      error = true;
    }
    else {
      this.setState({ firstNameError: false });
      error = false;
    }
    if (this.state.studentLastName === "") {
      this.setState({ lastNameError: true });
      error = true;
    }
    else {
      this.setState({ lastNameError: false });
      error = false;
    }
    if (this.state.email === "") {
      this.setState({ emailError: true });
      error = true;
    }
    else {
      this.setState({ emailError: false });
      error = false;
    }
    if (this.state.textme === "") {
      this.setState({ textmeError: true });
      error = true;
    }
    else {
      this.setState({ textmeError: false });
      error = false;
    }

    if (error) {
      this.setState({ formError: true });
      return;
    }
    this.setState({ formError: false });
  }

  render() {
    return (
      <div>
        <Grid divided="vertically" columns={2}>
          <Grid.Column
            computer={6} mobile={16} tablet={16}
            className="contact-firstrow" style={{ textAlign: "center",
              paddingTop: "2em" }}>
            <h3>
              <Icon size="large" name="user" />
                Ozkan Aslanbakan
            </h3>
            <h3>
              <Icon size="large" name="phone" />
                (+90) 535 522 63 22
              {" "}
            </h3>
            <h3>
              <Icon size="large" name="mail" />
                ozkanasl@gmail.com
            </h3>
            <h3>
              <Icon size="large" name="github" />
                github.com/ozkanasl
            </h3>
          </Grid.Column>
          <Grid.Column
            computer={10} mobile={16} tablet={16}
            style={{ color: "#f7f7f7" }}>
            <Form error={this.state.formError} success>
              <Form.Group widths="equal">
                <Form.Field>
                  <Form.Input
                    required onChange={this.handleGetFirstName} label="First Name"
                    placeholder="First Name..." error={this.state.firstNameError} />
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    required onChange={this.handleGetLastName} label="Last Name"
                    placeholder="Last Name..." error={this.state.lastNameError} />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Form.Input
                  required onChange={this.handleGetEmail} label="Email"
                  placeholder="Email..." error={this.state.emailError} />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  control={TextArea} required onChange={this.handleGetText}
                  label="About" placeholder="Write here..." error={this.state.textmeError} />
              </Form.Field>
              <Message success header="Form Completed" content="You're all signed up for the newsletter" />
              <Message error header="Action Forbidden" content="You can only sign up for an account once with a given e-mail address." />
              <Button
                positive icon="checkmark" labelPosition="right"
                content="Submit" onClick={this.handleSubmitContactForm} />
            </Form>
          </Grid.Column>
        </Grid>
        <SocialNetwork />
      </div>
    );
  }
}

export default Contact;
