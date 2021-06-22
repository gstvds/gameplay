import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthStack } from './auth.routes';

import { Background } from '../components/Background';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
