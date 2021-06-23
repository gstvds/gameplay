import React from 'react';
import { TextInput } from 'react-native';

import type { TextInputProps } from 'react-native';

import { styles } from './styles';

export function SmallInput({ ...rest }: TextInputProps) {
  return (
    <TextInput
      keyboardType="numeric"
      keyboardAppearance="dark"
      style={styles.container}
      {...rest}
    />
  );
}
