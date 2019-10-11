import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

import Layout from "components/Layout"

import fabulous from "../images/github-fabulous.png"

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
`

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
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const RenderBody = () => (
  <>
    <Helmet title={"fab-ulous"} />
    <Hero>
      <img width="100%" src={fabulous} />
      <h1>
        Colorful <u>f</u>loating <u>a</u>ction <u>b</u>uttons for your GitHub
        repo or account (wip)
      </h1>
    </Hero>

    <Section>
      <h3>Get started</h3>
      <p>
        <h4>Import fab-ulous</h4>You can add fab-ulous directly in head
      </p>
      <code class="special">
        {
          '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fab-ulous/github@latest/dist/github.min.css">'
        }
      </code>
      <p>or</p>
      <code class="special">
        {
          '<link rel="stylesheet" type="text/css" href="https://unpkg.com/@fab-ulous/github@latest/dist/github.min.css">'
        }
      </code>
      <p>or through npm / yarn</p>
      <code>{"npm install @fab-ulous/github"}</code>
      <code>{"yarn add @fab-ulous/github"}</code>
      <p>
        <h4>Usage</h4>Add (where you want) this:
      </p>
      <code class="special">
        {'<a id="github-fabulous" href="[repo_url]">[option_text]</a>'}
      </code>
    </Section>
    <Section>
      <h3>Customization</h3>
      <p>
        <h4>Color</h4>Choose your color between ... and add it as a class, an
        example?
      </p>
      <code>
        {
          '<a id="github-fabulous" class="red" href="[repo_url]">[option_text]</a>'
        }
      </code>

      <p>
        <h4>Position</h4>Choose between left / right, bottom / top
      </p>
      <code>
        {
          '<a id="github-fabulous" class="red left top" href="[repo_url]">[option_text]</a>'
        }
      </code>

      <p>
        <h4>Shadow</h4>Don't you like shadow? Remove it:
      </p>
      <code>
        {
          '<a id="github-fabulous" class="red left top no-shadow" href="[repo_url]">[option_text]</a>'
        }
      </code>

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
    </Section>
  </>
)

export default () => {
  return (
    <Layout>
      <RenderBody />
    </Layout>
  )
}
