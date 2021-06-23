import React from 'react';
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import banner from '../../assets/banner.png';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListHeader } from '../../components/ListHeader';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Divider } from '../../components/Divider';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'gstvds',
      avatar_url: 'https://github.com/gstvds.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'gstvds',
      avatar_url: 'https://github.com/gstvds.png',
      status: 'offline'
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={banner} style={styles.banner}>
        <View style={styles.banner_content}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={Divider}
        style={styles.members}
      />
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
