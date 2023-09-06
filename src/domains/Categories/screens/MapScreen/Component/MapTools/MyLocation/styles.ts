import { StyleSheet } from 'react-native';

const ICON_WIDTH = 44;

export const styles = StyleSheet.create({
  iconContainer: {
    shadowColor: 'black',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { height: 0, width: 0 },
    elevation: 6,
    backgroundColor: 'white',
    borderRadius: ICON_WIDTH / 2,
    position: 'absolute',
    right: 16,
    bottom: 80, 
    width: ICON_WIDTH,
    height: ICON_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
