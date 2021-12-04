import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';
import styles from './components/CarItem/styles';

export default function App() {
  return (
    <View style={styles.container}>
        <CarItem/>
    </View>
  );
}

