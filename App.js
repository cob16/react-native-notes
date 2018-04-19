import React, { Component } from 'react';
import styles from './styles';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    // Toggle the state every two seconds
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 2000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.children : ' ';
    return <Text style={this.props.style}>{display}</Text>;
  }
}

class WebList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  }
  componentDidMount() {
    return fetch('https://steamgaug.es/api/v2')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.ISteamGameCoordinator;
        var data = Object.keys(responseJson).map(function(key) {
          return { type: key, name: responseJson[key] };
        });
        this.setState(
          {
            dataSource: data,
            isLoading: false,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <ActivityIndicator />;
    } else {
      console.log('Fully loaded', this.state.dataSource);
      return (
        <FlatList
          style={this.props.style}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text style={this.props.itemStyle}>{item.type} {item.name.error}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      );
    }
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleButtonPress = () => {
    Alert.alert('Button pressed!', 'You did it!');
  };

  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <View style={styles.container}>
          <Text style={[styles.title, styles.square]}>
            React Native Notes
          </Text>
          <Text style={[styles.h1, { paddingTop: '75%' }]}>
            Swipe to the left to explore
          </Text>
          <Text style={styles.h1}>
            {'\n←'}
          </Text>

        </View>

        <View style={styles.container}>
          <Text style={[styles.title, styles.square]}>
            {'<TextInput>'}
          </Text>
          <Text style={styles.h1}>
            There are a number of components that react native provides such as.
          </Text>
          <TextInput
            value={this.state.inputValue}
            onChangeText={this._handleTextChange}
            placeholder="A textbox! wow"
            style={styles.input}
          />
          <Text style={styles.h2}>
            As the name implies React native tries to use the platform specific components. Meaning that your textbox will have the right android/OSX flavour to them.
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.title, styles.square]}>
            {'<Button>'}
          </Text>
          <Text style={styles.h1}>
            The same goes for buttons
          </Text>
          <View style={styles.well}>
            <Button title="I am a button" onPress={this._handleButtonPress} />
            <Button
              title="So am I"
              color="#841584"
              onPress={this._handleButtonPress}
            />
          </View>
          <Text style={styles.h2}>
            This is your basic button. If you want something more custom you will have to make your own with the "Touchable" components.
          </Text>
        </View>

        <View style={styles.container}>
          <Blink style={[styles.title, styles.circle]}>State</Blink>
          <Text style={styles.h1}>
            This blinking text is a test of changing state in react.
          </Text>
          <Text style={styles.h2}>
            Calling 'setState()' indicates to React that there should be a redraw of the component at some point in the future
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.title, styles.square]}>
            {'<Listview>'}
          </Text>
          <Text style={styles.h1}>
            This is a component where you can use a lambda to render an array of data.
          </Text>
          <FlatList
            data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({ item }) => <Text style={styles.h1}>{item.key}</Text>}
          />
          <Text style={styles.h3}>
            You can scroll this :)
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={[styles.title, styles.circle]}>Network</Text>
          <Text style={styles.h1}>
            This List is generated from a web request
          </Text>
          <WebList style={styles.well} itemStyle={styles.h3}/>
          <Text style={styles.h2}>
            Here we can use 'fetch()' to get the data for us.
          </Text>
        </View>

      </ScrollView>
    );
  }
}
