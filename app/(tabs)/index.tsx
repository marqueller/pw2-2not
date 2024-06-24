import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { DarkTheme } from '@react-navigation/native';
import { getBackgroundColorAsync } from 'expo-system-ui';


export default function HomeScreen() {
  return (
    <ThemedView style={Style.titleContainer}>
      {
        <Image

          source={require('@/assets//images/img1.png')}
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
    backgroundColor: '#0ca0b',
  },
});