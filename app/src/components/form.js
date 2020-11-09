import React from 'react';
import { ScrollView, StyleSheet, TextInput, View, TouchableOpacity, FlatList, Text, CheckBoxProps } from 'react-native';
import colores from '../utils/colores';
import RNPickerSelect from 'react-native-picker-select';
export default function Form(props){
    const {setCantidad1,setCantidad2,setCantidad3,setCantidad4,setCantidad5,setCantidad6,setCantidad7,setCantidad8,setCantidad9,setCantidad10,setCantidad11,setCantidad12} = props;
    
    return(
            <View style={stilo.formulario}>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Palta</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad1(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Banana</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad2(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Chirimoya</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad3(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Durazno</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad4(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Frutilla</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad5(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Granada</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad6(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Kiwi</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad7(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Papaya</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad8(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Mandarina</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad9(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Pera</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad10(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Uva</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad11(e.nativeEvent.text)} />
                </View>
                <View style={stilo.rowInput}>
                    <Text style={[stilo.titulo, stilo.fondoblue]}>Sandía</Text>
                    <TextInput style={stilo.input} placeholder = "cantidad" onChange = {(e)=>setCantidad12(e.nativeEvent.text)} />
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
        height: 420,
        justifyContent: 'center'
    },
    input:{
        position:'relative',
        height:30,
        backgroundColor:"white",
        borderWidth:1,
        borderRadius:5,
        width:"60%",
        marginRight:5,
        marginLeft:5,
        color:"#000",
        paddingHorizontal:20,
        justifyContent:"right"
    },
    rowInput:{
        flexDirection:"row"
    },
    titulo:{
        position:'relative',
        fontSize:15,
        fontWeight: 'bold',
        color:'black',
        height:30,
        borderWidth:1,
        borderRadius:5,
        width:"100%",
        textAlign:"center",
      },
      fondoblue:{
        backgroundColor: colores.COLOR_BLUE,
        color:'white',
    },

})