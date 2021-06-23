import React from 'react';
import { TextInput } from 'react-native';

import type { TextInputProps } from 'react-native';

import { styles } from './styles';

export function TextArea({ ...rest }: TextInputProps) {
  return (
    <TextInput
      keyboardAppearance="dark"
      style={styles.container}
      {...rest}
    />
  );
}
