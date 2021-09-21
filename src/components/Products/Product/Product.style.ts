import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 33.33%;
  height: 55.0rem;
  float: left;
  padding: 0 10px;
  margin: 0 auto 2rem;

  .thumb {
    display: block;
    width: 100%;

    img {
      display: block;
      width: 100%;
      height: 300px;
      margin: 0;
      object-fit: cover;
    }
  }
`;
