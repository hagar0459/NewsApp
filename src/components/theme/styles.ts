import {I18nManager, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    marginHorizontal: '5%',
  },
  itemHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  closeButton: {
    textAlign: 'center',
    fontSize: 20,
  },
  closeButttonContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 3,
    left: 10,
    zIndex: 2,
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 5,
  },
  inputContainer: {
    height: 60,
    width: '100%',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  settingsImage: {
    height: 300,
    width: '100%',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 20,
    alignItems: 'center',
  },
  settingsItemText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  newsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  cardContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 15,
    textAlign: 'left',
  },

  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 16,
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
