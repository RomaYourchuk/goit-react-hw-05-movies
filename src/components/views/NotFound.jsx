import styled from 'styled-components';

const Alert = styled.p`
  line-height: 1.5;
  padding: 10px 20px;
  background-color: grey;
  color: red;
  font-size: 30px;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
`;

export default function NotFound() {
  return <Alert>not found</Alert>;
}