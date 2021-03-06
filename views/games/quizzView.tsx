import React, { useState, useEffect, useReducer } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import QuizzDisplayer from '../../components/quizzDisplayer'

export default function QuizzView(props) {
    const [isLoading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#D42D4E', '#B11231', '#8D011D']}>
                {
                    isLoading ? (<ActivityIndicator />) : (
                        <React.Fragment>
                            <Text>Quizz Work !</Text>

                            <QuizzDisplayer></QuizzDisplayer>
                        </React.Fragment>
                    )
                }
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    }
})