import React from 'react';
import { StyleSheet, TextInput, Text, View, Button  } from 'react-native';
import colores from '../utils/colores';
export default function Form(props){
    const {totalEnergia, totalProteina, totalHidratos, totalFibra, totalVitaminaA, potasio, hierro} = props;
    return(
            <View style={stilo.formulario}>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Energía
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    {totalEnergia} kcal
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Proteínas
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                        {totalProteina} g
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Hidratos de C.
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    {totalHidratos} g
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Fibra
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                        {totalFibra} g
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Vitamina A
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    {totalVitaminaA} ug ER
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Potasio
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    {potasio} mg
                    </Text>
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>
                    Hierro
                    </Text>
                    <Text style={[stilo.titulo, stilo.inputPersonalizado,stilo.fondowith]}>
                    {hierro} mg
                    </Text>
                </View>
                
            </View>
            
        
        
    )
}
const stilo = StyleSheet.create({
    formulario:{
        position:"relative",
        bottom: 0,
        width: "100%",
        paddingHorizontal: 50,
        backgroundColor: colores.COLOR_PRIMARIO,
        borderRadius: 20,
        height: 250,
        justifyContent: 'center'

    },
    inputPersonalizado:{
        width:"35%",
        marginLeft: 5
    },
    rowInput:{
        flexDirection:"row"
    },
    titulo:{
        fontSize:15,
        fontWeight: 'bold',
        color:'black',
        height:30,
        borderWidth:1,
        borderRadius:5,
        width:"60%",
        textAlign:"center",
    },
    fondoblue:{
        backgroundColor: colores.COLOR_BLUE,
        color:'white',
    },
    fondowith:{
        backgroundColor: colores.COLOR_WITH,
    },


})