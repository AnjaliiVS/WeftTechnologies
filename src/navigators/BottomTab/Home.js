import React from 'react';
import {View, Text, StyleSheet, Image,FlatList,ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const DATA = [
    require('../../assets/pic11.jpg'),

    require('../../assets/pic12.jpg'),
    require('../../assets/pic13.jpg'),
    require('../../assets/pic14.jpg'),
        ];
        
  return (
    
    <View style={styles.container}>

<View style={{flexDirection:'row'}}>
  <View style={{flexDirection:'column',marginHorizontal:10,marginLeft:0}}>
<Image
        source={require('../../assets/pic1.jpg')}
        style={{height: 200, width: 165, borderRadius: 9,borderWidth:1,borderColor:"black"}}></Image>
<Text
        onPress={() => navigation.navigate('ProductDetails')}
        style={{fontSize: 15, fontWeight: 'bold', color: 'black',textAlign:'center'}}>
       Apple
      </Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <Image
        source={require('../../assets/pic2.jpg')}
        style={{height: 200, width: 165, borderRadius: 9,borderWidth:1,borderColor:"black"}}></Image>
<Text
        onPress={() => navigation.navigate('SamsungProd')}
        style={{fontSize: 15, fontWeight: 'bold', color: 'black',textAlign:'center'}}>
       Samsung
      </Text></View></View>


      <View style={{flexDirection:'row',marginTop:30}}>
  <View style={{flexDirection:'column',marginHorizontal:10,marginLeft:0}}>
<Image
        source={require('../../assets/pic3.jpg')}
        style={{height: 200, width: 165, borderRadius: 9,borderWidth:1,borderColor:"black"}}></Image>
<Text
        onPress={() => navigation.navigate('RedmiProduct')}
        style={{fontSize: 15, fontWeight: 'bold', color: 'black',textAlign:'center'}}>
       Redmi
       
      </Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <Image
        source={require('../../assets/pic4.jpg')}
        style={{height: 200, width: 165, borderRadius: 9,borderWidth:1,borderColor:"black"}}></Image>
<Text
        onPress={() => navigation.navigate('OppoProduct')}
        style={{fontSize: 15, fontWeight: 'bold', color: 'black',textAlign:'center'}}>
       OPPO
      </Text></View></View>




        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  
  },

  

});
