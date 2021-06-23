import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import type { RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <RectButton {...rest} style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}
