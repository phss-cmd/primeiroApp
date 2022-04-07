import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,Image,} from 'react-native';


export default function App(){
  return(
    <View style={estilo.container}>
    <Image style={estilo.img} source ={require("./assets/apple-logo-15.png")}/>
    <ScrollView >
    <View style={estilo.fotos}>
    <Text  style={estilo.titulo} > Apple </Text>
    <Text  style={estilo.frase}>Os 3 Ultimos Iphone</Text>
    <Text  style={estilo.titulo} > Iphone 11</Text>
    <Image style={estilo.img1} source ={require("./assets/iphone11_2.png")} />
    <Text  style={estilo.frase1} > -Tela LCD Liquid Retina HD de 6,1 polegadas </Text>
    <Text  style={estilo.frase1} > -Resistente a água e pó (até 30 minutos à profundidade máxima de 2 metros, IP68) </Text>
    <Text  style={estilo.frase1} > -Sistema de câmara dupla de 12 MP (Ultra grande angular, Grande angular e Teleobjetiva); modo Noite, modo Retrato e vídeos em 4K a 60 fps </Text>
    <Text  style={estilo.frase1} > -Sistema de câmara frontal de 12 MP com modo Retrato, vídeos em 4K e câmara lenta </Text>
    <Text  style={estilo.frase1} > -Face ID para autenticação segura </Text>
    <Text  style={estilo.titulo} > Iphone 12</Text>
    <Image style={estilo.img1} source ={require("./assets/iphone12.png")} />
    <Text  style={estilo.frase1} > -Tela Super Retina XDR de 6,1 polegadas</Text>
    <Text  style={estilo.frase1} > -Ceramic Shield. Mais resistente do que qualquer vidro de smartphone</Text>
    <Text  style={estilo.frase1} > -A14 Bionic, o processador mais rápido de sempre num smartphone
</Text>
    <Text  style={estilo.frase1} > -Sistema de câmara dupla avançado de 12 MP (Ultra grande angular e Grande angular) com modo Noite, Deep Fusion, HDR inteligente 3, gravação em HDR 4K Dolby Vision</Text>
    <Text  style={estilo.frase1} > -Câmara frontal TrueDepth de 12 MP com modo Noite, gravação em HDR 4K Dolby Vision</Text>
    <Text  style={estilo.titulo} > Iphone 13</Text>
    <Image style={estilo.img1} source ={require("./assets/iphone-13-apple.jpg")} />
    <Text  style={estilo.frase1} > -Tela Super Retina XDR de 6,1 polegadas </Text>
    <Text  style={estilo.frase1} > -O modo cinematic adiciona profundidade de campo rasa e muda o foco automaticamente em seus vídeos
 </Text>
    <Text  style={estilo.frase1} > -Sistema avançado de câmera dupla com câmeras Wide e Ultra Wide de 12MP; Estilos fotográficos, Smart HDR 4, modo noturno, gravação 4K Dolby Vision HDR</Text>
    <Text  style={estilo.frase1} > -Câmera frontal TrueDepth de 12 MP com modo noturno, gravação 4K Dolby Vision HDR </Text>
    <Text  style={estilo.frase1} > -Chip biônico A15 para desempenho ultrarrápido </Text>
    </View>
    </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    textAlign: 'center',
   alignItems: 'center',
  },
  titulo:{
    textAlign: 'center',
    fontSize: 30,
    marginTop: 5,
    marginBottom: 20,
  },
  frase:{
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    
  },
  frase1:{
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
    
  },
  img:{
    width: 50,
    height: 59,
    margin: 30,
    marginBottom: 10,
    alignItems: 'center',
    marginLeft: 30,
  },
   img1:{
    width: 315,
    height: 304,
    margin: 30,
    marginLeft: 30,
    alignItems: 'center',
  },
  fotos:{
    alignItems: 'center',
    
  }
});