import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const StyledLink = styled(Link).attrs({
  className: "f1"
})`
  color: white;
  text-decoration: none;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <StyledH1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledH1>
    </Container>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
