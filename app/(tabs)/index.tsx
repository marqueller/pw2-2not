import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      {
        <Image
          source={require('@/assets/images/img.png')}
          style={{ left: -110, top: -80, alignContent: 'center' }}
        />
      }
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {

    alignItems: 'center',
    gap: 20,
    padding: 320,
    top: 10,
    backgroundColor: '#0C0A0B',
  },

});
