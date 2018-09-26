import React, { Component } from "react";
import { Item, Icon, Header, Button, Modal, Label, Image } from "semantic-ui-react";
import posed from "react-pose";
import ZoomImg from "./ZoomImg";
import _ from "lodash";
class Project extends Component {

  state = {
    hover: null,
    open: false
  }

  handleOpen = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render() {
    const styleDiv = {
      border: "1px solid black",
      display: "block",
      margin: "10px",
      borderRadius: "10px",
      cursor: "pointer",
      backgroundColor: "#ececec"
    };
    const insideText = {
      padding: "60px",
      textAlign: "center"
    };
    const ItemAnimate = posed.div({
      hoverable: true,
      pressable: true,
      init: {
        scale: 1,
        boxShadow: "0px 0px 0px rgba(0,0,0,0)"
      },
      hover: {
        scale: 1.05,
        boxShadow: "0px 1px 1px rgba(0,0,0,0)"
      }
    });

    return (
      <div>
        <Item.Group>
          <ItemAnimate>
            <Item style={styleDiv} className="project-item" onClick={this.handleOpen}>
              <Item.Content style={insideText}>
                <Item.Header>{this.props.projectHeader}</Item.Header>
                <Item.Description>{this.props.projectSubHeader}</Item.Description>
              </Item.Content>
            </Item>
          </ItemAnimate>
        </Item.Group>
        <Modal open={this.state.open} trigger={<Item className="project-item" />}>
          <Button className="modal-close-button" onClick={this.handleClose}><Icon className="black close icon"></Icon></Button>
          <Modal.Header>{this.props.projectHeader}</Modal.Header>
          <Modal.Content scrolling>
            <Modal.Description>
              <Header>{this.props.projectSubHeader}</Header>
              <p>{this.props.projectDescription}</p>
              <ul>
                {_.map(this.props.projectDescriptionList, listing => <li key={listing}>{listing}</li>)}
              </ul>
            </Modal.Description>
          </Modal.Content>
          <Header as="h6" textAlign="center" style={{ fontSize: "20px" }}>
            <Header.Content>Using Technologys</Header.Content>
          </Header>
          <div style={{ textAlign: "center" }}>
            <Label.Group size="large">
              {_.map(this.props.usingTech, tech => <Label pointing key={tech}>{tech}</Label>)}
            </Label.Group>
          </div>
          <Modal.Actions>
            <Header as="h2" textAlign="center" style={{ fontSize: "20px" }}>
              <Header.Content>Project Screenshots</Header.Content>
            </Header>
            <Image.Group
              size="small" style={{ textAlign: "center",
                display: "flex" }}>
              {_.map(this.props.projectScreenshots, screenshots => <ZoomImg
                size="large" className="image-frame" key={screenshots}
                src={screenshots} />)}
            </Image.Group>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


export default Project;
