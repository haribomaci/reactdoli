import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [radius, setRadius]= useState('');
  const [height, setHeight]= useState('');
  const [volume, setVolume]= useState('0');
  // function calcVolume(){
  //   let localVolume= 1.0/3.0 * Math.pow(radius, 2)  * Math.PI * height;
  //   setVolume(localVolume);
  // }
  return (
    <View style={styles.container}>
      <Text style={styles.about}>Tóth Júlia, szoft 2/n, 2023-02-27 </Text>
      <Text style={styles.text}>Dolgozat feladat: terkup, 0301</Text>
      <Text style={styles.text}>Kúp térfogatának számítása</Text>
      <Text style={styles.text}>Sugár: </Text>
      <TextInput style={styles.inputField} onChangeText={(data) => setRadius(data)}/>
      <Text style={styles.text}>Magasság: </Text>
      <TextInput style={styles.inputField} onChangeText={(data) => setHeight(data)}/>
      <TouchableHighlight style={styles.button} onPress={() =>{setVolume(1.0/3.0 * Math.pow(radius, 2)  * Math.PI * height)}}>
        <Text style={styles.buttonFont}>
          Számít
        </Text>
      </TouchableHighlight>
      <Text style={styles.text}>Eredmény: </Text>
      <TextInput value={volume} editable={false} style={styles.inputField}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    backgroundColor: 'pink',
    width: '90%',
    height: 30,
    borderRadius:30,
    padding: 20
    
  },
  button:{
    backgroundColor: 'deeppink',
    width: '90%',
    height:30,
    alignItems: 'center',
    marginTop: 20,
    borderRadius:30
  },
  text:{
    fontSize:30
  },
  about:{
    fontSize: 60,
  },
  buttonFont:{
    // marginTop: 1,
    fontSize: 20
  }
});
