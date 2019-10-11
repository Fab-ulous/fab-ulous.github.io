import React from "react";

import Helmet from "react-helmet";
import Layout from "components/Layout";

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/@fab-ulous/github@0.1.3/dist/github.min.css"
      />
      <title>not-found - fab-ulous</title>
    </Helmet>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
