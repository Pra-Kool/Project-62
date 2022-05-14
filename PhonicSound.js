import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,

} from 'react-native';

import {Audio} from 'expo-av'

export default class PhonicSound extends React.Component{
  playSound = async soundChunk => {
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk + '.mp3' 
    await Audio.Sound.createAsync({
      uri:soundLink
    },{shouldPlay:true})
  }
  render(){
    return(
      <TouchableOpacity onPress ={()=>{this.playSound(this.props.soundChunk)}}> 
        <Text>
        {this.props.wordChunk}
        </Text>
      </TouchableOpacity>
    )
    
  }
}