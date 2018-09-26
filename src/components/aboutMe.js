import React from "react";
import { Container, Header } from "semantic-ui-react";
import posed from "react-pose";
import SocialNetwork from "./socialNetwork";

const Element = posed.div({
  enter: { staggerChildren: 50 }
});
const Paragraph = posed.div({
  enter: { x: 0,
    opacity: 1 },
  exit: { x: 100,
    opacity: 0 }
});

const aboutMe = () => (
  <Element>
    <Header
      as="h2" textAlign="center" style={{ color: "#eeee",
        fontSize: "40px" }}>
      <Header.Content>About Me</Header.Content>
    </Header>
    <Container className="about-text">
      <span className="span-icon" />
      <div
        style={{ lineHeight: "1.7",
          fontSize: "23px",
          padding: "20px 0px" }}>
        <Paragraph>
          <p>
              /* -- About Me -- */
            <br />
            <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Vel eros donec ac odio tempor orci dapibus ultrices. Malesuada fames ac turpis egestas integer eget. Elit at imperdiet dui accumsan sit. Interdum varius sit amet mattis. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sed felis eget velit aliquet sagittis. Nascetur ridiculus mus mauris vitae ultricies. Rhoncus urna neque viverra justo nec. Nunc sed blandit libero volutpat sed cras ornare. Ut pharetra sit amet aliquam id diam. Cras ornare arcu dui vivamus arcu felis bibendum ut. Aenean et tortor at risus viverra adipiscing at in. Ac tincidunt vitae semper quis lectus nulla at.
          </p>
          <p>
              Fermentum dui faucibus in ornare quam. Integer quis auctor elit sed vulputate mi sit amet. Venenatis urna cursus eget nunc scelerisque. Volutpat sed cras ornare arcu dui. Auctor eu augue ut lectus arcu bibendum at. Morbi tincidunt augue interdum velit euismod. Duis convallis convallis tellus id. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Proin sed libero enim sed. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ut etiam sit amet nisl purus in mollis nunc. Posuere sollicitudin aliquam ultrices sagittis orci a. Augue mauris augue neque gravida in. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Et odio pellentesque diam volutpat. Mauris in aliquam sem fringilla ut morbi tincidunt. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Massa id neque aliquam vestibulum. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.
          </p>
          <p>
              Risus viverra adipiscing at in tellus integer feugiat scelerisque. Vulputate sapien nec sagittis aliquam. Urna id volutpat lacus laoreet non curabitur. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Ornare arcu dui vivamus arcu felis bibendum ut. Tellus molestie nunc non blandit. Odio eu feugiat pretium nibh. Iaculis urna id volutpat lacus. Volutpat odio facilisis mauris sit amet massa vitae tortor. Elementum eu facilisis sed odio morbi quis commodo odio aenean. Lorem sed risus ultricies tristique nulla aliquet enim tortor at.
          </p>
          <p>
              Enim sit amet venenatis urna cursus eget nunc scelerisque. Quisque non tellus orci ac auctor augue mauris augue. Mattis molestie a iaculis at erat pellentesque. Felis eget nunc lobortis mattis. Vitae proin sagittis nisl rhoncus mattis. Odio ut sem nulla pharetra diam sit. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Pulvinar mattis nunc sed blandit libero volutpat sed cras ornare. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Non sodales neque sodales ut etiam.
          </p>
        </Paragraph>
      </div>
    </Container>
    <SocialNetwork />
  </Element>
);

export default aboutMe;
