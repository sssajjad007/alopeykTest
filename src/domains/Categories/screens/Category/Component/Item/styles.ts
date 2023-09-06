import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  gridItem: {
    width: 160,
    height: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 24,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
