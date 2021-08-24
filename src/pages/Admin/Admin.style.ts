import styled from 'styled-components';

export const Wrapper = styled.div`
  .admin {
    padding: 0 10px;

    .callToActions {
      display: inline-block;
      width: 100%;
      padding: 0;
      margin: 0 auto;

      ul,
      li {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }

      ul {
        li {
          display: inline-block;
        }
      }
    }
  }

  .manageProducts {
    h1 {
      margin-top: 1.5rem;
    }

    table.results {
      tr {
        &:nth-child(even) {
          background-color: #d3d3d3;
        }

        .thumb {
          width: 15rem;
          margin: 0 auto;
        }
      }
    }
  }

  @media only screen and (max-width: 980px) {
    .manageProducts {
      table {
        width: 100%;

        .results {
          width: 100%;

          tr td {
            display: block;
            width: 100%;

            img {
              display: block;
              width: 100% !important;
            }
          }
        }
      }
    }
  }
`;
