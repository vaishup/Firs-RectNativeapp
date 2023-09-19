import React, { useState } from 'react' ;  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity} from 'react-native';
 export default  function Header(){
    return(
        <View style ={styles.Header}>
            <Text style ={styles.title}>My FruitsList  gd</Text>
        </View>
    )
 }

 const styles = StyleSheet.create({
Header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
},
title:{
    textAlign: 'center',
    color:'#ffff',
    fontSize: 20,
    fontWeight: 'bold',
}

 })