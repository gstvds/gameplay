import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import type { RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import Player from '../../assets/player.svg';
import Calendar from '../../assets/calendar.svg';

import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
}

export type AppointmentType = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type AppointmentProps = RectButtonProps & {
  data: AppointmentType;
}

export function Appointment({ data, ...rest }: AppointmentProps) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton
      {...rest}
    >
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <Calendar />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playerInfo}>
              <Player fill={owner ? primary : on} />
              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}
