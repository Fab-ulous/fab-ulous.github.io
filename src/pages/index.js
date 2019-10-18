import React from "react";

import Helmet from "react-helmet";

import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";

import Layout from "components/Layout";
import Button from "components/_ui/Button";

import fabulous from "../images/github-fabulous.png";
import arrow from "../images/arrow.png";

import "@fab-ulous/github";

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.blue500};
      }
      &:nth-of-type(2) {
        color: ${colors.orange500};
      }
      &:nth-of-type(3) {
        color: ${colors.purple500};
      }
      &:nth-of-type(4) {
        color: ${colors.green500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(2) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(3) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(4) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`;

const Section = styled("div")`
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

class RenderBody extends React.Component {
  intervalID = 0;

  state = {
    color: null
  };

  constructor(props) {
    super(props);
    this.state = { color: this.randomColor() };
  }

  componentDidMount = () => {
    this.intervalID = setInterval(() => {
      this.randomColor();
    }, 2222);
  };

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  randomColor = () => {
    let colors = [
      "red",
      "orange",
      "green",
      "teal",
      "blue",
      "indigo",
      "purple",
      "pink",
      "gray",
      ""
    ];
    let color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color });
    return color;
  };

  render = () => (
    <>
      <Helmet>
        <title>fab-ulous</title>
      </Helmet>
      <Hero>
        <img width="100%" src={fabulous} />
        <h1>
          Colorful <u>f</u>loating <u>a</u>ction <u>b</u>uttons for your GitHub
          repo or account <em>wip</em>
        </h1>
      </Hero>

      <Section>
        <h3>Get started</h3>
        <p>
          <h4>Import fab-ulous</h4>You can add fab-ulous directly in{" "}
          <strong>head</strong>
        </p>
        <code className="special-blue">
          {
            '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fab-ulous/github@latest/dist/github.min.css">'
          }
        </code>
        <p>or</p>
        <code className="special">
          {
            '<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fab-ulous/github@latest/dist/github.min.css">'
          }
        </code>
        <p>
          or through <strong>npm</strong> / <strong>yarn</strong> (this website
          uses this way)
        </p>
        <code>{"npm install @fab-ulous/github"}</code>
        <code>{"yarn add @fab-ulous/github"}</code>
        <p>and then import it with</p>
        <code>{"import '@fab-ulous/github';"}</code>
        <p>
          <h4>Usage</h4>Add (where you want) this
        </p>
        <code className="special-blue">
          {'<a class="github-fabulous" href="[repo_url]">[optional_text]</a>'}
        </code>
        <p>or this</p>
        <code className="special">
          {'<a id="github-fabulous" href="[repo_url]">[optional_text]</a>'}
        </code>
      </Section>
      <Section>
        <h3>Customization</h3>
        <p>
          <h4>Color</h4>Choose your color between{" "}
          <strong style={{ color: "#f56565" }}>red</strong>,{" "}
          <strong style={{ color: "#ed8936" }}>orange</strong>,{" "}
          <strong style={{ color: "#48bb78" }}>green</strong>,{" "}
          <strong style={{ color: "#38b2ac" }}>teal</strong>,{" "}
          <strong style={{ color: "#4299e1" }}>blue</strong>,{" "}
          <strong style={{ color: "#667eea" }}>indigo</strong>,{" "}
          <strong style={{ color: "#9f7aea" }}>purple</strong>,{" "}
          <strong style={{ color: "#ed64a6" }}>pink</strong> or{" "}
          <strong style={{ color: "#a0aec0" }}>gray</strong>, and add it as a
          class (default is{" "}
          <strong style={{ color: "#1a202c" }}>this color</strong>), an example?
        </p>
        <code>
          {
            '<a id="github-fabulous" class="red" href="[repo_url]">[option_text]</a>'
          }
        </code>
        <a
          id="github-fabulous"
          className="red"
          href="https://github.com/manzinello/fab-ulous"
          target="_blank"
          style={{ position: "inherit", marginTop: 15 }}
        >
          fab-ulous
        </a>
        {false && (
          <>
            <p>Randomize the color of the fab-ulous in this page</p>
            <Button style={{ width: 300 }} onClick={this.randomColor}>
              Random color
            </Button>
          </>
        )}
        <p>
          <h4>Position</h4>Choose between <strong>left</strong> /{" "}
          <strong>right</strong>, <strong>bottom</strong> / <strong>top</strong>
        </p>
        <code>
          {
            '<a id="github-fabulous" class="red left top" href="[repo_url]">[option_text]</a>'
          }
        </code>

        <p>
          <h4>Shadow</h4>Don't like <strong>shadow</strong>? Remove it
        </p>
        <code>
          {
            '<a id="github-fabulous" class="green left top no-shadow" href="[repo_url]">[option_text]</a>'
          }
        </code>
        <a
          id="github-fabulous"
          className="green left top no-shadow"
          href="https://github.com/manzinello/fab-ulous"
          target="_blank"
          style={{ position: "inherit", marginTop: 15 }}
        >
          fab-ulous
        </a>
        <p>
          <h4>Other customization</h4>
          More customization? Add a <strong>style</strong> to the element and
          specify what you want!
        </p>
        <code>
          {
            '<a id="github-fabulous" style="..." href="[repo_url]">[option_text]</a>'
          }
        </code>
        {false && (
          <div className="arrow">
            <img src={arrow} width="200" />
          </div>
        )}
        <a
          id="github-fabulous"
          className={this.state.color}
          href="https://github.com/manzinello/fab-ulous"
          target="_blank"
        >
          fab-ulous
        </a>
      </Section>
    </>
  );
}

export default () => {
  return (
    <Layout>
      <RenderBody />
    </Layout>
  );
};
