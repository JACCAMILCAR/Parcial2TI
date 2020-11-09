import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import colores from '../utils/colores';
export default function FooterButton(props){
    const {calcular} = props
    return(
        <TouchableOpacity onPress={calcular}>
            <View style={stilo.button}>
                <Text style={[stilo.textButton]}>
                    CALCULAR
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const stilo = StyleSheet.create({
    textButton:{
        fontSize:20,
        fontWeight: 'bold',
        color:'black',
        textTransform:"uppercase",
        height:30,
        textAlign:"center",
        
    },
    button:{
        paddingVertical:8,
        paddingHorizontal:14,
        backgroundColor: colores.COLOR_RED,
        borderRadius:8,
    },


})