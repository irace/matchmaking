import "tachyons/css/tachyons.css";

import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div.attrs({ className: "sans-serif" })``;

const Content = styled.div.attrs({ className: "sans-serif" })`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Footer = styled.footer.attrs({ className: "copy lh-copy f7" })``;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>© {new Date().getFullYear()}</Footer>
        </Content>
      </Container>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
