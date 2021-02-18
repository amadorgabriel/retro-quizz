import styled from 'styled-components';
import React from 'react';

function Logo() {
  return <QuizLogo src="https://www.freelogodesign.org/file/app/client/thumb/cb22ef39-04ce-41b8-93f5-1ae84329f83a_200x200.png" />;
}

const QuizLogo = styled.img`
  margin: auto;
  display: block;
  width: 120px;
  height: 120px;

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default Logo;
