import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 8,
    marginHorizontal: '5%',
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
  },
  container: { flexDirection: 'row' },
  details: {
    paddingVertical: 8,
    color: '#000',
    fontSize: 14,
  },
  text: {
    color: '#000',
    fontSize: 14,
  },
});
