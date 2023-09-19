import React from 'react' ;  
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native'
 export default  function Sandbox(){
    return(
        <View style={styles.container}>
            <Text style ={styles.boxOne}>one</Text>
            <Text style ={styles.boxTwo}>Two</Text>
            <Text style ={styles.boxThree}>Three</Text>
            <Text style ={styles.boxFour}>Four</Text>


        </View>
    )
 }
 const styles  = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'flex-end',
        paddingTop:40 ,
        backgroundColor: '#ddd',
    },
    boxOne:{
        backgroundColor: 'violet',
        padding:10,
    }, boxTwo:{
        backgroundColor: 'gold',
        padding:20,
    },
    boxThree:{
        backgroundColor: 'coral',
        padding:30,
    }, boxFour:{
        backgroundColor: 'skyblue',
        padding:40,
    }

 })