import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  .container {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .item {
    position: relative;
    height: 100%;
    width: 50%;
    float: left;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    a {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      font-size: 2rem;
      line-height: 1;
      font-weight: 400;
      text-transform: uppercase;
      padding: 8px 10px;
      border: solid 1px lightgray;
    }
  }
`;
