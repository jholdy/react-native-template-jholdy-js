import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import { Error, ContainerError } from './styles';

const InputCustom = props => {
  const {
    field,
    label,
    style,
    fontSizeInput,
    form,
    error,
    multiline,
    keyboardType,
    icon,
    type,
    secureTextEntry,
  } = props;
  const { errors, handleBlur } = form;
  const { onChange, value, name } = field;

  const hasError = error || errors[name];
  return (
    <>
      <Input
        onChangeText={onChange(name)}
        onBlur={handleBlur(name)}
        style={style}
        value={value}
        placeholder={label}
        fontSize={fontSizeInput}
        keyboardType={keyboardType}
        name={name}
        icon={icon}
        type={type}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
      />
      <ContainerError>{hasError && <Error>{hasError}</Error>}</ContainerError>
    </>
  );
};

InputCustom.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object]),
  fontSizeInput: PropTypes.number,
};

InputCustom.defaultProps = {
  style: {},
  fontSizeInput: 18,
};

export default InputCustom;
