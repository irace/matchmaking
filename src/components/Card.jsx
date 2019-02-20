import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const Article = styled.article.attrs({ className: "mw5 bg-white br3 pa2 pa3-ns mv3 ba b--black-10 mr3" })``;

const Title = styled.h1.attrs({ className: "f4 normal" })``;

const Card = props => {
  return (
    <Article>
      <div className="tc">
        <Title>
          <ReactMarkdown source={props.title} />
        </Title>
        <hr className="mw3 bb bw1 b--black-10" />
      </div>
      <p className="lh-copy measure center f6 black-70">{props.description}</p>
    </Article>
  );
};

export default Card;
