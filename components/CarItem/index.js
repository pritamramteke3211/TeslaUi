import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'
import styles from './styles'

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

    return (
        <>
        <View style={styles.carContainer}>

        <ImageBackground source={image} 
          style={styles.image}
        >
          </ImageBackground>

        <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} {''}
        <Text style={{textDecorationLine: 'underline'}}>{taglineCTA}</Text>
        </Text>
        </View>

        <View style={styles.btncontainer}>
        <StyledButton type='primary' contents='custom order' onPress={() =>console.warn( "Custom Button was Pressed")}/>

        <StyledButton type='secondary' contents='existing inventory' onPress={() =>console.warn("Existing Button was Pressed")}/>

        </View>


      </View>
      </>
    )
}


export default CarItem;
