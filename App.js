import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,

} from 'react-native';
import { Header } from 'react-native-elements';
import db from "./localDP"
//console.log(db["teens"].chunks)
import PhonicSound from "./PhonicSound"
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      chunks:[],
      phonicSounds:[],
    };
  }
   render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <Image
          style={{width:100,height:100, marginLeft:100}}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
            this.setState({ phonicSounds: db[this.state.text].phones });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSound
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonicSounds[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 75,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    
  },
});


