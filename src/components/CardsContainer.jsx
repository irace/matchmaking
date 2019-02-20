import Card from "./Card";
import React from "react";
import styled from "styled-components";

const Container = styled.div.attrs({ className: "flex flex-wrap" })``;

const CardsContainer = props => {
  return (
    <>
      <Container>
        {props.jobs.map((job, index) => {
          return <Card key={index} title={job.title} description={job.description} />;
        })}
      </Container>
    </>
  );
};

export default CardsContainer;
