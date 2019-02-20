import CardsContainer from "../components/CardsContainer";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import styled from "styled-components";

export const query = graphql`
  query HomePageQuery {
    allJobsYaml {
      edges {
        node {
          username
          jobs {
            title
            description
          }
        }
      }
    }
  }
`;

const Heading = styled.h2.attrs({ className: "f2" })``;

const Username = styled.a.attrs({ className: "link dim" })`
  color: rebeccapurple;
`;

const Description = styled.div.attrs({ className: "copy f6 lh-copy" })``;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allJobsYaml.edges
      .map(edge => edge.node)
      .map(node => {
        return (
          <>
            <Heading>
              <Username href={`https://twitter.com/${node.username}`}>@{node.username}</Username>
            </Heading>
            <Description>
              These are listings from friends who I know well enough to highly recommend working with. If you’re interested, and you know me
              well enough to get in touch with me, I’d be happy to make an introduction for you.
            </Description>
            <CardsContainer jobs={node.jobs} />
          </>
        );
      })}
  </Layout>
);

export default IndexPage;
