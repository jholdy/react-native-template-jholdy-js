import styled from 'styled-components/native';
import InputCustom from 'components/_form/InputCustom';
import Button from 'components/Button';

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(InputCustom)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;
