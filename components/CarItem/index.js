import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {
    return (
        <>
        <View style={styles.carContainer}>

        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} 
          style={styles.image}
        >
          </ImageBackground>

        <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton type='primary' contents='custom order' onPress={() =>console.warn( "Custom Button was Pressed")}/>

        <StyledButton type='secondary' contents='existing inventory' onPress={() =>console.warn("Existing Button was Pressed")}/>

      </View>
      </>
    )
}


export default CarItem;
