import React from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { Field, FieldBigger } from "./Styles";

const FormStyled = styled.form`
  padding: 20px;
  background-color: ${(props) => props.theme.backgroundColor};

  color: ${(props) => props.theme.color};

  label {
    color: ${(props) => props.theme.color};
  }
`;

FormStyled.defaultProps = {
  theme: {
    backgroundColor: "#FFF",
    color: "#000",
  },
};

const themeDark: DefaultTheme = {
  backgroundColor: "#07335b",
  color: "#FFF",
};

const themeLight: DefaultTheme = {
  backgroundColor: "#FFF",
  color: "#07335b",
};

export default function Form() {
  return (
    <ThemeProvider theme={themeLight}>
      <FormStyled>
        <Field>
          <label htmlFor="nome">Nome:</label>
          <input type="text" name="nome" id="nome" />
        </Field>

        <FieldBigger>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" />
        </FieldBigger>
        <button>Cadastrar</button>
      </FormStyled>
    </ThemeProvider>
  );
}
