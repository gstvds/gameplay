import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import type { RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type ButtonAddProps = RectButtonProps;

export function ButtonAdd({ ...rest }: ButtonAddProps) {
  return (
    <RectButton
      {...rest}
      style={styles.container}
    >
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}
