import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;

  border: 1px solid ${({ theme }) => theme.colors.sucess};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

export default function InputComponent(props) {
  return (
    <div>
      <Input {...props} />
    </div>
  );
}
