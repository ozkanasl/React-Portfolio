import React from "react";
import {
  Container, Icon, Button, Divider, Grid
} from "semantic-ui-react";

const socialNetwork = () => (
  <div>
    <Container textAlign="center" style={{ paddingTop: "7em" }}>
      <Grid>
        <Grid.Row>
          <Grid.Column columns={1}>
            <Divider
              horizontal style={{ "fontSize": "24px",
                "color": "#000" }}>How To Reach Me</Divider>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column only="computer">
            <Button color="facebook">
              <Icon name="facebook" />
                 Facebook
            </Button>
            <Button color="twitter">
              <Icon name="twitter" /> Twitter
            </Button>
            <Button color="facebook">
              <Icon name="github" /> GitHub
            </Button>
            <Button color="linkedin">
              <Icon name="linkedin" /> LinkedIn
            </Button>
            <Button color="instagram">
              <Icon name="instagram" /> Instagram
            </Button>
            <Button color="youtube">
              <Icon name="youtube" /> YouTube
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column only="tablet mobile">
            <Button
              href="http://facebook.com" circular color="blue"
              icon="facebook" />
            <Button
              href="http://twitter.com" circular color="blue"
              icon="twitter" />
            <Button
              href="http://github.com" circular color="grey"
              icon="github" />
            <Button
              href="http://linkedin.com" circular color="blue"
              icon="linkedin" />
            <Button
              href="http://instagram.com" circular color="purple"
              icon="instagram" />
            <Button
              href="http://youtube.com" circular color="red"
              icon="youtube" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);

export default socialNetwork;
