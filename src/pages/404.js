import React from "react";

import Helmet from "react-helmet";
import Layout from "components/Layout";

import "@fab-ulous/github";

class NotFoundPage extends React.Component {
  state = {
    color: null
  };

  constructor(props) {
    super(props);
    this.state = { color: this.randomColor() };
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
    <Layout>
      <Helmet>
        <title>not-found - fab-ulous</title>
      </Helmet>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <a
        id="github-fabulous"
        className={this.state.color}
        href="https://github.com/manzinello/fab-ulous"
        target="_blank"
      >
        fab-ulous
      </a>
    </Layout>
  );
}

export default NotFoundPage;
