import React from "react";
import SocialNetwork from "../socialNetwork";
import { Grid, Header, Image } from "semantic-ui-react";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import PersonImage from "../assets/person.png";

const Resume = () => (
  <div>
    <Grid divided="vertically" style={{ color: "#ececec" }}>
      <Grid.Row>
        <Grid.Column
          floated="left" textAlign="center" computer={4}
          style={{ paddingTop: "9em",
            position: "sticky",
            top: "0" }} mobile={16} tablet={8}>
          <Image
            className="avatar-image" src={PersonImage} alt="avatar"
            circular style={{ height: "200px",
              background: "#f7f7f7",
              margin: "0 auto" }} />
          <h2>Ozkan Aslanbakan</h2>
          <h4>Front-end Developer</h4>
          <hr />
          <p>1 Hacker Way Menlo Park, 94025</p>
          <p>+90 5355226322</p>
          <p>ozkanasl@gmail.com</p>
          <p>ozkanasl.com</p>
          <hr />
        </Grid.Column>
        <Grid.Column computer={2} only="computer">
        </Grid.Column>
        <Grid.Column computer={10} mobile={16} tablet={8}>
          <Header
            as="h2" textAlign="center" style={{
              fontSize: "40px",
              marginBottom: "10px" }}>
            <Header.Content>Education</Header.Content>
          </Header>
          <Education
            startYear={2010}
            endYear={2014}
            schoolName="University"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Education
            startYear={2014}
            endYear={2016}
            schoolName="Certificate Program"
            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <hr />
          <Header
            as="h2" textAlign="center" style={{ fontSize: "40px",
              color: "#000" }}>
            <Header.Content>Experience</Header.Content>
          </Header>
          <Experience
            jobName="@Front-end Developer"
            startYear={2014}
            endYear={2016}
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <Experience
            jobName="@Front-end Developer"
            startYear={2016}
            endYear={2018}
            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
          <hr />
          <Header
            as="h2" textAlign="center" style={{ fontSize: "40px",
              color: "#000" }}>
            <Header.Content>Skills</Header.Content>
          </Header>
          <Skills
            skill="javascript"
            progress={85}
            color="blue" />
          <Skills
            skill="React"
            progress={75}
            color="blue" />
          <Skills
            skill="Redux"
            progress={55}
            color="red" />
          <Skills
            skill="HTML/CSS"
            progress={80}
            color="green" />
          <Skills
            skill="NodeJS"
            progress={50}
            color="red" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <SocialNetwork />
  </div>
);

export default Resume;
