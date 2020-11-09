import { StatusBar } from 'expo-status-bar'
import React, { Component, Fragment, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity, Button  } from 'react-native';

import colores from './app/src/utils/colores';
import Formulario from './app/src/components/form';
import FormularioResumen from './app/src/components/form2';
import ButtonForm from './app/src/components/button';

export default function App() {
  const lista = [
    {   key:'1',
        nombre:'Palta',
        proteina: 1.98,
        energia: 161,
        hidratos: 2.39,
        fibra: 5.00,
        vitaminaA: 61.0,
        potasio:599,
        hierro: 1.02
    },
    {
        key:'2',
        nombre:'Banana',
        proteina: 1.03,
        energia: 92.0,
        hidratos: 21.0,
        fibra: 2.40,
        vitaminaA: 8.0,
        potasio: 396,
        hierro: 0.310
    },
    {
        key:'3',
        nombre:'Chirimoya',
        proteina: 1.30,
        energia: 94.0,
        hidratos: 21.6,
        fibra: 2.40,
        vitaminaA: 1.00,
        potasio:264,
        hierro: 0.500
    },
    {
        key:'4',
        nombre:'Durazno',
        proteina: 0.700,
        energia: 43.0,
        hidratos: 9.10,
        fibra: 2.00,
        vitaminaA: 54.0,
        potasio:197,
        hierro: 0.110
    },
    {
        key:'5',
        nombre:'Frutilla',
        proteina: 0.610,
        energia: 30.0,
        hidratos: 4.72,
        fibra: 2.30,
        vitaminaA: 3.00,
        potasio:166,
        hierro: 0.380
    },
    {
        key:'6',
        nombre:'Granada',
        proteina: 0.950,
        energia: 68,
        hidratos: 16.6,
        fibra: 0.600,
        vitaminaA: 0,
        potasio:259,
        hierro: 0.300
    },
    {
        key:'7',
        nombre:'Kiwi',
        proteina: 0.990,
        energia: 61.0,
        hidratos: 11.5,
        fibra: 3.40,
        vitaminaA: 18.0,
        potasio:332,
        hierro: 0.410
    },
    {
        key:'8',
        nombre:'Papaya',
        proteina: 0.610,
        energia: 39.0,
        hidratos: 8.01,
        fibra: 1.80,
        vitaminaA: 175,
        potasio:257,
        hierro: 0.100
    },
    {
        key:'9',
        nombre:'Mandarina',
        proteina: 0.630,
        energia: 44.0,
        hidratos: 8.89,
        fibra: 2.30,
        vitaminaA: 92.0,
        potasio:157,
        hierro: 0.100
    },
    {
        key:'10',
        nombre:'Pera',
        proteina: 0.390,
        energia: 59.0,
        hidratos: 12.7,
        fibra: 2.40,
        vitaminaA: 2.00,
        potasio:125,
        hierro: 0.250
    },
    {
        key:'11',
        nombre:'Uva',
        proteina: 0.660,
        energia: 71,
        hidratos: 16.8,
        fibra: 1.00,
        vitaminaA: 7.00,
        potasio:185,
        hierro: 0.260
    },
    {
        key:'12',
        nombre:'Sandía',
        proteina: 0.620,
        energia: 32.0,
        hidratos: 6.68,
        fibra: 0.500,
        vitaminaA: 37.0,
        potasio:116,
        hierro: 0.170
    }

];
  const [cantidad1, setCantidad1] = useState(null);
  const [cantidad2, setCantidad2] = useState(null);
  const [cantidad3, setCantidad3] = useState(null);
  const [cantidad4, setCantidad4] = useState(null);
  const [cantidad5, setCantidad5] = useState(null);
  const [cantidad6, setCantidad6] = useState(null);
  const [cantidad7, setCantidad7] = useState(null);
  const [cantidad8, setCantidad8] = useState(null);
  const [cantidad9, setCantidad9] = useState(null);
  const [cantidad10, setCantidad10] = useState(null);
  const [cantidad11, setCantidad11] = useState(null);
  const [cantidad12, setCantidad12] = useState(null);

  const [totalEnergia, setTotalEnergia] = useState(null);
  const [totalProteina, setTotalProteina] = useState(null);
  const [totalHidratos, setTotalHidratos] = useState(null);
  const [totalFibra, setTotalFibra] = useState(null);
  const [totalVitaminaA, setTotalVitaminaA] = useState(null);
  const [potasio, setPotasio] = useState(null);
  const [hierro, setHierro] = useState(null);

  
  
  const calcular = () =>{
    var i=1;
    var subProteina = 0, subEnergia=0, subHidratos = 0, subFibra = 0, subVitamninaA = 0, subPotasio = 0, subHierro=0;
    var totalP=0, totalE = 0, totalH =0, totalF = 0, totalVA = 0, totalPo =0 , totalHi=0;

    lista.forEach(element => {
      if(i==1 && cantidad1!=null){
        subProteina = cantidad1 * element.proteina;
        subEnergia = cantidad1 * element.energia;  
        subHidratos = cantidad1 * element.hidratos; 
        subFibra = cantidad1 * element.fibra; 
        subVitamninaA = cantidad1 * element.vitaminaA; 
        subPotasio = cantidad1 * element.potasio; 
        subHierro = cantidad1 * element.hierro; 
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==2 && cantidad2!=null){
        subProteina = parseFloat(cantidad2) * element.proteina; 
        subEnergia = cantidad2 * element.energia;  
        subHidratos = cantidad2 * element.hidratos; 
        subFibra = cantidad2 * element.fibra; 
        subVitamninaA = cantidad2 * element.vitaminaA; 
        subPotasio = cantidad2 * element.potasio; 
        subHierro = cantidad2 * element.hierro; 
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==3 && cantidad3!=null){
        subProteina = parseFloat(cantidad3) * element.proteina;
        subEnergia = cantidad3 * element.energia;  
        subHidratos = cantidad3 * element.hidratos; 
        subFibra = cantidad3 * element.fibra; 
        subVitamninaA = cantidad3 * element.vitaminaA; 
        subPotasio = cantidad3 * element.potasio; 
        subHierro = cantidad3 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==4 && cantidad4!=null){
        subProteina = parseFloat(cantidad4) * element.proteina;
        subEnergia = cantidad4 * element.energia;  
        subHidratos = cantidad4 * element.hidratos; 
        subFibra = cantidad4 * element.fibra; 
        subVitamninaA = cantidad4 * element.vitaminaA; 
        subPotasio = cantidad4 * element.potasio; 
        subHierro = cantidad4 * element.hierro; 
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==5 && cantidad5!=null){
        subProteina = parseFloat(cantidad5) * element.proteina; 
        subEnergia = cantidad5 * element.energia;  
        subHidratos = cantidad5 * element.hidratos; 
        subFibra = cantidad5 * element.fibra; 
        subVitamninaA = cantidad5 * element.vitaminaA; 
        subPotasio = cantidad5 * element.potasio; 
        subHierro = cantidad5 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==6 && cantidad6!=null){
        subProteina = parseFloat(cantidad6) * element.proteina; 
        subEnergia = cantidad6 * element.energia;  
        subHidratos = cantidad6 * element.hidratos; 
        subFibra = cantidad6 * element.fibra; 
        subVitamninaA = cantidad6 * element.vitaminaA; 
        subPotasio = cantidad6 * element.potasio; 
        subHierro = cantidad6 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==7 && cantidad7!=null){
        subProteina = parseFloat(cantidad7) * element.proteina; 
        subEnergia = cantidad7 * element.energia;  
        subHidratos = cantidad7 * element.hidratos; 
        subFibra = cantidad7 * element.fibra; 
        subVitamninaA = cantidad7 * element.vitaminaA; 
        subPotasio = cantidad7 * element.potasio; 
        subHierro = cantidad7 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==8 && cantidad8!=null){
        subProteina = parseFloat(cantidad8) * element.proteina;
        subEnergia = cantidad8 * element.energia;  
        subHidratos = cantidad8 * element.hidratos; 
        subFibra = cantidad8 * element.fibra; 
        subVitamninaA = cantidad8 * element.vitaminaA; 
        subPotasio = cantidad8 * element.potasio; 
        subHierro = cantidad8 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==9 && cantidad9!=null){
        subProteina = parseFloat(cantidad9) * element.proteina; 
        subEnergia = cantidad9 * element.energia;  
        subHidratos = cantidad9 * element.hidratos; 
        subFibra = cantidad9 * element.fibra; 
        subVitamninaA = cantidad9 * element.vitaminaA; 
        subPotasio = cantidad9 * element.potasio; 
        subHierro = cantidad9 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==10 && cantidad10!=null){
        subProteina = parseFloat(cantidad10) * element.proteina; 
        subEnergia = cantidad10 * element.energia;  
        subHidratos = cantidad10 * element.hidratos; 
        subFibra = cantidad10 * element.fibra; 
        subVitamninaA = cantidad10 * element.vitaminaA; 
        subPotasio = cantidad10 * element.potasio; 
        subHierro = cantidad10 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==11 && cantidad11!=null){
        subProteina = parseFloat(cantidad11) * element.proteina; 
        subEnergia = cantidad11 * element.energia;  
        subHidratos = cantidad11 * element.hidratos; 
        subFibra = cantidad11 * element.fibra; 
        subVitamninaA = cantidad11 * element.vitaminaA; 
        subPotasio = cantidad11 * element.potasio; 
        subHierro = cantidad11 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      if(i==12 && cantidad12!=null){
        subProteina = parseFloat(cantidad12) * element.proteina; 
        subEnergia = cantidad12 * element.energia;  
        subHidratos = cantidad12 * element.hidratos; 
        subFibra = cantidad12 * element.fibra; 
        subVitamninaA = cantidad12 * element.vitaminaA; 
        subPotasio = cantidad12 * element.potasio; 
        subHierro = cantidad12 * element.hierro;
        totalP = subProteina + totalP;
        totalE = subEnergia + totalE;
        totalH = subHidratos + totalH;
        totalF = subFibra + totalF;
        totalVA = subVitamninaA + totalVA;
        totalPo = subPotasio + totalPo;
        totalHi = subHierro + totalHi;
      }
      i++;
    });
    
    setTotalProteina((totalP).toFixed(2).replace('.',','))
    setTotalEnergia((totalE).toFixed(2).replace('.',','))
    setTotalHidratos((totalH).toFixed(2).replace('.',','))
    setTotalFibra((totalF).toFixed(2).replace('.',','))
    setTotalVitaminaA((totalVA).toFixed(2).replace('.',','))
    setPotasio((totalPo).toFixed(2).replace('.',','))
    setHierro((totalHi).toFixed(2).replace('.',','))
  }
  return (
  <Fragment>
    <ImageBackground source={require('./assets/fruta.jpg')} style= {styles.fruta}>
      <View style={styles.estiloTitulo}>
        <Text style={styles.titulo}>Calculadora Nutricional de Frutas</Text>
        <Formulario 
          setCantidad1={setCantidad1}
          setCantidad2={setCantidad2}
          setCantidad3={setCantidad3}
          setCantidad4={setCantidad4}
          setCantidad5={setCantidad5}
          setCantidad6={setCantidad6}
          setCantidad7={setCantidad7}
          setCantidad8={setCantidad8}
          setCantidad9={setCantidad9}
          setCantidad10={setCantidad10}
          setCantidad11={setCantidad11}
          setCantidad12={setCantidad12}
        />
      </View>    
      <View style={styles.estiloTitulo2}>
        <Text style={styles.titulo}>Resultados calculados</Text>
        <FormularioResumen 
          totalEnergia={totalEnergia} 
          totalProteina={totalProteina}
          totalHidratos={totalHidratos}
          totalFibra={totalFibra}
          totalVitaminaA={totalVitaminaA}
          potasio={potasio}
          hierro={hierro}
        />
      </View> 

      <View style={styles.estiloTitulo3}>
        <ButtonForm calcular={calcular}  />
      </View>
    </ImageBackground> 
  </Fragment> 

  );
}


const styles = StyleSheet.create({
  estiloTitulo:{
    height:550,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems:"center",
    textAlign:"center",
  },
  titulo:{
    fontSize:30,
    fontWeight: 'bold',
    color: colores.COLOR_OSCURO,
    marginTop:25,
    alignItems:"center",
  },
  estiloTitulo2:{
    height:280,
    top:-30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    alignItems:"center",
  },
  estiloTitulo3:{
    height:100,
    top: 10,
    borderRadius: 30,
    alignItems:"center",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blancoModificado: {
    color: 'white',
    fontWeight: 'bold' ,
    fontSize: 30,
  }, logo:{
      width: 80,
      height: 80,
      resizeMode: 'contain',
      borderRadius: 30,
      marginTop:20
      },
  footerRight:{
    alignItems: 'flex-end',
    justifyContent: 'center'

  },
  fruta:{
    height: '100%',
    width: '100%'
  }
});