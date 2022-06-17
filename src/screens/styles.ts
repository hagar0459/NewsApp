import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    marginBottom: 10,
    width: '90%',
    marginHorizontal: '5%',
  },
  itemHeader: {
    fontWeight: 'bold',
    fontSize: 18,
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
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  newsList: {
    backgroundColor: '#fafafa',
  },
  newsListContainer: {
    backgroundColor: '#fafafa',
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
  },
});
