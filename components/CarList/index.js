import React from 'react';
import { View, Text , FlatList} from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';
import styles from './styles';

const CarsList = () => {
    console.log(cars)
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem = {({item}) => <CarItem car={item} />}
            />
        </View>
    )
}

export default CarsList;
