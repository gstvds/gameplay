import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import type { RectButtonProps } from 'react-native-gesture-handler';

import discord from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton {...rest} style={styles.container}>
      <View style={styles.icon_wrapper}>
        <Image source={discord} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}
