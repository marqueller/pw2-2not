import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DarkTheme } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <ThemedView style={style.titleContainer}>
      {
        <Image
          source={require('@/assets/images/imagem1.jpg')}
          style={{ left: -100, top: -80, alignContent: 'center' }}
        />
      }

    </ThemedView>
  )
}
const style = StyleSheet.create({
  titleContainer: {
    alignContent: 'center',
    gap: 20,
    padding: 320,
    top: 10,
    backgroundColor: '#0C0A0B',
  }
})

