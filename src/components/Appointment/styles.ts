import { theme } from './../../global/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
  width: '100%',
  flexDirection: 'row',
  alignSelf: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontFamily: theme.fonts.rajdhani.bold,
    color: theme.colors.heading,
    fontSize: 18,
  },
  category: {
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.highlight,
    fontSize: 13,
    marginRight: 24,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.heading,
    fontSize: 13,
    marginLeft: 7,
  },
  playerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  player: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 13,
    marginLeft: 7,
    marginRight: 24,
  },
});
