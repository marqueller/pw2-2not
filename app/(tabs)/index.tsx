import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DarkTheme } from '@react-navigation/native';

export default function HomeScreen() {
  return (


    <ThemedView style={style.titleContainer}>

      {<Image
        source={require('@/assets/images/img.png')}
        style={{ left: -110, top: -80, alignContent: 'center' }}
      />
      }
    </ThemedView>
  )
}

const style = StyleSheet.create({

  titleContainer: {
    alignItems: 'center',
    gap: 20,
    padding: 320,
    top: 10,
    backgroundColor: '0c0a0b',
  },

});