import React from 'react'
import { View, Text , Pressable} from 'react-native'
import styles from './styles';

const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress= props.onPress;

    const {type , onPress, contents } = props; // Shorthand method usig destructuring

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6' 
    const color = type === 'primary' ? '#FFFFFF' : '#171A20' 

    return (
        <View style={styles.container} >
            <Pressable
            style={[styles.button, {backgroundColor : backgroundColor}]}
            onPress={() => onPress()}
            >
            <Text style={[styles.text, { color: color}]}>{contents}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;
