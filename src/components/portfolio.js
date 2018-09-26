import React from "react";
import { Grid, Button, Header } from "semantic-ui-react";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0,
    y: 50 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50
  }
};
const charSkills = {
  exit: { y: 20,
    opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex,
      stiffness: 50 + charInWordIndex * 100,
      damping: 13 - Number(charInWordIndex)
    })
  }
};

const Portfolio = () => (
  <div
    style={{ color: "#ececec",
      paddingTop: "7em" }}>
    <Grid divided="vertically" className="portfolio-container" centered>
      <Grid.Row computer={16} style={{ background: "darkcyan" }}>
        <Header
          as="h2" textAlign="center" style={{ fontSize: "40px",
            display: "block" }}>
          <span
            className="author-span" style={{ marginRight: "15px",
              fontSize: "50px",
              color: "#f7f7f7" }}>Hi,</span>
          <Header.Content className="author-name">I'm Ozkan Aslanbakan</Header.Content>
        </Header>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{
          fontWeight: "bold",
          fontSize: "3em",
          padding: "1em",
          lineHeight: "1"
        }}>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                Front-end Developer
        </SplitText>
      </Grid.Row>
      <Grid.Row
        columns={1} style={{ fontSize: "1.4em",
          lineHeight: "1.5",
          background: "firebrick" }}>
        <SplitText initialPose="exit" pose="enter" charPoses={charSkills}>
              HTML/CSS | React | Redux | JavaScript | NodeJS | Express | MongoDB
        </SplitText>
      </Grid.Row>
      <Grid.Row columns={1} style={{ background: "lightgrey" }}>
        <Button
          href="http://facebook.com" circular color="blue"
          icon="facebook" />
        <Button
          href="http://twitter.com" circular color="blue"
          icon="twitter" />
        <Button
          href="http://instagram.com" circular color="purple"
          icon="instagram" />
        <Button
          href="http://linkedin.com" circular color="blue"
          icon="linkedin" />
        <Button
          href="http://google.com" circular color="red"
          icon="google plus" />
        <Button
          href="http://github.com" circular color="grey"
          icon="github" />
      </Grid.Row>
    </Grid>
  </div>
);
export default Portfolio;
