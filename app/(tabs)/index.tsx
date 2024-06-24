import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { getBackgroundColorAsync } from 'expo-system-ui';
import { DarkTheme } from '@react-navigation/native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <Image source={require('@/assets/images/img-react.jpg')} style={{ left: -110, top: -80, alignContent: 'center' }} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  titleContainer: { backgroundColor: "#0C0A0B", alignItems: "center", top: 10, gap: 20, padding: 320 },
});
