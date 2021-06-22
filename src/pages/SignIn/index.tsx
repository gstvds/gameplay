import React from 'react'
import { View, Text, Image, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import illustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';
import { ROUTES } from '../../utils/routes';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate(ROUTES.HOME);
  }

  return (
    <View style={styles.container}>
      <Image source={illustration} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.subtitle}>Crie grupos para jogar seus games{'\n'}favoritos com seus amigos</Text>

        <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
      </View>
    </View>
  );
}
