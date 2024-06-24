import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getBackgroundColorAsync } from 'expo-system-ui';
import { DarkTheme } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    
      <ThemedView style={style.tittleContainer}>
      <Image source={require('@/assets/images/image.jpg')} style={{left: -110, top: -80, alignContent: 'center'}} />
      </ThemedView>
    
  );
};

const style = StyleSheet.create({
  tittleContainer: {backgroundColor: '#0c0A0B', alignItems: 'center', top:10, gap:20, padding:320},
});
  


