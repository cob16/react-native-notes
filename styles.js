import { StyleSheet, Dimensions } from 'react-native';

const softBlack = '#34495e';
// var {height, screenWidth} = Dimensions.get('window');
var screenWidth = Dimensions.get('window').width
console.log(screenWidth + '?');

export default StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
    padding: 20,
    paddingBottom: 5,
    width: screenWidth,
    justifyContent: 'center',
  },
  h1: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: softBlack,
    // backgroundColor: 'rgba(0,0,0,0)', //for transperncy if needed
  },
  h2: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'justify',
    color: softBlack,
  },
  h3: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: softBlack,
  },
  title: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#3498db',
    marginTop: 30,
    marginBottom: 30,
  },
  circle: {
    width: 200,
    height: 200,
    lineHeight: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  square: {
    padding: 10,
  },
  input: {
    margin: 15,
    height: 40,
    padding: 10,
    borderColor: softBlack,
    // borderBottomWidth: 1,
  },
  well: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
});
