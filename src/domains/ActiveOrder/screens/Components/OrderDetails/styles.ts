import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    elevation: 3,
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});
