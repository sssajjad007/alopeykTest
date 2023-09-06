import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    width: '92%',
    height: 64,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 16,
    flexDirection: 'row-reverse',
    marginVertical: 8,
  },
  button: {
    width: 68,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#6a73de',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
});
