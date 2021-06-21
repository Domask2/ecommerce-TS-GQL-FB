import styled from 'styled-components';

export const ButtonStyle = styled.button`
  display: block;
  width: 95%;
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 500;
  margin: 10px auto;
  padding: ${p => p.theme.padding};
  background: white;
  border-radius: 5px;
  color: #444;
  box-shadow: 1px 1px 1px grey;
  border: thin solid #888;
  outline: none;
  
  &:hover {
    cursor: pointer;
  }
`;
