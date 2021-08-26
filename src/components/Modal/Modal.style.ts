import styled from 'styled-components';

export const Wrapper = styled.section`
  .modalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .modalWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 100;

    .modal {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background-color: white;
      width: 55%;
      padding: 2rem;
      max-width: 60rem;
      height: auto;
      min-height: 40rem;
      pointer-events: all;
      max-height: 95vh;
      overflow: auto;
    }

    .formRow {
      label {
        margin-bottom: 0;
      }
    }

    label {
      display: block;
      margin-bottom: 10px;
    }

    .container {
      margin-bottom: 7px;
    }
  }
`;
