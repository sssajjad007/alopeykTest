import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: ' 100%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    paddingBottom: 12,
    zIndex: 12,
  },
  button: {
    width: '90%',
    height: 48,
    borderRadius: 24,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
