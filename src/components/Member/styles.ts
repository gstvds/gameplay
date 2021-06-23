import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.rajdhani.bold,
    color: theme.colors.heading,
    fontSize: 18,
  },
  status_text: {
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.highlight,
    fontSize: 13,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet_status: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 9,
  }
});
