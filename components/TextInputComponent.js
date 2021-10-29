import React from 'react';
import { View, TextInput } from 'react-native';

export const TextInputComponent = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      keyboardType='numeric'
      maxLength={2}
    />
  );
}