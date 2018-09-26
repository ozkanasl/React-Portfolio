import React from "react";
import posed from "react-pose";


const Frame = posed.div({
  init: {
    applyAtEnd: { display: "none" },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: "block" },
    opacity: 1
  }
});

const transition = {
  duration: 400,
  ease: [ 0.08, 0.69, 0.2, 0.99 ]
};

const Image = posed.img({
  init: {
    position: "static",
    transition,
    flip: true,
    width: 100,
    height: 100
  },
  zoom: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
    width: "100vw",
    height: "100vh"
  }
});

class ZoomImg extends React.Component {
  state = {
    isZoomed: false
  };

  zoomIn() {
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    this.setState({ isZoomed: false });
  };

  handleToggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());
  render() {
    const { isZoomed } = this.state;
    const { ...props } = this.props;
    const pose = isZoomed ? "zoom" : "init";

    return (
      <div
        onClick={this.handleToggleZoom}>
        <Frame pose={pose} className="frame" />
        <Image pose={pose} {...props} />
      </div>
    );
  }
}

export default ZoomImg;
