import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { AppointmentDetails } from '../pages/AppointmentDetails';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthStack() {
  return (
    <Navigator headerMode="none" screenOptions={{
      cardStyle: {
        backgroundColor: theme.colors.secondary100,
      }
    }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Navigator>
  );
}
