import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

import discord from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = TouchableOpacityProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <View style={styles.icon_wrapper}>
        <Image source={discord} style={styles.icon} />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
