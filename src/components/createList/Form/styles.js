import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  form {
    min-height: 170px;
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 4px;

    button {
      min-width: 150px;
      height: 56px;
      margin-left: 8px;
    }
  }
`;

export const FormRow = styled.div`
  margin: 20px 0;
  height: 56px;

  div {
    margin: 0 4px;
  }
`;