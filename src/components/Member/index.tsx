import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

import { Avatar } from '../Avatar';

export interface MemberData {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface MemberProps {
  data: MemberData
}

export function Member({ data }: MemberProps) {
  const online = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar uri={data.avatar_url} />
      <View>
        <Text style={styles.title}>
          {data.username}
        </Text>
        <View style={styles.status}>
          <View style={[styles.bullet_status, { backgroundColor: online ? theme.colors.on : theme.colors.primary }]} />
          <Text style={styles.status_text}>{online ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}
