import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá pessoal!</Text>

        <View>
        <Image style={styles.linux} source={{ uri:'https://i.pinimg.com/736x/4a/d5/3e/4ad53e464630f3edb9d01dee6e52802c.jpg',}} />
        <Image style={styles.linux} source={{ uri:'https://64.media.tumblr.com/9d7b9f4fc4d788d64264cee038e154d3/a3703972eaa45a29-0b/s640x960/fe1890ce1a5dadd09e2f3f84468d50d668bec41d.png',}} />

        </View>

        <View>
        <Button onPress={'Aprenda Linux mental (apos aprender JavaScript mental)'}/>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'


  },

  title: {
    fontSize: 50,
    margin: 20,

  },

  linux: {
    width: 200,
    height: 200,
    borderColor: 'purple',
    borderWidth: 5,
    borderRadius: 30,
    padding: 20,
    margin: 10,

  }

})