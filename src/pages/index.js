import Image from "../components/image";
import Layout from "../components/layout";
import { Link } from "gatsby";
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

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Matchmaking</h1>
    {data.allJobsYaml.edges.map(edge => {
      return (
        <div>
          <div>@{edge.node.username}</div>
          {edge.node.jobs.map(job => {
            return (
              <>
                <div>{job.title}</div>
                <div>{job.description}</div>
              </>
            );
          })}
        </div>
      );
    })}
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
