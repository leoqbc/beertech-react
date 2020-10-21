import styled from "styled-components";

// Isolamento de estilização
export const Field = styled.section`
  label {
    display: block;
  }

  input {
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #777;
    border-radius: 2px;
    font-size: 1.4rem;
  }
`;

export const FieldBigger = styled(Field)`
  input {
    font-size: 2rem;
  }
`;

export const FormComponent = styled.form`
  padding: 20px;
  background-color: #07335b;
`;
