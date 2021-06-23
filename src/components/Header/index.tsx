import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import type { ReactNode } from 'react';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export function Header({ title, action }: HeaderProps) {
  const navigation = useNavigation();
  const { secondary40, secondary100, heading } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={styles.title}>{title}</Text>
      {action && <View>{action}</View>}
    </LinearGradient>
  );
}
